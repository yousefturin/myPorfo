/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Provides helpers to store encrypted JSON in localStorage and a zustand storage adapter
import CryptoJS from 'crypto-js';

const DEFAULT_PASSPHRASE = 'tiko_default_passphrase_change_me';
const ENV_PASSPHRASE = (typeof process !== 'undefined' && process.env && (process.env.NEXT_PUBLIC_STORAGE_PASSPHRASE || process.env.STORAGE_PASSPHRASE)) || undefined;

function isWebCryptoAvailable() {
    return typeof window !== 'undefined' && !!(window.crypto && window.crypto.subtle);
}

async function deriveKey(passphrase: string, salt: Uint8Array) {
    if (isWebCryptoAvailable()) {
        const enc = new TextEncoder();
        const keyMaterial = await window.crypto.subtle.importKey(
            'raw',
            enc.encode(passphrase),
            { name: 'PBKDF2' },
            false,
            ['deriveKey']
        );

        return window.crypto.subtle.deriveKey(
            //@ts-expect-error : ignore
            { name: 'PBKDF2', salt, iterations: 100_000, hash: 'SHA-256' },
            keyMaterial,
            { name: 'AES-GCM', length: 256 },
            false,
            ['encrypt', 'decrypt']
        );
    }
    return null;
}

async function encryptWithWebCrypto(text: string, passphrase: string) {
    const enc = new TextEncoder();
    const salt = window.crypto.getRandomValues(new Uint8Array(16));
    const iv = window.crypto.getRandomValues(new Uint8Array(12));
    const key = await deriveKey(passphrase, salt);
    if (!key) throw new Error('WebCrypto key derivation failed');
    const ct = await window.crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        key,
        enc.encode(text)
    );
    const ctArr = new Uint8Array(ct);
    return `${arrayBufferToBase64(salt)}:${arrayBufferToBase64(iv)}:${arrayBufferToBase64(ctArr)}`;
}

async function decryptWithWebCrypto(payload: string, passphrase: string) {
    const [saltB64, ivB64, ctB64] = payload.split(':');
    const salt = base64ToUint8Array(saltB64);
    const iv = base64ToUint8Array(ivB64);
    const ct = base64ToUint8Array(ctB64);
    const key = await deriveKey(passphrase, salt);
    if (!key) throw new Error('WebCrypto key derivation failed');
    const pt = await window.crypto.subtle.decrypt({ name: 'AES-GCM', iv }, key, ct);
    const dec = new TextDecoder();
    return dec.decode(pt);
}

function arrayBufferToBase64(buf: Uint8Array) {
    let binary = '';
    const len = buf.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(buf[i]);
    }
    return btoa(binary);
}

function base64ToUint8Array(b64: string) {
    const binary = atob(b64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}

function encryptWithCryptoJS(text: string, passphrase: string) {
    return CryptoJS.AES.encrypt(text, passphrase).toString();
}

function decryptWithCryptoJS(cipher: string, passphrase: string) {
    const bytes = CryptoJS.AES.decrypt(cipher, passphrase);
    return bytes.toString(CryptoJS.enc.Utf8);
}

export async function encryptString(text: string, passphrase = DEFAULT_PASSPHRASE) {
    if (typeof window === 'undefined') return text;
    try {
        if (isWebCryptoAvailable()) {
            return await encryptWithWebCrypto(text, passphrase);
        }
    } catch (e) {
        // fallback
    }
    return encryptWithCryptoJS(text, passphrase);
}

export async function decryptString(cipher: string, passphrase = DEFAULT_PASSPHRASE) {
    if (typeof window === 'undefined') return cipher;
    try {
        if (isWebCryptoAvailable() && cipher.includes(':')) {
            return await decryptWithWebCrypto(cipher, passphrase);
        }
    } catch (e) {
        // fallback
    }
    return decryptWithCryptoJS(cipher, passphrase);
}

export async function setEncryptedItem(key: string, value: unknown, passphrase?: string) {
    const str = JSON.stringify(value);
    const cipher = await encryptString(str, passphrase);
    localStorage.setItem(key, cipher);
}

export async function getEncryptedItem<T = any>(key: string, passphrase?: string): Promise<T | null> {
    const cipher = localStorage.getItem(key);
    if (!cipher) return null;
    const plain = await decryptString(cipher, passphrase);
    try {
        return JSON.parse(plain) as T;
    } catch (e) {
        return null;
    }
}

// Adapter for zustand persist storage that keeps values encrypted in localStorage
export function createEncryptedStorage(passphrase?: string) {
    const pw = passphrase || ENV_PASSPHRASE || DEFAULT_PASSPHRASE;
    const hashedKey = (name: string) => {
        try {
            const hmac = CryptoJS.HmacSHA256(name, pw);
            return hmac.toString(CryptoJS.enc.Base64);
        } catch (e) {
            return name;
        }
    };
    return {
        getItem: (name: string) => {
            const k = hashedKey(name);
            const cipher = localStorage.getItem(k);
            if (cipher == null) return null;
            try {
                const plain = decryptWithCryptoJS(cipher, pw);
                return plain;
            } catch (e) {
                return cipher;
            }
        },
        setItem: (name: string, value: string) => {
            const k = hashedKey(name);
            try {
                const cipher = encryptWithCryptoJS(value, pw);
                localStorage.setItem(k, cipher);
            } catch (e) {
                localStorage.setItem(k, value);
            }
        },
        removeItem: (name: string) => {
            const k = hashedKey(name);
            return localStorage.removeItem(k);
        },
    } as Storage;
}

// Migrate a plain key to the hashed key name (idempotent)
export function migrateKey(oldName: string, passphrase?: string) {
    const pw = passphrase || ENV_PASSPHRASE || DEFAULT_PASSPHRASE;
    const storage = createEncryptedStorage(pw) as Storage & { getItem: (n: string) => string | null };
    const hashed = (name: string) => {
        try {
            const hmac = CryptoJS.HmacSHA256(name, pw);
            return hmac.toString(CryptoJS.enc.Base64);
        } catch (e) {
            return name;
        }
    };

    const oldRaw = localStorage.getItem(oldName);
    const newKey = hashed(oldName);
    // If new key already exists, do nothing
    if (localStorage.getItem(newKey)) return;
    if (oldRaw == null) return;
    try {
        // If oldRaw looks like encrypted payload for this passphrase, attempt decrypt then re-encrypt under hashed key
        let plaintext: string;
        try {
            plaintext = decryptWithCryptoJS(oldRaw, pw);
        } catch (e) {
            // assume oldRaw is plain
            plaintext = oldRaw;
        }
        const cipher = encryptWithCryptoJS(plaintext, pw);
        localStorage.setItem(newKey, cipher);
        localStorage.removeItem(oldName);
    } catch (e) {
        // On any failure, do not remove old key
        console.error('Migration failed for key', oldName, e);
    }
}

// Clear a list of app keys (hashed) from localStorage. If no list provided, clears common app keys.
export function clearKeys(names?: string[], passphrase?: string) {
    const pw = passphrase || ENV_PASSPHRASE || DEFAULT_PASSPHRASE;
    const hashed = (name: string) => {
        try {
            const hmac = CryptoJS.HmacSHA256(name, pw);
            return hmac.toString(CryptoJS.enc.Base64);
        } catch (e) {
            return name;
        }
    };

    const defaultKeys = [
        'auth-storage-pos-v1',
        'create-Bulk-link-form-storage-pos-v2',
        'create-single-link-form-storage-pos-v2',
        'forgot-password-store-pos-v1',
        'user-storage-pos-v1',
        'user_uuid',
    ];

    const keysToClear = names && names.length ? names : defaultKeys;
    keysToClear.forEach((k) => {
        try {
            const hk = hashed(k);
            localStorage.removeItem(hk);
            // also remove plain key if present
            localStorage.removeItem(k);
        } catch (e) {
            // ignore
        }
    });
}

export default {
    setEncryptedItem,
    getEncryptedItem,
    createEncryptedStorage,
};

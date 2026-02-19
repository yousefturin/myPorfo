/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * A service to generate and store a UUID for web browsers
 * @returns {string | null} The UUID
 */
import encryptedStorage from './encryptedStorage';

class UuidService {
  private static uuid: string | null = null;
  private static readonly UUID_KEY = 'user_uuid';
  private static encryptedStorage = encryptedStorage;

  static getUuid(): string | null {
    try {
      // Check if we're running in a browser environment
      if (typeof window === 'undefined') {
        console.warn('UuidService: localStorage not available in server environment');
        return null;
      }

      // Get the stored UUID from encrypted localStorage
      // Read UUID via encrypted storage (hashed key)
      this.uuid = this.encryptedStorage.createEncryptedStorage().getItem(this.UUID_KEY);

      // If the UUID doesn't exist, generate a new one and store it in localStorage
      if (!this.uuid) {
        try {
          this.uuid = this.generateRandomUuid();
          try {
            this.encryptedStorage.createEncryptedStorage().setItem(this.UUID_KEY, this.uuid);
          } catch (e) {
            localStorage.setItem(this.UUID_KEY, this.uuid);
          }
        } catch (error) {
          console.error("Error storing uuid in localStorage", error);
          return null;
        }
      }
      return this.uuid;
    } catch (error) {
      console.error('Error retrieving or generating UUID:', error);
      return null;
    }
  }


  static generateRandomUuid(): string {
    function getRandomValues(size: number): Uint8Array {
      const array = new Uint8Array(size);
      for (let i = 0; i < size; i++) {
        array[i] = Math.floor(Math.random() * 256);
      }
      return array;
    }

    const bytes = getRandomValues(16);

    // Set version (4) and variant (RFC 4122)
    bytes[6] = (bytes[6] & 0x0f) | 0x40; // Version 4 (random)
    bytes[8] = (bytes[8] & 0x3f) | 0x80; // Variant (RFC 4122)

    return [...bytes].map((b, i) =>
      [4, 6, 8, 10].includes(i) ? `-${b.toString(16).padStart(2, '0')}` : b.toString(16).padStart(2, '0')
    ).join('');
  }
}
export default UuidService;

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EmailForm.css';
export default function EmailForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_c1u5sbj', 'template_ldqsaxv', form.current, {
                publicKey: '23uTteGxxr881mW29',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="contact-form">
            <label className="form-label">Name</label>
            <input type="text" name="from_name" className="form-input" placeholder='John' />
            <label className="form-label">Email</label>
            <input type="email" name="from_email" className="form-input" placeholder='john@example.com' />
            <label className="form-label">Message</label>
            <textarea name="message" className="form-textarea"></textarea>
            <input type="submit" value="Send" className="form-submit" />
        </form>
    );
};

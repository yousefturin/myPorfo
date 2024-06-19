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
        <section className="faq-section">
            <h2 style={{ marginBottom: 0 }}>Contact me</h2>
            <form ref={form} onSubmit={sendEmail} className="contact-form">
                <div className="form-group">
                    <input type="text" name="from_name" className="form-input" placeholder=' ' />
                    <label className="form-label">Name</label>
                </div>
                <div className="form-group">
                    <input type="email" name="from_email" className="form-input" placeholder=' ' />
                    <label className="form-label">Email</label>
                </div>
                <div className="form-group">
                    <textarea name="message" className="form-textarea" placeholder=' '></textarea>
                    <label className="form-label">Message</label>
                </div>
                <input type="submit" value="Send" className="form-submit" />
            </form>
        </section>
    );
};

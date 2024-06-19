import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import './EmailForm.css';
import SvgComponent from '../../utils/SvgComponent';

const validationSchema = Yup.object().shape({
    from_name: Yup.string().required('Name is required'),
    from_email: Yup.string().email('Invalid email address').required('Email is required'),
    message: Yup.string().required('Message is required'),
});

const Notification = ({ message, onClose }) => {
    React.useEffect(() => {
        const timer = setTimeout(onClose, 5000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="notification">
            {message}
            <div className="notification-timer"></div>
        </div>
    );
};

export default function EmailForm() {
    const [notification, setNotification] = useState('');

    const initialValues = {
        from_name: '',
        from_email: '',
        message: '',
    };

    const sendEmail = (values, { setSubmitting, resetForm }) => {
        emailjs
            .send('service_c1u5sbj', 'template_ldqsaxv', values, '23uTteGxxr881mW29')
            .then(
                () => {
                    console.log('SUCCESS!');
                    resetForm();
                    setNotification('Message sent successfully!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                }
            )
            .finally(() => {
                setSubmitting(false);
            });
    };

    return (
        <section className="faq-section">
            <h2 style={{ marginBottom: 0 }}>Contact me</h2>
            {notification && (
                <Notification message={notification} onClose={() => setNotification('')} />
            )}
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={sendEmail}
            >
                {({ isSubmitting, errors, touched }) => (
                    <Form className="contact-form">
                        <div className={`form-group ${errors.from_name && touched.from_name ? 'error' : ''}`}>
                            <Field type="text" name="from_name" className="form-input" placeholder=' ' />
                            <label className="form-label">Name</label>
                        </div>
                        <div className={`form-group ${errors.from_email && touched.from_email ? 'error' : ''}`}>
                            <Field type="email" name="from_email" className="form-input" placeholder=' ' />
                            <label className="form-label">Email</label>
                        </div>
                        <div className={`form-group ${errors.message && touched.message ? 'error' : ''}`}>
                            <Field as="textarea" name="message" className="form-textarea" placeholder=' ' />
                            <label className="form-label">Message</label>
                        </div>
                        <button type="submit" className="form-submit" disabled={isSubmitting}>
                            <SvgComponent
                                svgKey="SendSvg"
                                width={16}
                                height={16}
                                stroke='white'
                            />
                            Send
                        </button>
                    </Form>
                )}
            </Formik>
        </section>
    );
}

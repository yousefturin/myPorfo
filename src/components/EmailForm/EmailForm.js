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
        const timer = setTimeout(onClose, 3000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="notification">
            <div className='notification-wrapper'>
                <SvgComponent
                    svgKey="CheckTrueSvg"
                    width={16}
                    height={16}
                    stroke='white'
                />
                {message}
            </div>
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
                    setNotification('Message sent successfully! 👍🏼');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setNotification('Message Failed! 😢');
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
                    <Form className="contact-form" title='contact form'>
                        <div className={`form-group ${errors.from_name && touched.from_name ? 'error' : ''}`}>
                            <Field type="text" id="from_name" name="from_name" title='name' className="form-input" placeholder=' ' />
                            <label htmlFor="from_name" className="form-label" title='name'>Name</label>
                        </div>
                        <div className={`form-group ${errors.from_email && touched.from_email ? 'error' : ''}`}>
                            <Field type="email" id="from_email" name="from_email" title='name' className="form-input" placeholder=' ' />
                            <label htmlFor="from_email" className="form-label" title='email'>Email</label>
                        </div>
                        <div className={`form-group ${errors.message && touched.message ? 'error' : ''}`}>
                            <Field as="textarea" id="message" name="message" title='name' className="form-textarea" placeholder=' ' />
                            <label htmlFor="message"  className="form-label" title='message'>Message</label>
                        </div>
                        <button type="submit" className="form-submit" disabled={isSubmitting} title='submit contact button'>
                            <SvgComponent
                                svgKey="SendSvg"
                                width={16}
                                height={16}
                                stroke='black'
                                title='send icon'
                            />
                            Send
                        </button>
                    </Form>
                )}
            </Formik>
        </section>
    );
}

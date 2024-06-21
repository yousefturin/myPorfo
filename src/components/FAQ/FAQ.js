// src/components/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';
import SvgComponent from '../../utils/SvgComponent';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "What is your experience in React?",
            answer: "I have developed several full-stack applications using React, focusing on creating outstanding UI/UX. My projects include configuring security for URLs and implementing comprehensive front-end functionalities."
        },
        {
            question: "Can you work with other JavaScript frameworks?",
            answer: "Yes, I have developed a fully-functional social media application using React Native, which involved UI/UX research, and I also have experience with Next.js. Additionally, I created a React Native app for Muslim prayer timings and related features."
        },
        {
            question: "Do you have experience with backend development?",
            answer: "Yes, I have built full-stack applications with Node.js, Flask, and Django. My experience includes implementing authentication, backend logic, and working with databases like MongoDB, SQL, and Firebase."
        },
        {
            question: "Can you elaborate on your work with Python and AI?",
            answer: "Certainly. I have developed applications using Python for computer vision tasks such as parking space tracking using AI, face and voice emotion recognition, and letter recognition. I also created a Photoshop-like application using Flask and SQLite, leveraging ResNet-101 and DeOldify models for image processing."
        },
        {
            question: "Can you describe your project management experience?",
            answer: "Throughout my university and side projects, I have managed and fully configured several applications from start to finish. This includes conducting UI/UX research, implementing both frontend and backend components, and ensuring the applications meet all project requirements."
        }
    ];
    

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <div className="faq-list">
                {questions.map((item, index) => (
                    <div key={index} className="faq-item">
                        <div className="question" onClick={() => toggleAnswer(index)}>
                            <h3>{item.question}</h3>
                            <div className={"arrow-segment"}>
                                <span className={`arrow-segment-wrapper ${activeIndex === index ? 'rotate' : ''}`}>
                                    <SvgComponent
                                        svgKey="ArrowDownSvg"
                                        width={18}
                                        height={18}
                                        stroke='var(--text--tertiary)'
                                        title='arrow down icon'
                                    />
                                </span>
                            </div>
                        </div>
                        <p className={`answer ${activeIndex === index ? 'active' : ''}`}>{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FAQ;

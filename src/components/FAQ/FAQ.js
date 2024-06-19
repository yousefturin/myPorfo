// src/components/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';
import SvgComponent from '../../utils/SvgComponent';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const questions = [
        {
            question: "What is your experience in React?",
            answer: "I have over 3 years of experience in building React applications, focusing on both frontend and full-stack development."
        },
        {
            question: "Can you work with other JavaScript frameworks?",
            answer: "Yes, I have experience with Vue.js and Angular as well."
        },
        {
            question: "Do you have experience with backend development?",
            answer: "Yes, I have worked with Node.js, Express, and have experience with databases like MongoDB and SQL."
        },
        // Add more questions and answers as needed
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
                                        stroke='#e8e8e8'
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

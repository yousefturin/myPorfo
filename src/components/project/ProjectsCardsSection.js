import React, { useState, useEffect, useRef } from 'react';
import Card from './cards';
import './cards.css';
import SvgComponent from '../../utils/SvgComponent';

export default function ProjectsCardsSection() {
    const [offset, setOffset] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const cardsContainerRef = useRef(null);
    const cards = Array.from({ length: 10 }); // Example with 10 cards

    // Update card width on load and resize
    useEffect(() => {
        const updateCardWidth = () => {
            if (cardsContainerRef.current) {
                const cardElement = cardsContainerRef.current.querySelector('.card-main');
                if (cardElement) {
                    const cardElementWidth = cardElement.offsetWidth;
                    setCardWidth(cardElementWidth + 32); // Assuming 32px is the gap between cards
                }
            }
        };

        updateCardWidth();
        window.addEventListener('resize', updateCardWidth);
        return () => window.removeEventListener('resize', updateCardWidth);
    }, []);

    const handleLeftClick = () => {
        setOffset(prevOffset => Math.max(prevOffset - 1, 0));
    };

    const handleRightClick = () => {
        const visibleCardsCount = Math.floor(window.innerWidth / cardWidth);
        setOffset(prevOffset => Math.min(prevOffset + 1, cards.length - visibleCardsCount));
    };

    const getTransformValue = () => {
        return `translateX(-${offset * cardWidth}px)`;
    };

    return (
        <div className='project-cards-main'>
            <div className="project-cards-wrapper">
                <div>
                    <h1>Projects I worked.</h1>
                </div>

                <div className='project-card-padding' ref={cardsContainerRef}>
                    <div className='cards-container' style={{ transform: getTransformValue() }}>
                        {cards.map((_, index) => (
                            <Card key={index} />
                        ))}
                    </div>
                </div>
                <div className='controls'>
                    <button onClick={handleLeftClick} className={`btn-card-navigation ${offset === 0 ? 'disabled' : ''}`}>
                        <SvgComponent
                            svgKey="ArrowLeftSvg"
                            width={16}
                            height={16}
                            stroke={offset === 0 ? '#b4b4b4' : '#007AFF'}
                            fill='none'
                        />
                    </button>
                    <button onClick={handleRightClick} className={`btn-card-navigation ${offset >= cards.length - Math.floor(window.innerWidth / cardWidth) ? 'disabled' : ''}`}>
                        <SvgComponent
                            svgKey="ArrowRightSvg"
                            width={16}
                            height={16}
                            stroke={offset >= cards.length - Math.floor(window.innerWidth / cardWidth) ? '#b4b4b4' : '#007AFF'}
                            fill='none'
                        />
                    </button>

                </div>
            </div>
        </div>
    );
}

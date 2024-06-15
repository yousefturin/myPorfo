import React, { useState } from 'react';
import Card from './cards';
import './cards.css';
import SvgComponent from '../../utils/SvgComponent';

export default function ProjectsCardsSection() {
    const [offset, setOffset] = useState(0);
    const cards = Array.from({ length: 10 }); // Example with 10 cards

    const handleLeftClick = () => {
        setOffset(prevOffset => Math.max(prevOffset - 1, 0));
    };

    const handleRightClick = () => {
        setOffset(prevOffset => Math.min(prevOffset + 1, cards.length - 3)); // Ensure we don't go past the last card in view
    };

    const getTransformValue = () => {
        return `translateX(calc(-${offset * 12}% + ${0}rem))`;
    };
    
    // Big Screen setup

        // const getTransformValue = () => {
    //     if (offset === 0) {
    //     return `translateX(0%)`;
    //     } else if (offset === 1) {
    //     return `translateX(-16.5%)`;
    //     } else {
    //     const baseValue = 16.5 + (offset - 1) * 12;
    //     return `translateX(${-baseValue}%)`;
    //     }
    //    };

    return (
        <div className='project-cards-main'>
            <div className="project-cards-wrapper">
                <div>
                    <h1>Projects I worked.</h1>
                </div>

                <div className='project-card-padding'>
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
                    <button onClick={handleRightClick} className={`btn-card-navigation ${offset === cards.length - 3 ? 'disabled' : ''}`}>
                        <SvgComponent
                            svgKey="ArrowRightSvg"
                            width={16}
                            height={16}
                            stroke={offset === cards.length - 3 ? '#b4b4b4' : '#007AFF'}
                            fill='none'
                        />
                    </button>

                </div>
            </div>
        </div>
    );
}
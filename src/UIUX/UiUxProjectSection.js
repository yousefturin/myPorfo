import React, { useEffect, useRef, useState } from 'react'
import SvgComponent from '../utils/SvgComponent';
import uxuiPosts from '../constants/uxuiPost';
import UiUxCard from './UiUxCard';

export default function UiUxProjectSection() {
    const [offset, setOffset] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const cardsContainerRef = useRef(null);
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
        setOffset(prevOffset => Math.min(prevOffset + 1, uxuiPosts.length - visibleCardsCount));
    };

    const getTransformValue = () => {
        return `translateX(-${offset * cardWidth}px)`;
    };
    return (
        <section className='blog-cards-main'>
            <div className="blog-cards-wrapper">
                <div className='header-blog-cards'>
                    <h1>UI /UX Designs.</h1>
                </div>

                <div className='blog-card-padding' ref={cardsContainerRef}>
                    <div className='blog-cards-container' style={{ transform: getTransformValue() }}>
                        {uxuiPosts.map((blog) => (
                            <UiUxCard key={blog.id} cardTitle={blog.title} imageURL={blog.imageURL} cardDescription={blog.description} cardLink={blog.link} />
                        ))}
                    </div>
                </div>
                <div className='blog-controls'>
                    <button onClick={handleLeftClick} className={`blog-btn-card-navigation ${offset === 0 ? 'disabled' : ''}`} title='left arrow navigation'>
                        <SvgComponent
                            svgKey="ArrowLeftSvg"
                            width={16}
                            height={16}
                            stroke={offset === 0 ? 'var(--text--secondary)' : 'var(--color-main--primary)'}
                            fill='none'
                        />
                    </button>
                    <button onClick={handleRightClick} className={`blog-btn-card-navigation ${offset >= uxuiPosts.length - Math.floor(window.innerWidth / cardWidth) ? 'disabled' : ''}`} title='right arrow navigation'>
                        <SvgComponent
                            svgKey="ArrowRightSvg"
                            width={16}
                            height={16}
                            stroke={offset >= uxuiPosts.length - Math.floor(window.innerWidth / cardWidth) ? 'var(--text--secondary)' : 'var(--color-main--primary)'}
                            fill='none'
                        />
                    </button>

                </div>
            </div>
        </section>
    )
}

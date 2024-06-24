import React, { useState, useEffect, useRef } from 'react';
import BlogCard from './BlogCard';
import './blogcards.css';
import SvgComponent from '../../utils/SvgComponent';
import blogPosts from '../../constants/blogsPosts';

const BlogsCardSection = () => {
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
        setOffset(prevOffset => Math.min(prevOffset + 1, blogPosts.length - visibleCardsCount));
    };

    const getTransformValue = () => {
        return `translateX(-${offset * cardWidth}px)`;
    };

    return (
        <section className='blog-cards-main'>
            <div className="blog-cards-wrapper">
                <div>
                    <h1>Blogs.</h1>
                </div>

                <div className='blog-card-padding' ref={cardsContainerRef}>
                    <div className='blog-cards-container' style={{ transform: getTransformValue() }}>
                        {blogPosts.map((blog) => (
                            <BlogCard key={blog.id} cardTitle={blog.title} imageURL={blog.imageURL} cardDescription={blog.description} cardLink={blog.link} />
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
                    <button onClick={handleRightClick} className={`blog-btn-card-navigation ${offset >= blogPosts.length - Math.floor(window.innerWidth / cardWidth) ? 'disabled' : ''}`} title='right arrow navigation'>
                        <SvgComponent
                            svgKey="ArrowRightSvg"
                            width={16}
                            height={16}
                            stroke={offset >= blogPosts.length - Math.floor(window.innerWidth / cardWidth) ? 'var(--text--secondary)' : 'var(--color-main--primary)'}
                            fill='none'
                        />
                    </button>

                </div>
            </div>
        </section>
    );
}
export default BlogsCardSection
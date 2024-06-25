import React, { useState, useEffect, useRef } from 'react';
import Card from './cards';
import './cards.css';
import SvgComponent from '../../utils/SvgComponent';
import image1 from "../../assets/images/project-image-1.avif"
import image2 from "../../assets/images/project-image-2.avif"
import image3 from "../../assets/images/project-image-3.avif"
import image4 from "../../assets/images/project-image-4.avif"
import image5 from "../../assets/images/project-image-5.avif"
import image6 from "../../assets/images/project-image-6.avif"
import image7 from "../../assets/images/project-image-7.avif"
const ProjectsCardsSection = ({ projectSectionRef }) => {
    const [offset, setOffset] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const cardsContainerRef = useRef(null);
    const cards = [
        {
            image: image7,
            title: 'Svg render.',
            description: 'React-Native, Npm package',
            link: 'https://www.npmjs.com/package/react-native-svg-rendo',
            source: 'react-native-svg-rendo',
            log: 'NpmSvg',
        },
        {
            image: image1,
            title: 'Social media.',
            description: 'Full stack, UI/UX design and research',
            link: 'https://github.com/yousefturin/reisto',
            source: 'Reisto',
            log: 'GitHubSVG',
        },
        {
            image: image2,
            title: 'Religious.',
            description: 'Full stack, UI/UX design and research',
            link: 'https://github.com/yousefturin/thikir',
            source: 'Mufradun',
            log: 'GitHubSVG',
        },
        {
            image: image3,
            title: 'Photo editor.',
            description: 'Frontend, Backend, UI/UX design',
            link: 'https://github.com/yousefturin/APARTSTUDIO',
            source: 'Apart',
            log: 'GitHubSVG',
        },
        {
            image: image4,
            title: 'Quiz games.',
            description: 'Full-stack, UI/UX design',
            link: 'https://github.com/yousefturin/quizzki',
            source: 'Quizzki',
            log: 'GitHubSVG',
        },
        {
            image: image5,
            title: 'Encryption system.',
            description: 'Full stack, UI/UX design and research',
            link: 'https://github.com/yousefturin/zakod',
            source: 'Zakod',
            log: 'GitHubSVG',
        },
        {
            image: image6,
            title: 'Link builder.',
            description: 'Frontend, Backend, UI/UX design',
            link: 'https://github.com/yousefturin/linktreeReactNewBuild',
            source: 'Biloder',
            log: 'GitHubSVG',
        }
    ]


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
        <section ref={projectSectionRef} className='project-cards-main'>
            <div className="project-cards-wrapper">
                <div className='header-project-cards'>
                    <h1>Projects I worked.</h1>
                </div>

                <div className='project-card-padding' ref={cardsContainerRef}>
                    <div className='cards-container' style={{ transform: getTransformValue() }}>
                        {cards.map((card, index) => (
                            <Card key={index} cardImage={card.image} cardTitle={card.title} cardDescription={card.description} cardLink={card.link} cardSource={card.source} cardLogo={card.log} />
                        ))}
                    </div>
                </div>
                <div className='controls'>
                    <button onClick={handleLeftClick} className={`btn-card-navigation ${offset === 0 ? 'disabled' : ''}`} title='left arrow navigation'>
                        <SvgComponent
                            svgKey="ArrowLeftSvg"
                            width={16}
                            height={16}
                            stroke={offset === 0 ? 'var(--text--secondary)' : 'var(--color-main--primary)'}
                            fill='none'
                        />
                    </button>
                    <button onClick={handleRightClick} className={`btn-card-navigation ${offset >= cards.length - Math.floor(window.innerWidth / cardWidth) ? 'disabled' : ''}`} title='right arrow navigation'>
                        <SvgComponent
                            svgKey="ArrowRightSvg"
                            width={16}
                            height={16}
                            stroke={offset >= cards.length - Math.floor(window.innerWidth / cardWidth) ? 'var(--text--secondary)' : 'var(--color-main--primary)'}
                            fill='none'
                        />
                    </button>

                </div>
            </div>
        </section>
    );
}
export default ProjectsCardsSection
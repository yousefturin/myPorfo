import React from 'react'
import SvgComponent from '../utils/SvgComponent';
import { Link } from 'react-router-dom';

export default function UiUxCard({ cardTitle, imageURL, cardDescription, cardLink }) {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const imageSrc = `${process.env.PUBLIC_URL}/blog-images/${imageURL}`;

    return (
        <section className="blog-card-main" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="blog-card-main-wrapper">
                <div className="blog-image-wrapper">
                    <img src={imageSrc} alt='hero' className='project-image' />
                </div>
                <div className="blog-info-wrapper">
                    <h2>{cardTitle}</h2>
                    <p>{cardDescription}</p>
                    <Link className='mini-card-blog' to={`/ui-ux/${cardLink}`} title={`go to read about ${cardTitle}`}>
                        <button className={`btn-mini-card-goto-blog ${isHovered ? 'card-effect-over-for-btn-go-to-blog' : ''}`} title='button goto project'>
                            Read More
                            <SvgComponent
                                svgKey={isHovered ? "ArrowRightLongSvg" : "ArrowRightSvg"}
                                width={16}
                                height={16}
                                stroke={'var(--text--secondary)'}
                                fill='none'
                            />
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

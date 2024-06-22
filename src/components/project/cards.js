import React from 'react'
import './cards.css'
import SvgComponent from '../../utils/SvgComponent'

export default function Card({ cardImage, cardTitle, cardDescription, cardLink, cardSource, cardLogo }) {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    return (
        <section className="card-main" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="card-main-wrapper">
                <div className="info-wrapper">
                    <h2>{cardTitle}</h2>
                    <p>{cardDescription}</p>
                    <a href={cardLink}
                        title='goto project'
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mini-card-project">
                        <button  className={`btn-mini-card-goto-project ${isHovered ? 'card-effect-over-for-btn-go-to-project' : ''}`} title='button goto project'>
                            <SvgComponent
                                svgKey={cardLogo}
                                width={16}
                                height={16}
                                fill="white"
                                stroke='white'
                            />
                            {cardSource}
                        </button>
                    </a>
                </div>
                <div className="image-wrapper">
                    <img src={cardImage} alt='hero' className='project-image' />
                </div>
            </div>
        </section>
    )
}

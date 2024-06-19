import React from 'react'
import './cards.css'
import SvgComponent from '../../utils/SvgComponent'

export default function Card({ cardImage, cardTitle, cardDescription, cardLink, cardSource, cardLogo }) {
    return (
        <section className="card-main">
            <div className="card-main-wrapper">
                <div className="info-wrapper">
                    <h2>{cardTitle}</h2>
                    <p>{cardDescription}</p>
                    <a href={cardLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mini-card-project">
                        <button className='btn-mini-card-goto-project'>
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

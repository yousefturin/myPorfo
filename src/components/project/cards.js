import React from 'react'

import './cards.css'

export default function Card({ cardImage, cardTitle, cardDescription }) {
    return (
        <div className="card-main">
            <div className="card-main-wrapper">
                <div className="info-wrapper">
                    <h2>{cardTitle}</h2>
                    <p>{cardDescription}</p>
                </div>
                {/* <div className="btn-actions">
                <button className='btn-download'>
                    <SvgComponent
                        svgKey="GitHubSVG"
                        width={16}
                        height={16}
                        fill="white"
                        stroke='white'
                    />
                    Source
                </button>
                <button className='btn-read-more'>
                    Read More
                    <SvgComponent
                        svgKey="ArrowRightSvg"
                        width={16}
                        height={16}
                        stroke='#79b50f'
                        fill='none'
                    />
                </button>
            </div> */}
                <div className="image-wrapper">
                    <img src={cardImage} alt='hero' className='project-image' />
                </div>
            </div>
        </div>
    )
}

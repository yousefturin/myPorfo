import React from 'react'
import SvgComponent from '../../utils/SvgComponent'
import './cards.css'
import latestImage from '../../assets/images/latest-project-image.png'

export default function Card() {
    return (
        <div className="card-main">
        <div className="card-main-wrapper">
            <h2>Social media application.</h2>
            <p>Full stack, UI/UX design and research</p>
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
                        stroke='#007AFF'
                        fill='none'
                    />
                </button>
            </div> */}
            <div className="image-wrapper">
                <img src={latestImage} alt='hero' className='project-image' />
            </div>
        </div>
    </div>
    )
}

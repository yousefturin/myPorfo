
import React from 'react'
import './hero.css'
import SvgComponent from '../../utils/SvgComponent'
import heroImage from '../../assets/images/hero-image.png'
import useDownloadCV from '../../utils/DownloadCV'
const HeroSection = ({ scrollToProjects }) => {
    const { handleDownload, isDownloaded } = useDownloadCV();
    return (
        <section className='hero-main'>

            <div className="hero-left">
                <div className='here-inner-left'>
                    <div className="empty-place"></div>
                    <p style={{ marginBottom: -20 }}>I am</p>
                    <h1>A Frontend and Mobile Developer</h1>
                    <p style={{ marginTop: -20, marginBottom: 48 }} >I am a software engineer, specialized in building mobile application and web applications. I am looking to develop my skills in this field.</p>
                    <button className='btn-download' onClick={handleDownload} >
                            <SvgComponent
                                svgKey={isDownloaded === true ? "DownloadDoneSvg" : "DownloadSvg"}
                                width={16}
                                height={16}
                                fill={isDownloaded === true ? "none" : "white"}
                                stroke='white'
                            />
                        Download CV
                    </button>
                </div>
                <div className="hero-left-bottom" onClick={scrollToProjects}>
                    <p>My Projects</p>
                    <SvgComponent
                        svgKey="ArrowDownSvg"
                        width={16}
                        height={16}
                        stroke='var(--text--primary)'
                    />
                </div>
            </div>
            <div className="hero-right">
                <img src={heroImage} alt='hero' className='hero-image' />
            </div>
        </section>

    )
}

export default HeroSection
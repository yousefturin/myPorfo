
import React from 'react'
import './hero.css'
import SvgComponent from '../../utils/SvgComponent'
import heroImage from '../../assets/images/hero-image-2.avif'
import useDownloadCV from '../../utils/DownloadCV'
const HeroSection = ({ scrollToProjects }) => {
    const { handleDownload, isDownloaded } = useDownloadCV();

    return (
        <section className='hero-main'>

            <div className="hero-left">
                <div className='here-inner-left'>
                    <div className="hero-left-top-header">
                        <p className='first-paragraph' style={{ marginBottom: -20 }}>I am</p>
                        <h1>A Frontend and Mobile Developer</h1>
                    </div>
                    <div className="hero-ticker">
                        <div className="hero-ticker-wrap">
                            <div className="hero-ticker-elements">
                                <span>UI/UX Design</span>
                                <span>Mobile-First Design</span>
                                <span>Responsive Design</span>
                                <span>Cross-Platform Development</span>
                            </div>
                        </div>
                    </div>
                    {/* <p style={{ marginTop: -20, marginBottom: 48 }} >I am a software engineer, specialized in building mobile application and web applications. I am looking to develop my skills in this field.</p> */}
                    <div className="btn-wrapper">
                        <button className='btn-download-primary' onClick={handleDownload} title='download CV' >
                            <SvgComponent
                                svgKey={isDownloaded === true ? "DownloadDoneSvg" : "DownloadSvg"}
                                width={16}
                                height={16}
                                fill={isDownloaded === true ? "none" : "var(--text--primary-invert)"}
                                stroke='var(--bg)'
                                title='download CV icon'
                                strokeWidth={3}
                            />
                            Download CV
                        </button>
                        <button className='btn-download-secondary' onClick={scrollToProjects} title='scroll to projects' >
                            Check My Projects
                            <SvgComponent
                                svgKey={"ArrowRightDownSvg"}
                                width={16}
                                height={16}
                                fill={isDownloaded === true ? "none" : "var(--text--primary)"}
                                stroke='var(--white)'
                                title='download CV icon'
                                strokeWidth={3}
                            />
                        </button>
                    </div>

                </div>
            </div>
            <div className="hero-right">
                <img src={heroImage} alt='hero' className='hero-image' />
            </div>
        </section>

    )
}

export default HeroSection

import React, { useState } from 'react'
import './hero.css'
import SvgComponent from '../../utils/SvgComponent'
import heroImage from '../../assets/images/hero-image.png'
const HeroSection = ({ scrollToProjects }) => {
    const [isDownloaded, setIsDownloaded] = useState(false);
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/cv.pdf`; // URL to the CV file in the public folder
        link.download = 'Yusef_Rayyan_CV_2024.pdf'; // Filename for the downloaded file
        document.body.appendChild(link);
        link.click();
        setIsDownloaded(true);
        document.body.removeChild(link);
    };
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
                        stroke='#ffffff'

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
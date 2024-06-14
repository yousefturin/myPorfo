
import React from 'react'
import './hero.css'
import SvgComponent from '../../utils/SvgComponent'
import heroImage from '../../assets/images/hero-image.png'
const HeroSection = () => {
    return (
        <div className='hero-main'>
            <div className="hero-left">
                <p style={{marginBottom:-20}}>I am</p>
                <h1>A Frontend and Mobile Developer</h1>
                <p style={{marginTop:-20,marginBottom:48}} >I am a software engineer, specialized in building mobile application and web applications. I am looking to develop my skills in this field.</p>
                <button className='btn-download'>
                <SvgComponent
                    svgKey="DownloadSvg"
                    width={16}
                    height={16}
                    fill="white"
                    stroke='white'
                />  
                    Download CV
                </button>
                <div className="empty-place"></div>
                <div className="hero-left-bottom">
                    <p>My Projects</p>
                    <SvgComponent
                    svgKey="ArrowDownSvg"
                    width={16}
                    height={16}
                    stroke='#8d8c8c'
                />  
                </div>
            </div>
            <div className="hero-right">
            <img src={heroImage} alt='hero' className='hero-image' />
                
            </div>
        </div>
    )
}

export default HeroSection
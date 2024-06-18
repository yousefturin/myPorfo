import React from 'react'
import './menu.css'
import SvgComponent from '../../utils/SvgComponent';

export default function MenuBarSection() {
    return (
        <div className='menu-bar'>
            <div className="menu-wrapper">
                <div className="left-menu-bar">
                    <p style={{ fontSize: 22 ,paddingRight:5}}>👋🏼 </p>
                    <p className='text-logo'> Hi, Yusef</p>
                </div>
                <div className="middle-menu-bar">
                    {/* <p>About</p>
                    <p>Projects</p>
                    <p>Contact</p> */}
                </div>
                <div className="right-menu-bar">
                    <a href="https://github.com/yousefturin" target="_blank" rel="noopener noreferrer">
                        <SvgComponent
                            svgKey="GitHubSVG"
                            width={28}
                            height={28}
                            fill="white"
                            className='linkedin-svg'
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/yusef-rayyan-j1999/" target="_blank" rel="noopener noreferrer">
                        <SvgComponent
                            svgKey="LinkedInSGV"
                            width={28}
                            height={28}
                            fill="white"
                            className='linkedin-svg'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

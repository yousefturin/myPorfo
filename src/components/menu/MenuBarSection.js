import React from 'react'
import './menu.css'
import SvgComponent from '../../utils/SvgComponent';
import useDownloadCV from '../../utils/DownloadCV';

const MenuBarSection = ({ btnDownloadCVPopUpRef }) => {
    const { handleDownload } = useDownloadCV();
    return (
        <section className="menu-bar">
            <div className='wrap-menu-extra'>
                <div className="menu-wrapper">
                    <div className="left-menu-bar">
                        <SvgComponent
                            svgKey="APPLOGO"
                            width={60}
                            height={60}
                        />
                    </div>
                    <div className="middle-menu-bar">
                        {/* <p>About</p>
                    <p>Projects</p>
                    <p>Contact</p> */}
                    </div>
                    <div className="right-menu-bar">
                        <button className='menu-btn-download-pop-up' onClick={handleDownload} ref={btnDownloadCVPopUpRef} title='download CV' >
                            <SvgComponent
                                svgKey="CvSvg"
                                width={24}
                                height={24}
                                fill="var(--bg)"
                                title='download cv icon'
                            />
                            Resume
                        </button>
                        <a href="https://github.com/yousefturin" title='github link' target="_blank" rel="noopener noreferrer">
                            <SvgComponent
                                svgKey="GitHubSVG"
                                width={28}
                                height={28}
                                fill="var(--text--primary)"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/yusef-rayyan-j1999/" title='linkedin link' target="_blank" rel="noopener noreferrer">
                            <SvgComponent
                                svgKey="LinkedInSGV"
                                width={28}
                                height={28}
                                fill="var(--text--primary)"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default MenuBarSection
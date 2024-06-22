import React from 'react'
import './latest.css'
import latestImage from '../../assets/images/latest-project-image.avif'
import SvgComponent from '../../utils/SvgComponent'
export default function LatestProject({ projectSectionRef }) {
    return (
        <section ref={projectSectionRef} className='latest-project-main' id='section2'>
            <div className="latest-wrapper">
                <div className="latest-top-header">
                    <div className="latest-extra" />
                    <h1>Latest project.</h1>
                </div>
                <div className="latest-lef-right-wrapper">
                    <div className="latest-right">
                        <img src={latestImage} alt='hero' className='hero-image' />
                    </div>

                    <div className="latest-left">
                        <div>
                            <h1>Social Media Application</h1>
                            <p>Reisto is a social media app for food enthusiasts worldwide. Share recipes, discover new dishes, and connect with a community of like-minded food lovers.</p>
                        </div>
                        <div className='latest-badges'>
                            <h2>Developed with </h2>
                            <div className="latest-tools">
                                <div className="tools-left">
                                    <div style={{ display: "flex" }}>
                                        <SvgComponent
                                            svgKey="ReactNativeSvg"
                                            width={44}
                                            height={44}
                                            fill='var(--text--secondary)'
                                        />
                                    </div>
                                    <div style={{ width: "30%" }}>
                                        <h3>React Native</h3>
                                    </div>
                                </div>
                                <div className="tools-middle">
                                    <div className="tools-middle-Wrapper">
                                        <div className="tools-middle-top">
                                            <div className="tools-middle-top-wrapper">
                                                <div className="tools-middle-top-left">
                                                    <div style={{ display: "flex" }}>
                                                        <SvgComponent
                                                            svgKey="ExpoSvg"
                                                            width={24}
                                                            height={24}
                                                            fill='var(--text--secondary)'
                                                        />
                                                    </div>
                                                    <h3>Expo</h3>
                                                </div>
                                                <div className="tools-middle-top-right">
                                                    <div style={{ display: "flex" }}>
                                                        <SvgComponent
                                                            svgKey="i18nextSvg"
                                                            width={24}
                                                            height={24}
                                                            fill='var(--text--secondary)'
                                                        />
                                                    </div>

                                                    <h3>i18next</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tools-middle-bottom">
                                            <div style={{ display: "flex" }}>
                                                <SvgComponent
                                                    svgKey="JavaScriptSvg"
                                                    width={24}
                                                    height={24}
                                                    fill='var(--text--secondary)'
                                                />
                                            </div>
                                            <h3>JavaScript</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="tools-right">

                                    <div>
                                        <SvgComponent
                                            svgKey="FirebaseSvg"
                                            width={38}
                                            height={38}
                                            fill='var(--text--secondary)'
                                        />
                                    </div>
                                    <div>
                                        <h3>Firebase</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='latest-left-bottom-btn-action'>
                            <h2>Read more about the source</h2>
                            <div className="link-wrapper">
                                <a href="https://github.com/yousefturin/reisto" target="_blank" title='github link' rel="noopener noreferrer" className='btn-download'>
                                    <SvgComponent
                                        svgKey="GitHubSVG"
                                        width={18}
                                        height={18}
                                        fill="black"
                                    />
                                    Source Code
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </section>


    )
}

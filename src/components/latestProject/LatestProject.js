import React from 'react'
import './latest.css'
import latestImage from '../../assets/images/latest-project-image.png'
import SvgComponent from '../../utils/SvgComponent'
export default function LatestProject() {
    return (

        <div className='latest-project-main'>
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
                        <div style={{ width: "100%" }}>
                            <h2>Developed with </h2>
                            <div className="latest-tools">
                                <div className="tools-left">
                                    <div style={{ display: "flex" }}>
                                        <SvgComponent
                                            svgKey="ReactNativeSvg"
                                            width={44}
                                            height={44}
                                            fill='#c9c9c9'
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
                                                            fill='#c9c9c9'
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
                                                            fill='#c9c9c9'
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
                                                    fill='#c9c9c9'
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
                                            fill='#c9c9c9'
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

                            <a href="https://github.com/yousefturin/reisto" target="_blank" rel="noopener noreferrer" className='btn-download'>
                                <SvgComponent
                                    svgKey="GitHubSVG"
                                    width={16}
                                    height={16}
                                    fill="white"
                                    stroke='white'
                                />
                                Source Code
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}

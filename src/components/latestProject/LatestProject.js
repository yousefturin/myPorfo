import React from 'react'
import './latest.css'
import latestImage from '../../assets/images/latest-project-image.avif'
import SvgComponent from '../../utils/SvgComponent'
export default function LatestProject() {
    return (
        <section className='latest-project-main' id='section2'>
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
                                    <div className='tools-all-svg-in-tools' >
                                        <SvgComponent
                                            svgKey="ReactNativeCircleSvg"
                                            width={44}
                                            height={44}
                                        />
                                    </div>
                                    <div >
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
                                                            svgKey="ExpoCircleSvg"
                                                            width={28}
                                                            height={28}

                                                        />
                                                    </div>
                                                    <h3>Expo</h3>
                                                </div>
                                                <div className="tools-middle-top-right">
                                                    <div style={{ display: "flex" }}>
                                                        <SvgComponent
                                                            svgKey="i18nextCircleSvg"
                                                            width={28}
                                                            height={28}

                                                        />
                                                    </div>

                                                    <h3>i18next</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tools-middle-bottom">
                                            <div className='tools-all-svg-in-tools'>
                                                <SvgComponent
                                                    svgKey="JavaScriptCircleSvg"
                                                    width={28}
                                                    height={28}
                                                />
                                            </div>
                                            <div>

                                                <h3>JavaScript</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tools-right">

                                    <div className='tools-all-svg-in-tools'>
                                        <SvgComponent
                                            svgKey="FirebaseCircleSvg"
                                            width={44}
                                            height={44}

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

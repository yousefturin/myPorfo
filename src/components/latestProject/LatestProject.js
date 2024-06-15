import React from 'react'
import './latest.css'
import latestImage from '../../assets/images/latest-project-image.png'
import SvgComponent from '../../utils/SvgComponent'
export default function LatestProject() {
    return (

        <div className='latest-project-main'>
            <div className="latest-right">
                <h1>Latest Project</h1>
                <img src={latestImage} alt='hero' className='hero-image' />
            </div>

            <div className="latest-left">
                <div>
                    <h1>Social Media Application</h1>
                    <p>Reisto is a social media food recipes cross-application designed to bring together food enthusiasts from around the world. Users can share their favorite recipes, discover new dishes, and interact with a community of like-minded individuals.</p>
                </div>
                <div style={{ width: "100%" }}>
                    <h2>Developed with software and tools blow</h2>
                    <div className="latest-tools">
                        <div className="tools-left">
                            <div>
                                <SvgComponent
                                    svgKey="ReactNativeSvg"
                                    width={50}
                                    height={50}
                                    fill='#61DAFB'
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
                                            <div>
                                                <SvgComponent
                                                    svgKey="ExpoSvg"
                                                    width={24}
                                                    height={25}
                                                    fill='#ffffff'
                                                />
                                            </div>
                                            <h3>Expo</h3>
                                        </div>
                                        <div className="tools-middle-top-right">
                                            <div>
                                                <SvgComponent
                                                    svgKey="FirebaseSvg"
                                                    width={24}
                                                    height={24}
                                                    fill='#ffffff'
                                                />
                                            </div>
                                            <h3>Firebase</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="tools-middle-bottom">
                                    <div>
                                        <SvgComponent
                                            svgKey="JavaScriptSvg"
                                            width={24}
                                            height={24}
                                            fill='#F7DF1E'
                                        />
                                    </div>
                                    <h3>JavaScript</h3>
                                </div>
                            </div>
                        </div>
                        <div className="tools-right">
                            <div>
                                <SvgComponent
                                    svgKey="i18nextSvg"
                                    width={50}
                                    height={50}
                                    fill='#ffffff'
                                />
                            </div>
                            <div>
                                <h3>i18next</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h2>Check out the source code</h2>
                </div>
                <button className='btn-download'>
                    <SvgComponent
                        svgKey="GitHubSVG"
                        width={16}
                        height={16}
                        fill="white"
                        stroke='white'
                    />
                    Source Code
                </button>
            </div>
        </div>


    )
}

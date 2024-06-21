import React from 'react'
import './footer.css'
import SvgComponent from '../../utils/SvgComponent'
import EmailForm from '../EmailForm/EmailForm';
import FAQ from '../FAQ/FAQ';
import useDownloadCV from '../../utils/DownloadCV';

export default function FooterSection() {

    const { handleDownload } = useDownloadCV();
    const getCurrentYear = () => {
        return new Date().getFullYear();
    };

    return (
        <section className='footer-main'>
            <div className="footer-top">
                <div className="footer-top-right">
                    <EmailForm />
                </div>
                <div className="footer-top-left">
                    <FAQ />
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-name">
                    <h2>Yusef<br />Rayyan.</h2>
                </div>
                <div className="footer-contact-icons">
                    <a href="https://github.com/yousefturin" target="_blank" rel="noopener noreferrer" title='github link'>
                        <SvgComponent
                            svgKey="GitHubSVG"
                            width={24}
                            height={24}
                            fill="white"
                            title='github icon'
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/yusef-rayyan-j1999/" target="_blank" rel="noopener noreferrer" title='linkedin link'>
                        <SvgComponent
                            svgKey="LinkedInSGV"
                            width={24}
                            height={24}
                            fill="white"
                            title='linkedin icon'
                        />
                    </a>
                    <button onClick={handleDownload} title='download CV'>
                        <SvgComponent
                            svgKey="CvSvg"
                            width={24}
                            height={24}
                            fill="var(--text--primary)"
                            title='download cv icon'
                        />
                    </button>
                    <a href="https://medium.com/@yusefturin" target="_blank" rel="noopener noreferrer" title='medium link'>
                        <SvgComponent
                            svgKey="MediumSvg"
                            width={24}
                            height={24}
                            fill="var(--text--primary)"
                            title='medium icon'
                        />
                    </a>
                    <a href="https://stackoverflow.com/users/25346742/yusefturin" target="_blank" rel="noopener noreferrer" title='stack over flow link'>
                        <SvgComponent
                            svgKey="StackOverFlowSvg"
                            width={24}
                            height={24}
                            fill="var(--text--primary)"
                            title='stack over flow icon'
                        />
                    </a>
                </div>
                <p>© {getCurrentYear()} Yusef. All rights reserved</p>
                <p>Made with ❤️ Yusef Rayyan</p>
            </div>
        </section>
    )
}

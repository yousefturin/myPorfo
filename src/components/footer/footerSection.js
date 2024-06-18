import React from 'react'
import './footer.css'
import SvgComponent from '../../utils/SvgComponent'
import EmailForm from './EmailForm';
export default function FooterSection() {

    const getCurrentYear = () => {
        return new Date().getFullYear();
    };
    
    return (
        <div className='footer-main'>
            <div className="footer-top">
                {/* <EmailForm /> */}
            </div>
            <div className="footer-bottom">
                <div className="footer-bottom-name">
                    <h2>Yusef<br />Rayyan.</h2>
                </div>
                <div className="footer-contact-icons">
                    <a href="https://github.com/yousefturin" target="_blank" rel="noopener noreferrer">
                        <SvgComponent
                            svgKey="GitHubSVG"
                            width={24}
                            height={24}
                            fill="white"
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/yusef-rayyan-j1999/" target="_blank" rel="noopener noreferrer">
                        <SvgComponent
                            svgKey="LinkedInSGV"
                            width={24}
                            height={24}
                            fill="white"
                        />
                    </a>
                </div>
                <p>© {getCurrentYear()} Yusef. All rights reserved</p>
            </div>
            <p>Made with ❤️ Yusef Rayyan</p>
        </div>
    )
}

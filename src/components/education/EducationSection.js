import React from 'react'
import InfoSection from '../common/InfoSection'
import EducationImage from '../../assets/images/education-image.png'
import honorImage23 from '../../assets/images/honor-image-23.png'
import honorImage22 from '../../assets/images/honor-image-22.png'
import './education.css'

export default function EducationSection() {
    return (
        <div className='education-main'>
            <div className="education-wrapper">
                <div className="education-top-header">
                    <h1>Education.</h1>
                </div>
                <InfoSection image={EducationImage} title={"Bachelor in Computer Engineering"}
                    subtitle={"Beykoz Üniversitesi"} startDate={"Jul   2024"} endDate={"Sep 2019"} />
                <div className="education-top-header">
                    <div className="education-extra" />
                    <h2>Honors & awards.</h2>
                </div>
                <div className="education-bottom-honors">
                    <div className="education-bottom-honors-left">
                        <div className="education-bottom-honors-left-wrapper">
                            <img src={honorImage23} alt="honor 2023" />
                            <h4>Engineering Project of The Year 2023</h4>
                            <p>Issued by Beykoz Üniversitesi </p>
                            <p><strong>Jun 2023</strong></p>
                        </div>
                    </div>
                    <div className="education-bottom-honors-right">
                        <div className="education-bottom-honors-right-wrapper">
                            <img src={honorImage22} alt="honor 2023" />
                            <h4>Engineering Project of The Year 2022</h4>
                            <p>Issued by Beykoz Üniversitesi </p>
                            <p><strong>Jul 2022</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

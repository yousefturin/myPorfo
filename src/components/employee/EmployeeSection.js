import React from 'react'
import './employee.css'
import employeeImage from '../../assets/images/employee-image.png'
import InfoSection from '../common/InfoSection'
import ShapeSection from '../common/ShapeSection'
export default function EmployeeSection() {
    return (
        <div className='employee-main'>
            <div className="employee-wrapper">
                <div className="employee-top-header">
                    <div className="employee-extra" />
                    <h1>Employment.</h1>
                </div>
                <InfoSection image={employeeImage} title={"Software Developer Internship"}
                    subtitle={"Idea Teknoloji Çözümleri"} startDate={"Jul   2023"} endDate={"Sep 2023"} />
                <ShapeSection leftSvg="PostSQLSvg"
                middleTopRightSvg="dotNetSvg"
                middleTopLeftSvg="PostmanSVg"
                middleBottomLeftSvg="DBeaverSvg"
                middleBottomRightSvg="ApiSvg"
                rightSvg="CSharpSvg"
                leftTitle="Designed Database Tables"
                middleTopRightTitle="Learned DotNet Framework"
                middleTopLeftTitle="Postman"
                middleBottomLeftTitle="Learned DBeaver Software"
                middleBottomRightTitle="Tested APIs"
                rightTitle="Learned CSharp Coding"
                leftDimension={128}
                middleTopRightDimension={84}
                middleTopLeftDimension={64}
                middleBottomLeftDimension={84}
                middleBottomRightDimension={48}
                rightDimension= {64}/>
            </div>
        </div>
    )
}

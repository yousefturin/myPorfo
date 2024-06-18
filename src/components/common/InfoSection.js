import React from 'react'
import SvgComponent from '../../utils/SvgComponent'
import '../employee/employee.css'
export default function InfoSection({ image, title, subtitle, startDate, endDate }) {
    return (
        <div className="employee-top-info">
            <div className="employee-top-info-left">
                <img src={image} alt="idea-company" />
            </div>
            <div className="employee-top-info-middle">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                <h4>{startDate} - {endDate}</h4>
            </div>
            <div className="employee-top-info-right">
                <div className="employee-top-info-right-top">
                    <h3>{endDate}</h3>
                    <SvgComponent
                        svgKey="CircleSvg"
                        width={12}
                        height={12}
                        fill="#D9D9D9"
                    />
                </div>
                <div className="employee-top-info-right-middle" style={{ marginRight: 6 }}>
                    <SvgComponent
                        svgKey="RectangleSvg"
                        width={5}
                        height={60}
                        fill="#D9D9D9"
                    />
                </div>
                <div className="employee-top-info-right-bottom">
                    <h3>{startDate}</h3>
                    <SvgComponent
                        svgKey="CircleSvg"
                        width={12}
                        height={12}
                        fill="#D9D9D9"
                    />
                </div>
            </div>
        </div>
    )
}

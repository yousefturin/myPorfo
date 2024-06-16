import React from 'react'
import SvgComponent from '../../utils/SvgComponent'
import '../employee/employee.css'

export default function ShapeSection({
    leftSvg,
    middleTopRightSvg,
    middleTopLeftSvg,
    middleBottomLeftSvg,
    middleBottomRightSvg,
    rightSvg,
    leftTitle,
    middleTopRightTitle,
    middleTopLeftTitle,
    middleBottomLeftTitle,
    middleBottomRightTitle,
    rightTitle,
    leftDimension,
    middleTopRightDimension,
    middleTopLeftDimension,
    middleBottomLeftDimension,
    middleBottomRightDimension,
    rightDimension,
}) {
    const TitleComponent = ({ rightTitle }) => {
        // Split the title into words
        const words = rightTitle.split(' ');

        return (
            <h4>
                {words.length > 2 ? (
                    <>
                        {words[0]}<br />
                        {words.slice(1).join(' ')}
                    </>
                ) : (
                    rightTitle
                )}
            </h4>
        );
    };
    return (
        <div className="employee-bottom-info">
            <div className="employee-bottom-info-left">
                <div className="employee-bottom-info-left-top">
                    <SvgComponent
                        svgKey={leftSvg}
                        width={leftDimension}
                        height={leftDimension}
                    />
                </div>

                <div className="employee-bottom-info-left-bottom">
                    <h4>{leftTitle} </h4>
                </div>

            </div>
            <div className="employee-bottom-info-middle">
                <div className="employee-bottom-info-middle-top">
                    <div className="employee-bottom-info-middle-top-left">
                        <SvgComponent
                            svgKey={middleTopLeftSvg}
                            width={middleTopLeftDimension}
                            height={middleTopLeftDimension}

                        />
                        <h4>{middleTopLeftTitle}</h4>

                    </div>
                    <div className="employee-bottom-info-middle-top-right">
                        <div className="employee-bottom-info-middle-top-right-left">
                            <SvgComponent
                                svgKey={middleTopRightSvg}
                                width={middleTopRightDimension}
                                height={middleTopRightDimension}
                            />
                        </div>
                        <div className="employee-bottom-info-middle-top-right-right">
                            <h4>{middleTopRightTitle}</h4>
                        </div>

                    </div>
                </div>
                <div className="employee-bottom-info-middle-bottom">
                    <div className="employee-bottom-info-middle-bottom-left">

                        <div className="employee-bottom-info-middle-top-right-left">
                            <SvgComponent
                                svgKey={middleBottomLeftSvg}
                                width={middleBottomLeftDimension}
                                height={middleBottomLeftDimension}
                            />
                        </div>
                        <div className="employee-bottom-info-middle-top-right-right">
                            <h4>{middleBottomLeftTitle}</h4>
                        </div>

                    </div>
                    <div className="employee-bottom-info-middle-bottom-right">
                        <SvgComponent
                            svgKey={middleBottomRightSvg}
                            width={middleBottomRightDimension}
                            height={middleBottomRightDimension}
                        />
                        <h4>{middleBottomRightTitle}</h4>
                    </div>
                </div>

            </div>
            <div className="employee-bottom-info-right">
                <div className="employee-bottom-info-right-top">
                    <SvgComponent
                        svgKey={rightSvg}
                        width={rightDimension}
                        height={rightDimension}
                    />
                </div>
                <div className="employee-bottom-info-right-bottom">
                    <TitleComponent rightTitle={rightTitle} />
                </div>
            </div>
        </div>
    )
}

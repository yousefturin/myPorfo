import React from 'react'
import './skill.css'
import ShapeSection from '../common/ShapeSection'
export default function SkillSection() {
    return (
        <div className='skill-main'>
            <div className="skill-wrapper">
                <div className="skill-top-header">
                    <h1>Technical skills.</h1>
                </div>
                <div className="skill-top-header">
                    <div className="skill-extra" />
                    <h2>Programming languages & Frameworks</h2>
                </div>
                <div className="skill-wrapper-section">
                    <ShapeSection leftSvg="ReactSvg"
                        middleTopRightSvg="JavaScriptSvg"
                        middleTopLeftSvg="CssSvg"
                        middleBottomLeftSvg="ReactNativeSvg"
                        middleBottomRightSvg="PythonSvg"
                        rightSvg="CPlusPlusSvg"
                        leftTitle="React "
                        middleTopRightTitle="JavaScript"
                        middleTopLeftTitle="CSS"
                        middleBottomLeftTitle="React Native"
                        middleBottomRightTitle="Python"
                        rightTitle="C++"
                        leftDimension={128}
                        middleTopRightDimension={84}
                        middleTopLeftDimension={64}
                        middleBottomLeftDimension={84}
                        middleBottomRightDimension={48}
                        rightDimension={64} />

                    <ShapeSection leftSvg="NodeJsSvg"
                        middleTopRightSvg="HTMLSvg"
                        middleTopLeftSvg="GitSvg"
                        middleBottomLeftSvg="MatlabSvg"
                        middleBottomRightSvg="TypeScriptSvg"
                        rightSvg="CSharpSvg"
                        leftTitle="NodeJS"
                        middleTopRightTitle="HTML"
                        middleTopLeftTitle="Git"
                        middleBottomLeftTitle="Matlab"
                        middleBottomRightTitle="TypeScript"
                        rightTitle="C#"
                        leftDimension={128}
                        middleTopRightDimension={84}
                        middleTopLeftDimension={64}
                        middleBottomLeftDimension={84}
                        middleBottomRightDimension={48}
                        rightDimension={64} />

                </div>
            </div>
        </div>
    )
}

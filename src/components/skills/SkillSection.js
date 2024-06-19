import React from 'react'
import './skill.css'
import SkillsSection from '../common/ShapeSection'
export default function SkillSection() {
    const frontEndSkills = [
        { name: 'React Native', icon: 'ReactNativeSvg', dimension: '90px' },
        { name: 'React', icon: 'ReactSvg', dimension: '90px' },
        { name: 'HTML', icon: 'HTMLSvg', dimension: '90px' },
        { name: 'CSS', icon: 'CssSvg', dimension: '90px' },
        { name: 'BootStrap', icon: 'BootStrapSvg', dimension: '90px' },
    ];

    const ProgrammingLangues = [
        { name: 'JavaScript', icon: 'JavaScriptSvg', dimension: '90px' },
        { name: 'Python', icon: 'PythonSvg', dimension: '90px' },
        { name: 'C#', icon: 'CSharpSvg', dimension: '90px' },
        { name: 'C++', icon: 'CPlusPlusSvg', dimension: '90px' },
        { name: 'C', icon: 'CSvg', dimension: '90px' },
        { name: 'Bash', icon: 'BashSvg', dimension: '90px' },
    ];
    const backEndSkills = [
        { name: 'PostgreSQL', icon: 'PostSQLSvg', dimension: '90px' },
        { name: 'ASP.NET', icon: 'dotNetSvg', dimension: '90px' },
        { name: 'Firebase', icon: 'FirebaseLargeSvg', dimension: '90px' },
        { name: 'Node.js', icon: 'NodeJsSvg', dimension: '90px' },
        { name: 'Flask', icon: 'FlaskSvg', dimension: '90px' }
    ];
    return (
        <section className='skill-main'>
            <div className="skill-wrapper">
                <div className="skill-top-header">
                    <h1>Technical skills.</h1>
                </div>
                <SkillsSection title="Programming languages" skills={ProgrammingLangues} />
                <SkillsSection title="Front-End" skills={frontEndSkills} />
                <SkillsSection title="Back-End and Database" skills={backEndSkills} />
            </div>

        </section>
    )
}

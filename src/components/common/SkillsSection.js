import React from 'react'
import SvgComponent from '../../utils/SvgComponent'
import './shape.css'

export default function SkillsSection({ title, skills }) {
    return (
        <section className="skills">
            <div className="skill-top-header" style={{justifyContent:"center"}}>
                <h2>{title}</h2>
            </div>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill">
                        <SvgComponent
                            svgKey={skill.icon}
                            width={skill.dimension}
                            height={skill.dimension}
                        />
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

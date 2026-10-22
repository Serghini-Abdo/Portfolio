import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Tools from './Tools'
import SectionHeading from '../../components/ui/SectionHeading'

const Skills = () => {
  return (
    <section className="skills section" id="skills">
        <SectionHeading title="Skills" subtitle="My technical skills" />

        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>
            <Tools/>
        </div>
    </section>
)
}

export default Skills

import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'
import Tools from './Tools'
import SectionHeading from '../../components/ui/SectionHeading'
import { useLocale } from '../../app/LocaleContext'

const Skills = () => {
  const { t } = useLocale();
  return (
    <section className="skills section" id="skills">
        <SectionHeading title={t("skills.title")} subtitle={t("skills.subtitle")} />

        <div className="skills__container container grid">
            <Frontend/>
            <Backend/>
            <Tools/>
        </div>
    </section>
)
}

export default Skills

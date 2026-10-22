import React from 'react'
import './skills.css'
import SkillGroup from './SkillGroup'
import { skillGroups } from '../../data/skills'
import SectionHeading from '../../components/ui/SectionHeading'
import CardGrid from '../../components/ui/CardGrid'
import { useLocale } from '../../app/LocaleContext'

const Skills = () => {
  const { t } = useLocale();
  return (
    <section className="skills section" id="skills">
        <SectionHeading title={t("skills.title")} subtitle={t("skills.subtitle")} />

        <CardGrid className="skills__container container">
            {skillGroups.map((group) => (
              <SkillGroup key={group.titleKey} {...group} />
            ))}
        </CardGrid>
    </section>
)
}

export default Skills

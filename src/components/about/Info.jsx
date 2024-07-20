import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
        <i class='bx bx-book-open about__icon'></i>
            <h3 className="about__title" >Education</h3>
            <span className="about__subtitle">Bac+2</span>

        </div>

        <div className="about__box">
            <i className="bx bx-award about__icon"></i>
            <h3 className="about__title" >Experience</h3>
            <span className="about__subtitle">+2</span>

        </div>

        <div className="about__box">
            <i className="bx bx-briefcase-alt about__icon"></i>
            <h3 className="about__title" >Projects</h3>
            <span className="about__subtitle">+5</span>

        </div>

    </div>        
)
}

export default Info
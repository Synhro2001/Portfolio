import React from 'react'
import Education from './education/education'
import Skills from './skills/skills'

import "./experience.scss"

function Experience() {
  return (
    <section id='experience' className='experience'>
        <div className="container">
        <h2 className="experience__title">My experience</h2>
            <div className="experience__wrapper">
              <Education/>
              <Skills/>
            </div>
        </div>
    </section>
  )
}

export default Experience
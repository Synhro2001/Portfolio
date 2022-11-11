import React from 'react'

function Skills() {
  return (
    <div className="experience__column">
    <h3 className="experience__column-title">Skills</h3>
        <ul>
            <li>
                <div className="experience__item">
                    <div className="experience__item-head">
                        <div className="experience__item-box">
                            <h3 className="title">React</h3>
                            <h5 className="experience__item-location"> Udemy courses and self-study</h5>
                        </div>
                    </div>
                <p className="experience__item-body">
                There are two projects already created. In these projects,
                I used both functional and class components as well as hooks.
                I can provide my skills to create the functionality and design of your project.
                </p>
                </div>
            </li>
            <li>
                <div className="experience__item">
                    <div className="experience__item-head">
                        <div className="experience__item-box">
                            <h3 className="title">Angular</h3>
                            <h5 className="experience__item-location"> self-study</h5>
                        </div>
                    </div>
                <p className="experience__item-body">
                I started studying Angular quite recently,
                but I already know the basics of this language and use it in writing a project
                </p>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default Skills
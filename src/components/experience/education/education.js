import React from 'react'

function Education() {
  return (
    <div className="experience__column">
        <h3 className="experience__column-title">Education</h3>
        <ul>
            <li>
                <div className="experience__item">
                    <div className="experience__item-head">
                        <div className="experience__item-box">
                            <h3 className="title">Udemy Courses</h3>
                            <h5 className="experience__item-location"> - </h5>
                        </div>
                    </div>
                <p className="experience__item-body">
                    I took courses on writing a trading bot in Python and launched it in telegram. 
                    I also took courses in Javascript and i got a new experience in React library. 
                    You can view all the written works from the source on GitHub.
                    <a href='https://github.com/Synhro2001/Scandiweb-test-application-Vadim-Krasovsky/tree/master/src' target="_blank"  rel="noreferrer"> Click me.</a>
                </p>
                </div>
            </li>
            <li>
                <div className="experience__item">
                    <div className="experience__item-head">
                        <div className="experience__item-box">
                            <h3 className="title">Riga Technical University</h3>
                            <h5 className="experience__item-location"> Riga, Latvia</h5>
                        </div>
                    </div>
                <p className="experience__item-body">
                At the moment I am getting a Bachelor of Engineering 
                degree in the field of information technology and computer science, 
                but this does not prevent me from developing in other directions.
                </p>
                </div>
            </li>
        </ul>
    </div>
     
  )
}

export default Education
import React from "react";

import  "./about-me.scss" 
import MyPhoto from "../../img/my-photo.jpg"

const AboutMe = () => {
    return (
        <section id="about" className="about">
            <div className="container pattern">
                <div className="about__wrapper">
                    <div className="about__photo ">
                    <div className="about__circle circle"></div>
                        <img src={MyPhoto} alt="me"/>
                    </div>
                    <div className="about__descr">
                        <h2 className="title about__title">About me</h2>
                        <div className="title about__subtitle">My name is Vadim Krasovsky</div>
                        <div className="divider"></div>
                        <p className="about__text">
                            As you already know, I am a front-end developer.
                            In my free time, I write websites and applications. 
                            I approach writing code more creatively, as I like to design and come up with something new and interesting.
                            I am writing in Javascript while using React and Angular libraries.
                            At the moment I am getting a bachelor's degree in IT.
                            Despite the fact that I am studying, I am ready to acquire new skills and develop even more.
                        </p>
                    </div>
                    <div className="about__skills">
                        <div className="about__skills-item">
                            <div className="title">
                                Web Developer
                            </div>
                            <div className="about__skills-text">
                                I am more engaged in website development.
                                In my GitHub, you can see small projects that have been created.
                                The projects are written mainly in React.
                            </div>
                        </div>
                        <div className="about__skills-item">
                            <div className="title">
                                Other
                            </div>
                            <div className="about__skills-text">
                                There is also a little knowledge in cryptocurrency. 
                                I tried my hand at futures and even created a Telegram bot that trades on Binance.
                            <a href="https://github.com/Synhro2001/BinanceBOT" target="_blank"  rel="noreferrer"> Telegram bot by Python.</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default AboutMe;

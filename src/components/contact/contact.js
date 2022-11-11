import React from 'react'
import MyPhoto from "../../img/my-photo.jpg"
import ContactForm from './contact-form/contact-form'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

import "./contact.scss";

function Contact() {
  return (
    <section id='contact' className='contact'>
    <div className="container">
      <div className="contact__wrapper">
        <div className="contact__photo">
          <img src={MyPhoto} alt="me" />
        </div>
        <div className="contact__description">
          <h2 className="contact__title"> Contacts.</h2>
          <h4 className="contact__subtitle">Contact me.</h4>
          <div className="divider"></div>
          <div className="contact__text">
            Choose the way.
          </div>
          <div className="contact__social">
            <a href="https://www.facebook.com/profile.php?id=100005857320120" className="contact__link" target="_blank"  rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://www.instagram.com/sinncrx/" className="contact__link" target="_blank"  rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/vadim-krasovskis-59091724b/" className="contact__link" target="_blank"  rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Synhro2001" className="contact__link" target="_blank"  rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <div className="contact__text">
            <p>Or leave your details and I will write to you myself.</p>
          </div>
          <ContactForm/>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Contact
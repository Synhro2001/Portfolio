import React from 'react'

function ContactForm() {
  return (
    <form action="#" className="contact__form">
        <div className="contact__input">
            <input name='name' id='name' type="text" />
            <label htmlFor="name">Your name</label>
        </div>
        <div className="contact__input">
            <input name='name' id='name' type="text" />
            <label htmlFor="email">Your email</label>
        </div>
        <div className="contact__textarea">
            <textarea name="text" id="text"></textarea>
            <label htmlFor='text'>Your message</label>
        </div>
        <div>
            <button className="contact__btn btn">Send message</button>
        </div>
    </form>
  )
}

export default ContactForm
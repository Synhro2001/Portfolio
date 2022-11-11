import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseUser, faUser, faBook, faPhone } from '@fortawesome/free-solid-svg-icons'

import "./navbar.scss"

const Navbar = () => {
    const [active, setActive] = useState('#');
    return (
       <nav>
            <a href="#home" onClick={() => setActive('#home')} className={active === '#home' ? 'active' : ""}><FontAwesomeIcon icon={faHouseUser} /></a>
            <a href="#about" onClick={() => setActive('#about')} className={active === '#about' ? 'active' : ""}><FontAwesomeIcon icon={faUser} /></a>
            <a href="#experience" onClick={() => setActive('#experience')} className={active === '#experience' ? 'active' : ""}><FontAwesomeIcon icon={faBook} /></a>
            <a href="#contact" onClick={() => setActive('#contact')} className={active === '#contact' ? 'active' : ""}><FontAwesomeIcon icon={faPhone} /></a>
       </nav>
    )
}
export default Navbar
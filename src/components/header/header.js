import React from "react";
import HeaderButton from "./header-button";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from '@fortawesome/free-solid-svg-icons'

import "./header.scss";

const Header = () => {
    return (
        <header id="home" className="header">
        <h1>Welcome this is my portfolio !</h1>
            <div className="header-container">
                <p>My name is</p>
                <p>Vadim Krasovsky</p>
                <p>I'm Frontend Developer <FontAwesomeIcon icon={faComputer} /></p>
                <HeaderButton/>
               
            </div>
        </header>
    )
}
export default Header
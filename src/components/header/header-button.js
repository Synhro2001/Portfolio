import React from "react";

import CV from "../../documents/CV.pdf";

const HeaderButton = () => {
    return (
        <div className="header-btn">
            <a href={CV} download className="btn"> Donwload CV</a>
            <a href="#contact" className="btn"> Questions for me !</a>
        </div>
    )
}
export default HeaderButton
import React from "react";

import Header from "../components/header/header";
import AboutMe from "../components/about-me/about-me";
import Navbar from "../components/navbar/navbar";
import Experience from "../components/experience/experience";
import Contact from "../components/contact/contact";

const App = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <AboutMe/>
            <Experience/>
            <Contact/>
        </div>
    );
}

export default App
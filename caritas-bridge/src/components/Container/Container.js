import React from 'react';
import "./Container.css";
import Slideshow from "./slideshow";
import logo from "./caritasbridge2.svg";


const Container = () => (
<div className="containerWrap">
    <div className="containerRow">
    <Slideshow /> 
    </div>
    <div className="containerRow">
    <div className="containerBottom">
    <div className="aboutUs">
    <h2>What is Caritas Bridge?</h2>
    <p>Caritas Bridge exists to help altruistic individuals connect with chartiable organizations whose mission 
        matches thier views and whose needs can be met by what they are able or willing offer. Each user
        will select options to set parameters for the charities they would like to see. Individual search results 
        will be limited to the parameters set in the users profile and profile parameters can be updated at any time.</p>
    </div>
    <div className="caritasLogo"><img src={logo} alt="Caritas Logo" width="100%" /></div>
    </div>
    </div>
</div>
);

export default Container;
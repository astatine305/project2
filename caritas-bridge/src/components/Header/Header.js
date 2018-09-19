import React from 'react';
import "./Header.css";
import charity from "./charity.svg";


const Header = () => (
<div className="topWrap">
    <div className="headerRow">

            <div id="headerTitle">Find Your<img src={charity} id="charity" alt="charity"></img>Match!</div>
            <div id="subheadTitle">Uniting caring people with caring causes.</div>
            <div className="sectionRow">
                <button type="button" className="btn" id="profileBtn">Create Profile</button>
                <button type="button" className="btn" id="loginBtn">Login</button>
            </div>
    
    </div>
</div>
);

export default Header;
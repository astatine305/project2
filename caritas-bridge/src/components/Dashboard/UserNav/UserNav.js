import React from "react";
import { Link } from "react-router-dom";
import "./UserNav.css";


const UserNav = () => (
<div className="leftColumn">
            
        <Link to="User"><div className="leftNav">Current Listings</div></Link>
        <Link to="Saved"><div className="leftNav">Saved Charities</div></Link>
        <Link to="ModifySearch"><div className="leftNav">Modify Search</div></Link>
        <Link to="Account"><div className="leftNav">Account History</div></Link>
        <Link to="Message"><div className="leftNav">Message Center</div></Link>
        <Link to="Profile"><div className="leftNav">Update Profile</div></Link>
          
    </div>

);

export default UserNav;
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import "./User.css";
import UserNav from "./UserNav/UserNav";
import Listings from "./Dashpage/Listings";
import Saved from "./Dashpage/Saved";
import ModifySearch from "./Dashpage/ModifySearch";
import Account from "./Dashpage/Account";
import Message from "./Dashpage/Message";
import Profile from "./Dashpage/Profile";

class User extends Component {
  render() {
    return (
      <Router>
        <div className="dashWrap">
        
        <div className="dashRow">
            <div className="dashTop">
                <h3>User Dashboard</h3>
                <div className="userName">Welcome User Name!</div>
            </div>
        </div>

        <div className="dashRow">
          <UserNav />
          <Route name="Current" exact path="/User" component={Listings} />
          <Route name="ModifySearch" exact path="/ModifySearch" component={ModifySearch} />
          <Route name="Saved" exact path="/Saved" component={Saved} />
          <Route name="Account" exact path="/Account" component={Account} />
          <Route name="Message" exact path="/Message" component={Message} />
          <Route name="Profile" exact path="/Profile" component={Profile} />
        </div>

        </div>
      </Router>
    )
  }
}
export default User;

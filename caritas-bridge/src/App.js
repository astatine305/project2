import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import HomePage from './components/HomePage';
import User from './components/Dashboard/User';
import Contact from './components/Contact/Contact';
import Nav from './components/Nav';
import SearchField from './components/SearchField';
import Registration from './components/Registration/Registration';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <SearchField />
          <Route name="Home" exact path="/" component={HomePage} />
          {/* <Route name="Login" exact path="/users/login" component={User} /> */}
          <Route name="Contact" exact path="/Contact" component={Contact} />
          {/* <Route name="Registration" exact path="/users/register" component={Registration} /> */}
        </div>
      </Router>
    )
  }
}
export default App;

import React, { Component } from 'react';
import Header from "../Header";
//import SearchField from "./components/SearchField";
import Container from "../Container";
import "./HomePage.css";


class HomePage extends Component {
    render() {
      return (
        <div className="mainContainer">
    <Header /> 
    <Container /> 
  </div>
    )
    }
}

export default HomePage;

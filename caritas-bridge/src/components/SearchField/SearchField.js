import React from "react";
import "./SearchField.css";
//import logo from "./caritasbridge.svg";
//import { Link } from "react-router-dom";


class SearchField extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A search query was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div className="searchRow">
          <div className="searchform">
          <form onSubmit={this.handleSubmit}>
            <label class="label">
              Find Charities: 
              <input type="text" className="srchinput" value={this.state.value} onChange={this.handleChange} />
              <input type="submit" className="btn" value="Search" />
            </label>
          </form>
          </div>
        </div>
      );
    }
  }

export default SearchField;
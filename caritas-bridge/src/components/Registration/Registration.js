import React, { Component } from 'react';
import Header from "../Header";
import Container from "../Container";
import axios from 'axios';


class Registration extends Component {
constructor(props) {
    super(props)
    this.state = {
        fname: '',
        lname: '',
        mname: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        email: '',
        password: ''
    }
}

    handleChange = event => {
        this.setState ({ name: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            fistName: this.state.fname,
            lastName: this.state.lname,
            middleInitial: this.state.mname,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            zip: this.state.zip,
            email: this.state.email,
            password: this.state.password,
        }

    axios.post('/user/register', { user })
    .then(res => {
    console.log(res);
    console.log(res.data)
        });
    };

    render() {
      return (
        <div>
            <form method="POST" onSubmit={this.handleSubmit}>
            <label>First Name</label>
            <input type="text" name="fname" /><br />
            <label>Last Name</label>
            <input type="text" name="lname" /><br />
            <label>Middle Initial</label>
            <input type="text" name="mname" /><br />
            <label>Address</label>
            <input type="text" name="address" /><br />
            <label>City</label>
            <input type="text" name="city" /><br />
            <label>State</label>
            <input type="text" name="state" /><br />
            <label>Zip</label>
            <input type="text" name="zip" /><br />
            <label>Phone</label>
            <input type="text" name="phone" /><br />
            <label>Email</label>
            <input type="text" name="email" /><br />
            <label>Password</label>
            <input type="password" name="password" /><br />
            <button type="submit">Submit</button>
            </form>


        </div>
    )
    }
}

export default Registration;
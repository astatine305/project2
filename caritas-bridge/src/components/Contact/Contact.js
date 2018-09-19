import React from 'react';
import "./Contact.css";
import logo from "./caritasbridge2.svg";

class Contact extends React.Component {   
  constructor(props) {     
    super(props);     
    this.state = {
      fullName: '',
      lastName: '',
      message:'',
      email: ''      
    };
  
    this.handleSubmit = this.handleSubmit.bind(this);   
  }   
  
  handleSubmit(event) {   
    event.preventDefault();
    const inputs = event.target.getElementsByTagName("input");
    this.setState({
      fullName: inputs.fullName.value,// should match the name attribute on the input element
      message: inputs.message.value,
      email: inputs.email.value     
    });
   //Make api call, if needed
  }
    
  render() {     
    return (  
      <div className="contactRow">  

        <div className="contactform">

          <h2>Contact Us</h2>   
            <form onSubmit={this.handleSubmit}> 
              <label class="contactlabel">Name</label>              
              <input className="contactinput" type="text" name="fullName"/>

              <label class="contactlabel">Message</label>  
              <input className="contactinput" type="textarea" placeholder="Please enter a brief message" name="message"/>

              <label class="contactlabel">Email</label>  
              <input className="contactinput" type="text" name="email"/> 

              <input className="submitbtn" type="submit" value="Submit" />     

            </form> 
            <br />   
            <hr />

            <div className="contactInfo">
              <div className="leftInfo">
                <p className="text1">Address:</p>
                <p className="text">1234 Main Street</p>
                <p className="text">Anytown, California 90211</p>
                <p className="text1">Phone:</p>
                <p className="text">Toll-Free (800) 222-1234</p>
              </div>
            <img src={logo} className="contactImg" alt="logo" />
            </div>
             
        </div>  
     </div>
    );   
 } 
}
    
    export default Contact;
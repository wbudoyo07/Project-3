import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";

class CreateSurvey extends Component {
state = {
    recipient: '',
    textMessage: ''
};

// send message to twilio routes
sendText = ()=> {
axios.get(`/api/twilio/sendText?recipient=+1${this.state.recipient}&textMessage=www.google.com`)
.catch(err =>  console.log(err));

}

handleChange= event => {
    this.setState({
        [event.target.name]: event.target.value
    });
   
};
handleFormSubmit = event => {
    event.preventDefault();
    this.sendText();
    console.log(`The phone number  you send :${this.state.recipient}`);
}
render() {
    return(
        <div>
        <Navbar updateUser ={this.updateUser} loggedIn ={this.state.loggedIn}/>
        {
            <form>
            <input  
            type="text"
            id="recipient"
            name="recipient"
            placeholder="Phone number"
            value ={this.state.recipient}
            onChange ={this.handleChange }
            />
            <br/>
            <button
             onClick={this.handleFormSubmit}>
                submit
             </button>
        </form>
        }
        </div>

    )
}
};

export default CreateSurvey;
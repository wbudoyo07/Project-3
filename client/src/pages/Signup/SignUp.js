import React, { Component } from "react";
import API from "../../utils/API";
import "./SignUp.css";

class SignUp extends Component {
// Initial the state to empty String 
state = {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
}
componentDidMount() {
    this.loadData();
}

loadData = () => {
    API.getAdmin()
      .then(res =>
        this.setState({
            adminData: res.data,
            firstname: "",
            lastname: "",
            userName: "",
            email: "",
            password: ""
        }))
}
handleInputChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    // console.log(event.target.value);
    this.setState({
        [name]: value
    });
    
};

handleFormSubmit = event => {
    event.preventDefault();
    // check if the user fill out all informations
    if(this.state.firstName && this.state.lastName && this.state.userName && this.state.email && this.state.password ) {
        API.saveAdmin({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName : this.state.userName,
            email: this.state.email,
            password: this.state.password
        })
        //   .then(res => this.loadData())
          .catch(err => console.log(err));
          console.log(this.state);
    }
 

    // empty the input
    this.setState({
        firstName: "",
        lastName:"",
        userName: "",
        email: "",
        password:""
    });
};

render() {
    return(
        <div className="container">
			<div className="row main">
				<div className="main-login main-center">
				<h5>Sign up </h5>
					<form className ="">
						
						<div className ="form-group">
							<label htmlFor="first-name" className ="cols-sm-2 control-label">First Name</label>
							<div className ="cols-sm-10">
								<div className ="input-group">
									<span className ="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="firstName" id="firstName"  placeholder="Enter your First Name" value = {this.state.firstName} onChange ={this.handleInputChange}/>
								</div>
							</div>
						</div>

						<div className ="form-group">
							<label htmlFor="last-name" className ="cols-sm-2 control-label">Last Name</label>
							<div className ="cols-sm-10">
								<div className ="input-group">
									<span className ="input-group-addon"><i className="fa fa-user fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="lastName" id="lastName"  placeholder="Enter your Last Name" value = {this.state.lastName} onChange ={this.handleInputChange} />
								</div>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="email" className="cols-sm-2 control-label">Your Email</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-envelope fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="email" id="email"  placeholder="Enter your Email" value = {this.state.email} onChange ={this.handleInputChange}/>
								</div>
							</div>
						</div>

						<div className="form-group">
							<label htmlFor="username" className="cols-sm-2 control-label">Username</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-users fa" aria-hidden="true"></i></span>
									<input type="text" className="form-control" name="userName" id="userName"  placeholder="Enter your Username" value = {this.state.userName} onChange ={this.handleInputChange}/>
								</div>
							</div>
						</div>

						 <div className="form-group">
						 	<label htmlFor="password" className="cols-sm-2 control-label">Password</label>
						 	<div className="cols-sm-10">
						 		<div className="input-group">
						 			<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
						 			<input type="password" className="form-control" name="password" id="password"  placeholder="Enter your Password"  value = {this.state.password} onChange ={this.handleInputChange}/>
						 		</div>
						 	</div>
						 </div>

						{/* <div className="form-group">
							<label for="confirm" class="cols-sm-2 control-label">Confirm Password</label>
							<div className="cols-sm-10">
								<div className="input-group">
									<span className="input-group-addon"><i className="fa fa-lock fa-lg" aria-hidden="true"></i></span>
									<input type="password" class="form-control" name="confirm" id="confirm"  placeholder="Confirm your Password"/>
								</div>
							</div>
						</div> */}

						<div className="form-group ">
							<a href="/login" target="_blank" type="button" id="button" className="btn btn-primary btn-lg btn-block login-button" onClick = {this.handleFormSubmit} >Register</a>
						</div>
						
					</form>
				</div>
			</div>
		</div>
    )
}
};

export default SignUp;
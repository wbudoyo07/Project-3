import React, { Component } from "react";
import { Container, Row, Col, Form, FormGroup,Label, Input, Button } from "reactstrap";
import API from "../../utils/API";
import  "./SignUp.css";

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			firstname: '',
			lastname: '',
			email:'',
			username: '',
			password: '',
			modal:false
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}
	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		API.saveAdmin({
			firstname: this.state.firstname,
			lastname: this.state.lastname,
			email: this.state.email,
			username: this.state.username,
			password: this.state.password
		})
			.then(response => {
				console.log(response)
				if (!response.data.errmsg) {
					console.log('successful signup')
					window.location= "/"
				} else {
					console.log('username already taken')
				}
			}).catch(error => {
				console.log('signup error: ')
				console.log(error)

			})
	}


render() {
	return (
		<Container fluid className="sign-up-container" >
			<Row>
				<Col>
					<Form>
						<FormGroup>
							<Label for ="firstname"> First Name</Label>
							<Input
							type="text"
							id="firstname"
							name="firstname"
							placeholder="First Name"
							value={this.state.firstname}
							onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for ="lastname"> Last Name</Label>
							<Input
							type="text"
							id="lastname"
							name="lastname"
							placeholder="Last Name"
							value={this.state.lastname}
							onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for ="email"> Email</Label>
							<Input
							type="text"
							id="email"
							name="email"
							placeholder="Email"
							value={this.state.email}
							onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for ="username"> Username</Label>
							<Input
							type="text"
							id="username"
							name="username"
							placeholder="Username"
							value={this.state.username}
							onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup>
							<Label for ="password"> Password</Label>
							<Input
							type="password"
							id="password"
							name="password"
							placeholder="Password"
							value={this.state.password}
							onChange={this.handleChange}
							/>
						</FormGroup>
						<FormGroup>
							<Button
							outline color ="info"
							 type ="submit"
							 onClick = {this.handleSubmit}
							>
								Sign Up
							</Button>
						</FormGroup>
					</Form>
				</Col>
			</Row>
		</Container>
	)
}
}

export default Signup;

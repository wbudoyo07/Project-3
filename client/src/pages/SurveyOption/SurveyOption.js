import React, { Component } from 'react';
import API from "../../utils/API"
import { Route, Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Button, Container, Row, Col } from "reactstrap";
class SurveyOption extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      email:null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    API.loginInData().then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.userLoggedin) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.userLoggedin.username,
          email: response.data.userLoggedin.email

        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <Container className="Surveyoption">
        <Navbar updateUser ={this.updateUser} loggedIn ={this.state.loggedIn}/>
        {
          <Row>
            <Col>
            <p>{this.state.username} {this.state.email}</p>
            <Button> Create Survey </Button>
            <Button> Previous Survey </Button>
            </Col>
          </Row>
        }
      </Container>
    );
  }
}

export default SurveyOption;

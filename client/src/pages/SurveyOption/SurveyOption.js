import React, { Component } from 'react';
import Nav from "../../components/Navbar";
import API from "../../utils/API";

class SurveyOption extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
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
    API.loginData().then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.userLoggedin) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.userLoggedin.username
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
      <Nav />
    );
  }
}

export default SurveyOption;

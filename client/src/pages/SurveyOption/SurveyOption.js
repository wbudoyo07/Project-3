import React, { Component } from 'react';
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import Navbar from '../../components/Navbar'
// components
// import Signup from '../Signup'
// import LoginForm from '../Login'
// import Navbar from './components/navbar'
// import Home from './components/home'

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
    axios.get('/api/admin/login').then(response => {
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
      <div className="Surveyoption">

        <Navbar updateUser ={this.updateUser} loggedIn ={this.state.loggedIn}/>
        {
            this.state.loggedIn && 
            <p>{this.state.username}</p>
        }
      </div>
    );
  }
}

export default SurveyOption;

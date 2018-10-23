import React, { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import "./Navbar.css"
import API from "../../utils/API";

class Navbar extends Component {

    state = {
        username:"",
        email: ""
    }

    componentDidMount() {
        this.getAdmin();
    }
    // log out the authentication admin/user
    logout(event) {
        event.preventDefault()
        console.log('logging out')
        API.logOut().then(response => {
            console.log(response);
            window.location.href= "/"
        }).catch(error => {
            console.log('Logout error')
        })
      }
      
      // get all the data from user authentication
      getAdmin() {
          API.loginData().then(response =>{
            //   console.log(response.data.userLoggedin.username);
              this.setState({
                  username: response.data.userLoggedin.username,
                  email :response.data.userLoggedin.email
              })
          })
      }

    render() {   
        return (
            <Nav className ="Nav">
                <NavItem>
                    <NavLink href="/" onClick ={this.logout} >Logout</NavLink>
                </NavItem>
                <NavItem>
                     <NavLink >{this.state.username}</NavLink>
                </NavItem>
                <NavItem>
                     <NavLink >{this.state.email}</NavLink>
                </NavItem>
            </Nav>
        );

    }
}

export default Navbar



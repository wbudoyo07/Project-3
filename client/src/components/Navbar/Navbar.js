import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Navbar, } from 'reactstrap';
import "./Navbar.css"
import API from "../../utils/API";

class NavbarComponent extends Component {

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
            
            <Navbar className="Navbar" light expand="md">
                <Nav className ="Nav">
                <NavItem>
                        <NavLink href="/aboutus">About us</NavLink>
                </NavItem>
                    <NavItem>
                        <NavLink href="/" onClick ={this.logout} >Logout</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink > username: {this.state.username}</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink > email: {this.state.email}</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );

    }
}

export default NavbarComponent;



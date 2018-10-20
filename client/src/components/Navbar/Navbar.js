import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
import API from '../../utils/API'
import axios from 'axios';

class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        API.logout().then(response => {
          console.log(response.data)
        //    go back to home back when logging
          window.location.href ="/"
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })

          }
        }).catch(error => {
            console.log('Logout error')
        })
      }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div>

                <header className="navbar App-header" id="nav-container">
                    <div className="col-4" >
                        {loggedIn ? (
                            <section className="navbar-section">

                                <a  href ="/" className="btn btn-link text-secondary" onClick={this.logout}> log out </a>
                                <a  href ="/" className="btn btn-link text-secondary" > Create a Survey </a>


                            </section>
                        ) : (
                            <div>
                                Please log in first!!
                                <a href ="/"> Login</a>
                             </div>
                            )}
                    </div>

                </header>
            </div>

        );

    }
}

export default Navbar



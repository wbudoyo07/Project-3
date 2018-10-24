import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import axios from "axios";
class PrivateRoute extends Component {
    state ={
        loggedIn :false
    }

    componentDidMount(){
        this.checkAuth();
    }

    // check if the user logged in and update the state that it will
    // be use for rendering the page
    checkAuth=()=> {   
        axios.get("api/admin/login").then(response=>{
            if (response.data.userLoggedin=== null) {
                this.setState({
                    loggedIn:false
                });
            } 
            else {
                this.setState({
                    loggedIn:true
                });
            }
        }).catch(error => {
            console("Error  on check authentication ")
            console.log(error);
        });
    };

    render(){

        if(this.state.loggedIn === false){
            return(
                <div>
                    {/* <h1>You have to <a href="/"> login</a> first</h1> */}
                </div>          
            )
        }
        else if(this.state.loggedIn === true) {
            return(   
                <Route exact path ={this.props.path} component ={this.props.component} />             
            );
        }
    };
};

export default PrivateRoute;
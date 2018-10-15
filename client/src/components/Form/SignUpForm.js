import React from "react";

const SignUpForm =({firstName, lastName, userName, email, password}) => (
        <div className ="form-group">
        <label for="first-name" className ="cols-sm-2 control-label">First Name</label>
        <div className ="cols-sm-10">
            <div className ="input-group">
                <span className ="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                <input type="text" className="form-control" name="name" id="name"  placeholder="Enter your First Name" onChange ={this.handleInputChange}/>
            </div>
        </div>
    </div> 
);

export default SignUpForm;
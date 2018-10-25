import React, { Component } from "react";
import WOW from "wowjs";

class Skills extends Component {
  
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
      <div className="wow flip">
       <h1>NWORF</h1>
      </div>
    )
   }
}
export default Skills;
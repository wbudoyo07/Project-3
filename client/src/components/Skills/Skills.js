import React, { Component } from "react";
import "./animate.css";
import "./Skills.css";
import WOW from "wowjs";

class Skills extends Component {
  
  componentDidMount() {
    const wow = new WOW.WOW();
    wow.init();
  }
  render() {
    return (
        <div className="nworf" style={{backgroundColor: "#007BA7"}}>
      <div className="wow flipInX flipOutX animated infinite" data-wow-duration="10s" animation-iteration-count= "infinite" >
       <h1 >NWORF 🙃 ИWOЯꟻ 🙃 FROWN 🙃 NWORF</h1></div>
      </div>
    )
   }
}
export default Skills;
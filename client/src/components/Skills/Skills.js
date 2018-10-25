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
        <div className="nworf" style={{padding:"20px", backgroundColor: "#007BA7"}}>
      <div className="wow flip animated infinite" data-wow-duration="10s" animation-iteration-count= "infinite" >
       <h4 >NWORF  ИWOЯꟻ</h4></div>
      </div>
    )
   }
}
export default Skills;
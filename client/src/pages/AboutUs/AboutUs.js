import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
//import { Input, TextArea, InputInfo, FormBtn } from "../../components/Form";
import axios from "axios";
import Navbar from "../../components/Navbar";
// import WOW from "wowjs";
import Skills from "../../components/Skills"
import { Col, Row, Container, Button, Form, 
  FormGroup, Label, Input, FormText, Footer, Modal, ModalBody, ModalFooter} from 'reactstrap';

class AboutUs extends Component {

render() {
    return(<Container>
        <Navbar />
        <Row><Col>
        <div>
            <h1></h1>
        <p><strong>NWORF</strong> is a cheerleader in your pocket. When you're in a bad mood. You can tell a friend and they can pick you up from your poor spirits and then you can store all the times you've been down and have a catalog of the kind words your friends have said to lift you up.</p>
        
         
         <p>On the technical side, <b>NWORF</b> is a MERN based web application created by William Buo and Rob Roy at University of Pennsylvania's Full Stack Web Development Program.</p>
        <p>On the client side, We utilize web dependencies such as reactstrap and WowJs through a React based development.  </p>
        <p>On the back end, we use twilio to send text messsages to users, Passport for user identification, bcrptjs for password incription, Mongo databases, and axios for STTP requests. </p>
        <p>Our initial goal for this final project for our code boot camp was to create a small ballot application to help help group decisions using ranked choice voting. It was a small effort to save democracy. Unfortunately the math proved too difficult to compute in our time frame, so we instead changed our to save us from despondency. When we thought reaching the horizon was hopeless, we changed course and we got there.  </p>

        </div>
        </Col>
        </Row>



    </Container>
        
    )
}
};

export default AboutUs;
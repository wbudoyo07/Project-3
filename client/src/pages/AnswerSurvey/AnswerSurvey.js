import React, { Component } from "react";
import { Link } from "react-router-dom";
//import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { TextArea, InputInfo, FormBtn } from "../../components/Form";
import { Container, Row, Col, 
  Form, FormGroup,Label, Input, Button, 
  Modal, ModalBody} from "reactstrap";
  import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
  import API from "../../utils/API";
  import axios from "axios";
class AnswerSurvey extends Component {
    state = {
      userLoginId:"",
      phonenumber:"",
      mood: "",
      topic: "",
      response: "",
      recipient: ""
    };
  
    componentDidMount() {
      // this.loadItems();

      API.getItem(this.props.match.params.id)
      .then(res => {
        console.log(res);
        
        this.setState({
          mood: res.data.mood,
          topic: res.data.topic
        })
      }
        // this.setState({ book: res.data })
      
        )
      .catch(err => console.log(err));

      this.getLoginData();
    }
  
    // send message to twilio routes
    sendText = ()=> {
      axios.get(`/api/twilio/sendText?recipient=+1${this.state.phonenumber}&textMessage=${this.state.response}`)
      .catch(err =>  console.log(err));
      }

    loadItems = () => {
      API.getItems(this.props.match.params.id)
        .then(res =>{
          console.log(res)
          this.setState({ items: res.data, mood: "", topic: "", response: ""})
        }

        )
        .catch(err => console.log(err));
    }

    getLoginData =() => {
      API.loginData().then(response => {
        // console.log(response.data.userLoggedin.phonenumber);
        this.setState({
          phonenumber:response.data.userLoggedin.phonenumber
        })
      });
    };
    

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
      console.log(event.target.value)
    };

    handleFormSubmit = event => {
      const id =this.props.match.params.id;
      event.preventDefault();

      if (this.state.response
        ) {
        API.saveResponse( id,
          {
           response: this.state.response
        })
          .then(res => {
            console.log(res);
            this.sendText();
          })
          .catch(err => console.log(err));
      }
      
    };
    
      render() {
        return (
          <Container fluid>
          <Row>
            <Col size="md-12">  
              <Jumbotron>
              <h1>Cheer Up</h1>
              <span>{this.state.mood}</span> <span>{this.state.topic}</span>
                </Jumbotron>
          <Form>
          <FormGroup>
            <Label for="response">Text Area</Label>
          <Input 
          type="textarea"
           name="response" 
           id="response" 
           value= {this.state.response}
           onChange ={this.handleInputChange}
           />
        </FormGroup>
        <FormGroup>
          <Button
          outline color ="info"
          type ="submit"
          onClick= {this.handleFormSubmit}
          >
            Submit
          </Button>
        </FormGroup>
        </Form>
       </Col>
       </Row>
     </Container>
        );
      }
    }
    
export default AnswerSurvey;
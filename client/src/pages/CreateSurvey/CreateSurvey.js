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
import { Col, Row, Container, Button, Form, 
  FormGroup, Label, Input, FormText, Footer } from 'reactstrap';


class CreateSurvey extends Component {

    state = {
        items: [],
        messsageId: "",
        userLoginId: "",
        mood: "",
        topic: "",
        response: "",
        recipient: "",
        phonenumber:""
      };
    
      componentDidMount() {
        this.loadItems();
        this.getLoginData();
      }
    
      loadItems = () => {
        API.getItems()
          .then(res =>
            this.setState({ items: res.data, mood: "", topic: "", response: ""})
          )
          .catch(err => console.log(err));
      };

    getLoginData =() => {
      API.loginData().then(response => {
        this.setState({
          userLoginId:response.data.userLoggedin._id,
          phonenumber:response.data.userLoggedin.phonenumber
        })
      });
    };
    // send message to twilio routes
    sendText = ()=> {
      axios.get(`/api/twilio/sendText?recipient=+1${this.state.recipient}&textMessage=https://nworf.herokuapp.com/answersurvey/${this.state.messsageId}`)
      .catch(err =>  console.log(err));
      }

      deleteItem = id => {
        API.deleteItem(id)
          .then(res => this.loadItems())
          .catch(err => console.log(err));
      };
    
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
      handleFormSubmit = event => {
        const id= this.state.userLoginId;
        event.preventDefault();
        if (this.state.mood
            && this.state.topic
          ) {
            console.log(this.state.recipient);
          API.saveItem(id,
          {
            mood: this.state.mood,
            topic: this.state.topic,
            phonenumber: this.state.phonenumber
          })
            .then(res => {
              // this.loadItems()
              console.log(res.data.message.slice(-1)[0]);
            
              this.setState({
                messsageId:res.data.message.slice(-1)[0]
              });
              this.sendText();
            }
              )
            .catch(err => console.log(err));
        }
      };
    
      render() {
        return (

          <Container>

          <Navbar />
          <Row>
              <Col >

              
                <Jumbotron>
                  <h1 className="display-1"><strong>NWORF</strong></h1>
                  <h4>Turn that frown upside down.</h4>
                </Jumbotron>
<Form>
                <FormGroup>
         <Label for="mood">I’m feeling</Label>
         <Input type="textarea"
         name="mood"
         value={this.state.mood}
         onChange={this.handleInputChange}
         placeholder=" 😣 😥 🙃 😮 🤐 😯 😪 😫 😴 😟 😱 😝 🤤 😒 😓 🤬 😕 🙃 😫 😲 ☹️ 🙁 😖 😞 😟 😤 😢 😯 😦 🙃 😧 😩 🤯 😬 😰 😱 😵 😡 😠 🤬 😷 🤒 🤕 🤢 🤮 🤧 😇 🤭 😌 🙃 😨 😔 😥 🤯" />
       </FormGroup>

       <FormGroup>
         <Label for="topic">About....</Label>
         <Input type="textarea"
         name="topic"
         value={this.state.topic}
         onChange={this.handleInputChange}
         placeholder="life."/>
       </FormGroup>

{/* <FormText color="muted">
           Enter the phone number of someone who can help change your mood.
         </FormText> */}

         <FormGroup>
         <Label for="recipient"> Enter the phone number of someone who can help change your mood.</Label>
         <Input type="text"
         name="recipient"
         placeholder="555-867-5309"
         value={this.state.recipient}
         onChange={this.handleInputChange}
         />
       </FormGroup>

       <FormGroup>
       <Button disabled={!(
                      this.state.mood && 
                      this.state.topic)}
                    onClick={this.handleFormSubmit}
                  >
            🙁 ⇒ 🙂 </Button>
          </FormGroup>

        </Form>  
        
              </Col>
              </Row>
          </Container >

          );
        }
      }
  
export default CreateSurvey;
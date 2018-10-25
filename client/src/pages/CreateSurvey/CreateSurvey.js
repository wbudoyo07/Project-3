import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, InputInfo, FormBtn } from "../../components/Form";
import axios from "axios";
import Navbar from "../../components/Navbar";

class CreateSurvey extends Component {

    state = {
        items: [],
        messsageId: "",
        userLoginId: "",
        mood: "",
        topic: "",
        response: "",
        recipient: ""
        // ,
        // author: "",
        // details: ""
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
          userLoginId:response.data.userLoggedin._id
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
            // details: this.state.details
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
          <Container fluid>
          <Navbar />
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h1>Insecurity?</h1>
                </Jumbotron>
                <form>
                    <Input
                    value={this.state.mood}
                    onChange={this.handleInputChange}
                    name="mood"
                    placeholder="Mood (required)"
                  />
                  <Input
                    value={this.state.topic}
                    onChange={this.handleInputChange}
                    name="topic"
                    placeholder="I'm insecure about..."
                  />
                    <InputInfo
                    value={this.state.recipient}
                    onChange={this.handleInputChange}
                    name="recipient"
                    placeholder="Phone Number of a fiend"
                  />
                  {/* <Input
                    value={this.state.author}
                    onChange={this.handleInputChange}
                    name="author"
                    placeholder="Author (required)"
                  /> */}
                  {/* <TextArea
                    value={this.state.details}
                    onChange={this.handleInputChange}
                    name="details"
                    placeholder="Details (Optional)"
                  /> */}
                  <FormBtn
                    disabled={!(
                      this.state.mood && 
                      this.state.topic)}
                    onClick={this.handleFormSubmit}
                  >
                    Ask for the pick me up
                  </FormBtn>
                </form>
                {/* <form>
                  <InputInfo
                    value={this.state.ballotName}
                    onChange={this.handleInputChange}
                    name="ballotName"
                    placeholder="Survey Topic"
                  />
                  <FormBtn
                    disabled={!(
                       this.state.ballotName && 
                      this.state.recipient)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Topic
                  </FormBtn>
                  </form>
                  <form>
                  <InputInfo
                    value={this.state.recipient}
                    onChange={this.handleInputChange}
                    name="recipient"
                    placeholder="Phone Number"
                  />
                  <FormBtn
                    disabled={!(
                       this.state.ballotName && 
                      this.state.recipient)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit Phone #
                  </FormBtn>

                </form> */}
              </Col>
              
              

            </Row>
          </Container>
        );
      }
    }

export default CreateSurvey;
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

class AnswerSurvey extends Component {

    // state = {
    //     item: {}
    //   };
    //   // When this component mounts, grab the item with the _id of this.props.match.params.id
    //   // e.g. localhost:3000/items/599dcb67f0f16317844583fc
    //   componentDidMount() {
    //     API.getItem(this.props.match.params.id)
    //       .then(res => this.setState({ item: res.data }))
    //       .catch(err => console.log(err));
    //   }
    

    state = {
      userLoginId:"",
      phonenumber:"",
      mood: "",
      topic: "",
      response: "",
      recipient: ""
      // ,
      // author: "",
      // details: ""
    };
  
    componentDidMount() {
      // this.loadItems();

      API.getItem(this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        
        this.setState({
          mood: res.data.mood,
          topic: res.data.topic
        })
      }
        // this.setState({ book: res.data })
      
        )
      .catch(err => console.log(err));

      // this.getLoginData();
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
        console.log(response);
        // this.setState({
        //   userLoginId:response.data.userLoggedin._id
        // })
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
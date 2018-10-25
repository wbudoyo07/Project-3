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
      items: [],
      userLoggedIn:"",
      id: "",
      mood: "",
      topic: "",
      responseText: "",
      adminPhonenumber:"",
      recipient: ""

      // ,
      // author: "",
      // details: ""
    };
  
    componentDidMount() {
      // this.loadItems();
      this.getMessageData();
      this.getLoginDataPhoneNumber();
    }
    getMessageData=()=> {
      API.getItem(this.props.match.params.id)
      .then(res => {
        console.log(res.data);
        this.setState({
          mood: res.data.mood,
          topic: res.data.topic
        })
      })
      .catch(err => console.log(err));
    }

    getLoginDataPhoneNumber =() => {
      API.loginData().then(response => {
        this.setState({
          adminPhonenumber: response.data.userLoggedin.phonenumber,
          userLoginId:response.data.userLoggedin._id

        })
        console.log(this.state);
      })
    }
    sendText= ()=>{
      axios.get(`/api/twilio/sendText?recipient=+1${this.state.adminPhonenumber}&textMessage=${this.state.responseText}`)
      .catch(err =>  console.log(err));
    }
    loadItems = () => {
      API.getItems(this.props.match.params.id)
        .then(res =>{
          console.log(res)
          // this.setState({ items: res.data, mood: "", topic: "", response: ""})
        }

        )
        .catch(err => console.log(err));
    }

    // loadItems = () => {
    //   API.getLoginIn()
    //     .then(res =>
    //       this.setState({ userLoggedin: res.data, username: ""})
    //     )
    //     .catch(err => console.log(err));
    // }
    

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
      console.log(event.target.value);
    };
    handleFormSubmit = event => {
      const id = this.state.userLoggedIn;
      event.preventDefault();
      if (this.state.response
          // && this.state.topic
        ) {
        //   console.log(this.state.recipient);
        // this.sendText();
        API.saveItem( id,{
           response: this.state.responseText
          // details: this.state.details
        })
          .then(res => this.loadItems())
          .catch(err => console.log(err));
      }
    };



// //   onSortEnd = ({oldIndex, newIndex}) => {
// //     this.setState({
// //       items: arrayMove(this.state.items, oldIndex, newIndex),
// //     });
// //   };

    
      render() {
        return (
          <Container fluid>
            <Col size="md-12">
            <Row>
              
              <Jumbotron>
              <h1>Cheer Up</h1>
              <span>{this.state.mood}</span> <span>{this.state.topic}</span>
                </Jumbotron></Row><Row>
                  {this.state.items.length ? (
                    <List>
                    {this.state.items.map(item => (
                          <ListItem key={item._id}>
                        <Link to={"/items/" + item._id}>
                        <strong>
                           I am {item.mood} about {item.topic
                             }
                         </strong>
                            </Link>
                          </ListItem>
                          ))}
                        </List>
                      ) : (<h1></h1>
                      )}
         </Row>
         <form>
                        <TextArea
                                            value={this.state.responseText}
                                            onChange={this.handleInputChange}
                                            name="responseText"
                                            placeholder="Pick your friend up"
                                          />
                        <FormBtn
                        disabled={!(
                          this.state.responseText )}
                        onClick={this.handleFormSubmit}
                        >
                        Send a smile
                        </FormBtn>
                        </form>
       </Col>
     </Container>
        );
      }
    }
    
export default AnswerSurvey;
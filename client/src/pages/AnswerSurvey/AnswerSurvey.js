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
      items: [],
      userLoggedin: [],
      id: "",
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
    }
  

    loadItems = () => {
      API.getItems()
        .then(res =>
          this.setState({ items: res.data, mood: "", topic: "", response: ""})
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
    };
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.response
          // && this.state.topic
        ) {
        //   console.log(this.state.recipient);
        // this.sendText();
        API.saveItem({
          mood: this.state.mood,
           topic: this.state.topic,
           response: this.state.response

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
                                            value={this.state.response}
                                            onChange={this.handleInputChange}
                                            name="response"
                                            placeholder="Pick your friend up"
                                          />
                        <FormBtn
                        disabled={!(
                          this.state.response )}
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
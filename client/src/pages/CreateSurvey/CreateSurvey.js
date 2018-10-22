import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import axios from "axios";
class CreateSurvey extends Component {

    state = {
        items: [],
        title: "",
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
            this.setState({ items: res.data, title: ""})
          )
          .catch(err => console.log(err));
      };

    // send message to twilio routes
    sendText = ()=> {
      axios.get(`/api/twilio/sendText?recipient=+1${this.state.recipient}&textMessage=www.google.com`)
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
        event.preventDefault();
        if (this.state.title
          // && this.state.author
          ) {
            console.log(this.state.recipient);
          this.sendText();
          API.saveItem({
            title: this.state.title,
            // author: this.state.author,
            // details: this.state.details
          })
            .then(res => this.loadItems())
            .catch(err => console.log(err));
        }
      };
    
      render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-6">
                <Jumbotron>
                  <h1>Make a ballot</h1>
                </Jumbotron>
                <form>
                  <Input
                    value={this.state.title}
                    onChange={this.handleInputChange}
                    name="title"
                    placeholder="Item Title (required)"
                  />
                  <Input
                    value={this.state.recipient}
                    onChange={this.handleInputChange}
                    name="recipient"
                    placeholder="Phone Number"
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
                      // this.state.author && 
                      this.state.title)}
                    onClick={this.handleFormSubmit}
                  >
                    Submit
                  </FormBtn>
                </form>
              </Col>
              <Col size="md-6 sm-12">
                <Jumbotron>
                  <h1>Current Options</h1>
                </Jumbotron>
                {this.state.items.length ? (
                  <List>
                    {this.state.items.map(item => (
                      <ListItem key={item._id}>
                        <Link to={"/items/" + item._id}>
                          <strong>
                            {item.title} 
                            {/* by {item.author */}
                            }
                          </strong>
                        </Link>
                        <DeleteBtn onClick={() => this.deleteItem(item._id)} />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>Current Options</h3>
                )}
              </Col>
            </Row>
          </Container>
        );
      }
    }

export default CreateSurvey;
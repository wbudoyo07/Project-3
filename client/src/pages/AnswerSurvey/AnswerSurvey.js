import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
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
      title: ""
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

      render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-12">
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
    
export default AnswerSurvey;
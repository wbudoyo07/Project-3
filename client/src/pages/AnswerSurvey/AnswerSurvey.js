import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, InputInfo, FormBtn } from "../../components/Form";

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
    };

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };
    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.mood
          && this.state.topic
        ) {
          console.log(this.state.recipient);
        this.sendText();
        API.saveItem({
          title: this.state.mood,
           ballotName: this.state.topic,
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
            <Row>
              <Col size="md-12">
              <Jumbotron>
              <h1>Cheer Up</h1>
                </Jumbotron>
                  {this.state.items.length ? (
                    <List>
                    {this.state.items.map(item => (
                          <ListItem key={item._id}>
                        <Link to={"/items/" + item._id}>
                        <strong>
                           I'm {item.mood} about {item.topic
                             }
                         </strong>
                            </Link>
                          </ListItem>
                          ))}
                        </List>

                      ) : (
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
           )}
         </Col>
       </Row>
     </Container>
        );
      }
    }
    
export default AnswerSurvey;





// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../../components/Grid";
// import Jumbotron from "../../components/Jumbotron";
// import { List, ListItem } from "../../components/List";
// import API from "../../utils/API";

// class AnswerSurvey extends Component {

//     // state = {
//     //     item: {}
//     //   };
//     //   // When this component mounts, grab the item with the _id of this.props.match.params.id
//     //   // e.g. localhost:3000/items/599dcb67f0f16317844583fc
//     //   componentDidMount() {
//     //     API.getItem(this.props.match.params.id)
//     //       .then(res => this.setState({ item: res.data }))
//     //       .catch(err => console.log(err));
//     //   }
    
//     constructor() {
//       super();
//       this.state = {
//         items: [],
//         title: ""
//         // ,
//         // author: "",
//         // details: ""
//       };
//     }
//     // state = {
//     //   items: [],
//     //   title: ""
//     //   // ,
//     //   // author: "",
//     //   // details: ""
//     // };
  
//     // componentDidMount() {
//     //   fetch(API.getItems())
//     //   .then.loadItems(res =>
//     //     this.setState({ items: res.data, title: ""}));
//     //   .then.onSortEnd(({oldIndex, newIndex})=>{
//     //         this.setState({
//     //         items: arrayMove(this.state.items, oldIndex, newIndex),
//     //        })
//     // }
  
//     // loadItems = () => {
//     //   API.getItems()
//     //     .then(res =>
//     //       this.setState({ items: res.data, title: ""})
//     //     )
//     //     .catch(err => console.log(err));
//     // };



//       render() {
//         return (
//           <Container fluid>
//             <Row>
//               <Col size="md-12">
//               <Jumbotron>
//               <h1>Current Options</h1>
//                 </Jumbotron>
//                   {this.state.items.length ? (
//                     <List>
//                     {this.state.items.map(item => (
//                           <ListItem key={item._id}>
//                         <Link to={"/items/" + item._id}>
//                         <strong>
//                             {item.title} 
//                           {/* by {item.author */}
//                              }
//                          </strong>
//                             </Link>
//                           </ListItem>
//                           ))}
//                         </List>
//                       ) : (
//              <h3>Current Options</h3>
//            )}
//          </Col>
//        </Row>
//      </Container>
//         );
//       }
//     }
    
// export default AnswerSurvey;



// // class SortableComponent extends Component {
// //   state = {
// //     items: ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'],
// //   };
// //   onSortEnd = ({oldIndex, newIndex}) => {
// //     this.setState({
// //       items: arrayMove(this.state.items, oldIndex, newIndex),
// //     });
// //   };
// //   render() {
// //     return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
// //   }
// // }
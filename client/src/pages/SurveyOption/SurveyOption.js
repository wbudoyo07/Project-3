import React, { Component } from 'react';
import Nav from "../../components/Navbar";
import { Container, Row, Col, Button } from 'reactstrap';
import "./SurveyOption.css";

class SurveyOption extends Component {

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col>
            <Button
              className="SurveyBtn"
              href="/createsurvey"
              outline color ="info"
              size="lg"
              block
            >
              Send Message
            </Button>
          </Col>
          </Row>
      </Container>
    );
  }
}

export default SurveyOption;

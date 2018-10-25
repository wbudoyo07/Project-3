import React, { Component } from 'react';
import Nav from "../../components/Navbar";
import { Container, Row, Col, Button } from 'reactstrap';
import "./SurveyOptions.css";

class SurveyOption extends Component {

  render() {
    return (
      <Container className="surveyOptions" fluid>
        <Nav />
        <Row >
          <Col>
            <Button
              className="createSurvey-btn"
              href="/createsurvey"
              outline color ="info"
              size="lg"
              block
            >
              Create Survey
            </Button>
          </Col>
          </Row>
          <Row>
          <Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SurveyOption;

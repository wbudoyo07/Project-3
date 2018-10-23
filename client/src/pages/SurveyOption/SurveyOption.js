import React, { Component } from 'react';
import Nav from "../../components/Navbar";
import { Container, Row, Col, Button } from 'reactstrap';

class SurveyOption extends Component {

  render() {
    return (
      <Container fluid>
        <Nav />
        <Row>
          <Col>
            <Button
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
            <Button
            type ="submit"
            href="/previoussurvey"
            outline color ="info"
            size ="lg"
            block
            >
              Previous Survey
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SurveyOption;

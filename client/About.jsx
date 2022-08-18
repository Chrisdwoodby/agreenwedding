import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const About = function(props) {
  return (
    <div>
      <Container id="about-container">
        <h1>The story of us</h1>
        <Row id="a-row">
          <Col id="col-left" md={6}><p>we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place</p></Col>
          <Col id="col-right" md={6}><span>October 25th 2018</span></Col>
        </Row>
        <Row>
          <Col id="col-left" md={6}><span>October 25th 2018</span></Col>
          <Col id="col-right" md={6}><p>we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place</p></Col>
        </Row>
        <Row id="a-row">
          <Col id="col-left" md={6}><p>we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place</p></Col>
          <Col id="col-right" md={6}><span>October 25th 2018</span></Col>
        </Row>
        <Row>
          <Col id="col-left" md={6}><span>October 25th 2018</span></Col>
          <Col id="col-right" md={6}><p>we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place
          we met like this at this place we met like this at this place</p></Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;
import React, {useState} from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = function(props) {
    return (
      <div class="home">
        <div class="banner">
          <h2>home screen content</h2>
        </div>
        <div class="timeline">
          <h3>schedule content here</h3>
          <Row>
            <Col>Guests arrive</Col>
            <Col>ceremony</Col>
            <Col>cocktail hour</Col>
            <Col>Sunset</Col>
            <Col>Grand Entrance/first dance</Col>
            <Col>Dinner served</Col>
            <Col>Speeches/Cake/Family dances </Col>
            <Col>send off</Col>
          </Row>
        </div>
      </div>
    )
}
export default Home;
import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import firstmet from '../media/firstmet.jpeg';
import ryan from '../media/ryan.png';
import corrie from '../media/corrie.png';
import house from '../media/house.jpg';
import dating from '../media/dating.JPG';
import movein from '../media/movein.JPG';
import proposed from '../media/proposed.JPG';

const About = function(props) {
  return (
    <div>
      <Container id="about-container">
        <h1>The story of us</h1>
        <Row id="a-row">
          <Col id="col-left" md={6} style={{display:'flex'}}>
            <Col><img id="about-photo" src={firstmet}/></Col>
            <Col><p>Ryan and Corrie meet at work</p></Col>
          </Col>
          <Col id="col-right" md={6}><span><strong>Sometime in 2012</strong></span></Col>
        </Row>
        <Row>
          <Col id="col-left" md={6}><span><strong>June 2013</strong></span></Col>
          <Col id="col-right" md={6} style={{display:'flex'}}>
            <Col><p>After a year of friendship and sparks, Ryan and Corrie began dating</p></Col>
            <Col><img id="about-photo" src={dating}/></Col>
          </Col>
        </Row>
        <Row id="a-row">
          <Col id="col-left" md={6} style={{display:'inline-flex'}}>
            <Col><img id="about-photo" src={movein}/></Col>
            <Col><p>First moved in together!</p></Col>
          </Col>
          <Col id="col-right" md={6}><span><strong>January 2015</strong></span></Col>
        </Row>
        <Row>
          <Col id="col-left" md={6}><span><strong>September 2019</strong></span></Col>
          <Col id="col-right" md={6} style={{display:'inline-flex'}}>
            <Col><p>Bought our first home together</p></Col>
            <Col><img id="about-photo" src={house}/></Col>
          </Col>
        </Row>
        <Row id="a-row">
          <Col id="col-left" md={6} style={{display:'inline-flex'}}>
            <Col><img id="about-photo" src={proposed}/></Col>
            <Col><p>Ryan proposed and Corrie said yes!</p></Col>
          </Col>
          <Col id="col-right" md={6}><span><strong>October 2021</strong></span></Col>
        </Row>
        <Row>
          <Col id="col-left" md={6}><span><strong>November 2022</strong></span></Col>
          <Col id="col-right" md={6} style={{display:'inline-flex'}}>
            <Col><p>We say I Do</p></Col>
            <Col><img id="about-photo" src={dating}/></Col>
          </Col>
        </Row>
        <Row id="about-footer">
            <Col md={6} id="ryan" style={{background: `url(${ryan})`, backgroundPosition: 'top'}}>
              <p>I met Corrie at my first real job, a Ford dealership.  I didn't say much to her as she was the center of attention to all the guys at the shop. Lucky me, I was able to get her attention by ignoring her and light flirting. I knew there was something special about her, at the time I wasn't sure how special.  After one long year of being friends and letting her be herself I finally convinced her I wasn't like the rest and this wasn't some short term thing. After years of dating we finally got an apartment together. From that moment on I had to plan the perfect way to let her know I wanted to spend the rest of my life with her. </p>
            </Col>
            <Col md={6} id="corie" style={{background: `url(${corrie})`, backgroundPosition: 'top'}}>
              <p>I had been working at Ford for a while and there was this new tech who kept ignoring me. It caught my attention and I thought maybe I had offended him or something, but once we got to talking we became friends. I wasn't in a place to date so I was determined to just stay friends, I think I knew if I let myself then I would be jumping into something big. Really big. I'm so grateful that he chose to stick with me for that year because the past nine years have been the most wonderful, adventurous, fulfilling and happiest years of my life. I can't wait to see what the rest of our lives look like. </p>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;
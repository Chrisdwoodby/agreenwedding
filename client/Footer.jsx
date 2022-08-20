import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../media/Logo.png';
import Nav from 'react-bootstrap/Nav';

const Footer = function(props) {
    const renderRSVP = function() {
        props.setHome(false);
        props.setRSVP(true);
        props.setAbout(false);
        props.setFaqs(false);
        props.renderAuthentication();
    }; 
    const renderHome = function() {
        props.setHome(true);
        props.setRSVP(false);
        props.setAbout(false);
        props.setFaqs(false);
        props.renderAuthentication();
    };
    const renderAbout = function() {
        props.setHome(false);
        props.setAbout(true)
        props.setRSVP(false);
        props.setFaqs(false);
        props.renderAuthentication();
    }
    const renderFaqs = function() {
        props.setHome(false);
        props.setAbout(false);
        props.setRSVP(false);
        props.setFaqs(true);
        props.renderAuthentication();
    }
  return (
    <div class="footer">
        <Row>
          <Col id="footer-nav">
            <Nav.Link href="#home" onClick={() => {renderHome(); handleClose()}}>Home</Nav.Link>
            <Nav.Link onClick={() => {renderRSVP(); handleClose()}}>RSVP</Nav.Link>
          </Col>
          <Col><img src={logo}/></Col>
          <Col id="footer-nav">
            <Nav.Link onClick={() => {renderAbout(); handleClose()}}>Our Story</Nav.Link>
            <Nav.Link onClick={() => {renderFaqs(); handleClose()}}>FAQ's</Nav.Link> 
          </Col>
        </Row>
    </div>
  )
}

export default Footer;
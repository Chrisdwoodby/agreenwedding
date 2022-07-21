import React, {useState} from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = function(props) {
    const renderRSVP = function() {
        props.setHome(false);
        props.setRSVP(true);
        props.setAbout(false);
        props.renderAuthentication();
    }; 
    const renderHome = function() {
        props.setHome(true);
        props.setRSVP(false);
        props.setAbout(false);
        props.renderAuthentication();
    };
    const renderAbout = function() {
        props.setHome(false);
        props.setAbout(true)
        props.setRSVP(false);
        props.renderAuthentication();
    }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home" onClick={renderHome}>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" onClick={renderRSVP}>RSVP</Nav.Link>
            <Nav.Link href="#pricing" onClick={renderAbout}>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;
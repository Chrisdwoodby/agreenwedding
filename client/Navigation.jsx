import React, {useState} from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../media/Logo.png';

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
    <Navbar id="nav-main" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="#home" onClick={renderHome}>
          <img class="logo" src={logo}/>
        </Navbar.Brand>
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
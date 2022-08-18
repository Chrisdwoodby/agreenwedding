import React, {useState} from "react";
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../media/Logo.png';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Navigation = function(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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
    <>
    <Navbar id="nav-main" collapseOnSelect expand="lg">
      <Container >
        <Navbar.Brand className="mx-auto" href="#home" onClick={renderHome}>
          <img class="logo" src={logo}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleShow}/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" onClick={renderHome}>Home</Nav.Link>
            <Nav.Link onClick={renderRSVP}>RSVP</Nav.Link>
            <Nav.Link onClick={renderAbout}>Our Story</Nav.Link>
            <Nav.Link onClick={renderFaqs}>FAQ's</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          {/* <Modal.Title></Modal.Title> */}
        </Modal.Header>
        <Modal.Body id="popup-menu">
        <Nav.Link href="#home" onClick={() => {renderHome(); handleClose()}}>Home</Nav.Link>
            <Nav.Link onClick={() => {renderRSVP(); handleClose()}}>RSVP</Nav.Link>
            <Nav.Link onClick={() => {renderAbout(); handleClose()}}>Our Story</Nav.Link>
            <Nav.Link onClick={() => {renderFaqs(); handleClose()}}>FAQ's</Nav.Link> 
        </Modal.Body>
        <Modal.Footer id="close-popup">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Navigation;
import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo from '../media/Logo.png';

const Footer = function(props) {
  return (
    <div class="footer">
        <Row>
          <img src={logo}/>
        </Row>
    </div>
  )
}

export default Footer;
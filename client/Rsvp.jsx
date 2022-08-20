import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import suit from '../media/suit.jpg';

const Rsvp = function(props) {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [attendee, setAttendee] = useState('');
  const [guest, setGuest] = useState('');
  const [food, setFoodChoice] = useState('');
  const [attendeeEmail, setAttendeeEmail] = useState('');
  // set up an on change function for the form inputs to update state (guest info)
  // stateful data will be send via email to ryan
  
  
  // set up api email post here | use state variables in the request and call request once submit is hit on form


  return (
    <div style={{backgroundImage: `url(${suit})`, backgroundPositionX: '25%', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} class="rsvp">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdeVFkDcspbdmrV1Xsudxs050lQjrwoS-b_F7FjuGE2ediXpw/viewform?embedded=true" width="640" height="1669" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </div>
  )
}

export default Rsvp;
import React from "react";
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';

const Faqs = function(props) {
  return (
    <Container id="faqs">
    <h1>Frequently Asked Questions</h1>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Where is the wedding?</Accordion.Header>
        <Accordion.Body>
          Eagle Dancer Ranch in Boerne, Texas! 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>What is the dress code? What should I wear?</Accordion.Header>
        <Accordion.Body>
          The dress code for our wedding is semi-formal. Wear something you’re comfortable in—button-up shirts, long or short flowy dresses, or whatever brings you joy. Since our ceremony will take place outdoors on grass, we recommend avoiding stiletto heels so you won’t get stuck! 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>What time is the ceremony and reception?</Accordion.Header>
        <Accordion.Body>
          We are asking all guests to arrive by 3:30 for the ceremony. The reception will begin around 5:45 with cocktail hour before hand 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Will the wedding be indoors or outdoors?</Accordion.Header>
        <Accordion.Body>
          Our ceremony will take place outdoors under a grove of trees. The reception will be in a historic climate controlled barn built in 1874!
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>What weather should I expect?</Accordion.Header>
        <Accordion.Body>
          This is for all you coming from out of town! While we can’t control the weather, history shows that it should be a sunny clear day with highs in the mid 70’s or low 80’s. As the sun sets the lows could be as cool as the mid 50’s. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>What happens after the ceremony?</Accordion.Header>
        <Accordion.Body>
          After the ceremony, the couple and immediate family will be taking pictures for around an hour. Guests can head over to the reception hall where snacks and drinks will be flowing starting at 4:30. Dinner will be served around 6 pm, with dancing to follow! 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="7">
        <Accordion.Header>Will transportation be provided? Where should I park?</Accordion.Header>
        <Accordion.Body>
          We are not providing any formal transportation to the venue. There is a central parking lot at the venue where guests will park and there will be a shuttle to take guests down to the ceremony site. There is ample parking for those who feel comfortable driving. Please stay safe and default to a ride service or carpooling if you plan to drink.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="8">
        <Accordion.Header>Can I bring my kids?</Accordion.Header>
        <Accordion.Body>
          To allow all wedding guests, including parents, a night of relaxation and uninhibited revelry, we respectfully ask that only children in the wedding party attend the ceremony or reception. The reception will be an adults only affair after 7:30pm. Thank you for your understanding! 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="9">
        <Accordion.Header>Can I bring my partner?</Accordion.Header>
        <Accordion.Body>
          We are at capacity with our venue which means we are sadly unable to accommodate additional guests. We will only be able to accommodate those listed on your invitation. If you have any questions, please reach out.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  )
}

export default Faqs;
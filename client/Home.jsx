import React, {useState} from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import background from '../media/background.png';
import banner from '../media/banner.jpeg'
import bridal from '../media/bridal.jpeg'
import out from '../media/out.jpeg'
import Ceremony from '../media/Ceremony.jpeg'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const Home = function(props) {
    const renderRSVP = function() {
        props.setHome(false);
        props.setRSVP(true);
        props.setAbout(false);
        props.setFaqs(false);
        props.renderAuthentication();
    }; 
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
      <div class="home">
        <div style={{backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} class="banner">
          <div class="rsvp-content">
            <h1>RSVP Now</h1>
            <a onClick={renderRSVP}>Click Here</a>
          </div>
        </div>
        <div class="banner-spacer">
          <h2>View the Wedding Schedule</h2>
        </div>
        <div class="timeline">
          <Carousel responsive={responsive}>
            <div class="item-1" style={{background: `url(${Ceremony})`}}>Item 1</div>
            <div class="item-2" style={{background: `url(${Ceremony})`}}>Item 2</div>
            <div class="item-3" style={{background: `url(${Ceremony})`}}>Item 3</div>
            <div class="item-4" style={{background: `url(${Ceremony})`}}>Item 4</div>
          </Carousel>;
        </div>
      </div>
    )
}
export default Home;
import React, {useState} from 'react';
// import Carousel from 'react-bootstrap/Carousel';
import banner from '../media/banner.jpeg'
import out from '../media/out.jpeg'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Ceremony from '../media/Ceremony.png';
import savethedate from '../media/savethedate.png';
import reception from '../media/reception.png';
import barn from '../media/barn.png';
import dessert from '../media/dessert.png';
import sparkler from '../media/sparkler.png';
import dinner from '../media/dinner.png';
import arrival from '../media/arrival.png';
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
    var end = new Date('11/11/2022 3:30 PM');

    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    function showRemaining() {
        var now = new Date();
        var distance = end - now;
        if (distance < 0) {

            clearInterval(timer);
            document.getElementById('countdown').innerHTML = 'EXPIRED!';

            return;
        }
        var days = Math.floor(distance / _day);
        var hours = Math.floor((distance % _day) / _hour);
        var minutes = Math.floor((distance % _hour) / _minute);
        var seconds = Math.floor((distance % _minute) / _second);

        document.getElementById('countdown').innerHTML = days + ' days ';
        document.getElementById('countdown').innerHTML += hours + ' hrs ';
        document.getElementById('countdown').innerHTML += minutes + ' mins ';
        document.getElementById('countdown').innerHTML += seconds + ' secs';
    }

    timer = setInterval(showRemaining, 1000);
    return (
      <div class="home">
        <div style={{backgroundImage: `url(${banner})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} class="banner">
          <div class="rsvp-content">
            <h1>RSVP Now</h1>
            <a onClick={renderRSVP}>Click Here</a>
          </div>
        </div>
        <div class="save-the-date">
        <Row>
            <Col>
                <img src={savethedate}/>
            </Col>
            <Col style={{display: 'flex'}}>
              <div id="date-inner">
                <h2>Countdown to Forever</h2>
                <span id="countdown"></span>
              </div>
            </Col>
        </Row>
        </div>
        <div class="banner-spacer">
          <h2>View the Wedding Schedule</h2>
        </div>
        <div class="timeline">
          <Carousel responsive={responsive}>
            <div class="item-1" style={{background: `url(${arrival})`, backgroundPosition: 'center'}}><div id="item-inner-text"><h3>3:30</h3>Everyone Arrives</div></div>
            <div class="item-2" style={{background: `url(${reception})`, backgroundPosition: 'center'}}><div id="item-inner-text"><h3>4:00</h3>Ceremony Begins</div></div>
            <div class="item-3" style={{background: `url(${barn})`, backgroundPosition: 'bottom'}}><div id="item-inner-text"><h3>4:30</h3>Cocktail Hour/Photos</div></div>
            <div class="item-4" style={{background: `url(${Ceremony})`, backgroundPosition: 'center'}}><div id="item-inner-text"><h3>5:45</h3>Grand Entrance into First Dance</div></div>
            <div class="item-4" style={{background: `url(${dinner})`, backgroundPosition: 'center'}}><div id="item-inner-text"><h3>6:00</h3>Dinner Served</div></div>
            <div class="item-4" style={{background: `url(${dessert})`, backgroundPosition: 'center'}}><div id="item-inner-text"><h3>6:30</h3>Speeches and Dessert</div></div>
            <div class="item-4" style={{background: `url(${sparkler})`, backgroundPosition: 'center'}}><div id="item-inner-text"><h3>10:30</h3>Sparkler Send Off</div></div>
          </Carousel>;
        </div>
      </div>
    )
}
export default Home;
import React, {useState} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import background from '../media/background.png';
import wedding from '../media/wedding.jpeg'

const Home = function(props) {
    return (
      <div class="home">
        <div style={{backgroundImage: `url(${wedding})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}} class="banner">
          <div class="rsvp-content">
            <h1>RSVP Now</h1>
            <a onClick={props.setRSVP}>Click Here</a>
          </div>
        </div>
        <div class="timeline">
          <Carousel variant="dark">
            <Carousel.Item>
              <img
              className="d-block w-100"
              src={background}
              alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
              className="d-block w-100"
              src={background}
              alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>4th slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>5th slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>6th slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>7th slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={background}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>8th slide label</h5>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    )
}
export default Home;
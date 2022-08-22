import React, {useState} from "react";
import Navigation from "./Navigation.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Rsvp from "./Rsvp.jsx";
import Footer from "./Footer.jsx";
import Faqs from "./Faqs.jsx";

const Main = function(props) {
  const [renderHome, setHome] = useState(true);
  const [renderRSVP, setRSVP] = useState(false);
  const [renderAbout, setAbout] = useState(false);
  const [renderFaqs, setFaqs] = useState(false);

  const renderAuthentication = function() {
    if (renderHome) {
      return <Home renderHome={renderHome} setHome={setHome} setRSVP={setRSVP} setAbout={setAbout} setFaqs={setFaqs}/>
    } else if (renderRSVP) {
      return <Rsvp/>
    } else if (renderAbout) {
      return <About/>
    } else if (renderFaqs) {
      return <Faqs/>
    }
  }
  return (
    <div>
        <Navigation renderAuthentication={renderAuthentication} setHome={setHome} setRSVP={setRSVP} setAbout={setAbout} setFaqs={setFaqs}/>
       {renderAuthentication()}
       <Footer renderAuthentication={renderAuthentication} setHome={setHome} setRSVP={setRSVP} setAbout={setAbout} setFaqs={setFaqs}/>
       <div class="subfooter">Designed and Built By Chris Woodby</div>
    </div>
  )
}

export default Main;
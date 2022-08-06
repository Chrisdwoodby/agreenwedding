import React, {useState} from "react";
import Navigation from "./Navigation.jsx";
import About from "./About.jsx";
import Home from "./Home.jsx";
import Rsvp from "./Rsvp.jsx";
import Footer from "./Footer.jsx";

const Main = function(props) {
  const [renderHome, setHome] = useState(true);
  const [renderRSVP, setRSVP] = useState(false);
  const [renderAbout, setAbout] = useState(false);

  const renderAuthentication = function() {
    if (renderHome) {
      return <Home setRSVP={setRSVP}/>
    } else if (renderRSVP) {
      return <Rsvp/>
    } else if (renderAbout) {
     return <About/>
    }
  }
  return (
    <div>
        <Navigation renderAuthentication={renderAuthentication} setHome={setHome} setRSVP={setRSVP} setAbout={setAbout}/>
       {renderAuthentication()}
       <Footer/>
       <div class="subfooter">Designed and Built By CDW Studios 2022</div>
    </div>
  )
}

export default Main;
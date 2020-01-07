import React from 'react';
import Buttons from '../components/button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faFacebook, faTwitter, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

let footerStyle = {
  backgroundColor: "#293039",
  opacity: "98%",
  height: "14rem",
  paddingLeft: "0rem",
  paddingRight: "0rem"
};

let navStyle = {
  height: "8.5rem",
  width: "100%"
};

let idStyle = {
  height: "5.5rem",
  width: "100%",
  backgroundColor: "black"
}

let copyStyle = {
  color: "white",
  marginLeft: "2rem"
}

let smStyle = {
  marginRight: "2rem"
}

let navFooterStyle = {
  marginLeft: "2rem"
}

class Footer extends React.Component{
  render(){
    return(
      <div className="container-fluid d-flex flex-column" style={footerStyle}>
        <div className="d-flex align-items-center justify-content-between" style={navStyle}>
          <nav style={navFooterStyle}>
            <span className="navFooterItems">Home</span>
            <span className="navFooterItems">Features</span>
            <span className="navFooterItems">About</span>
            <span className="navFooterItems">Contact</span>
            <span className="navFooterItems">Terms of Service</span>
          </nav>
          <Buttons addClass="navButton homeButton-L" link="/signup" text="Get started"/>
        </div>

        <div className="d-flex justify-content-between align-items-center" style={idStyle}>
          <div style={copyStyle}>
            <span>&copy; Made by James</span>
          </div>

          <div style={smStyle}>
            <FontAwesomeIcon className="brands" icon={faGithub}/>
            <FontAwesomeIcon className="brands" icon={faLinkedinIn}/>
            <FontAwesomeIcon className="brands" icon={faFacebook}/>
            <FontAwesomeIcon className="brands" icon={faTwitter}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;

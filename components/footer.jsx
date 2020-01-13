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
};

let copyStyle = {
  color: "white",
  marginLeft: "2rem"
};

let smStyle = {
  marginRight: "2rem"
};

let navFooterStyle = {
  marginLeft: "2rem"
};

let navFooterStyleMb = {
  marginLeft: "1.5rem"
};

let footerMb = {
  backgroundColor: "#293039",
  opacity: "98%",
  height: "10rem",
  paddingLeft: "0rem",
  paddingRight: "0rem"
};

let idStyleMb = {
  height: "4rem",
  width: "100%",
  backgroundColor: "black"
};

let copyStyleMb = {
  color: "white",
  marginLeft: "1.5rem"
};

let smStyleMb = {
  marginRight: "1rem"
};

class Footer extends React.Component{
 
  constructor(props){
    super(props);
    this.state = {
      screenWidth: 1000,
    }
  }

  componentDidMount(){
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize(){
    let curWidth = window.innerWidth;
    if (curWidth !== this.state.screenWidth) {
        this.setState({screenWidth:curWidth});
    }
  }

  render(){

    let isMobile = (this.state.screenWidth <= 720);

    if (isMobile !== true){
      return(
        <div className="footbar container-fluid d-flex flex-column" style={footerStyle}>
          <div className="d-flex align-items-center justify-content-between" style={navStyle}>
            <nav style={navFooterStyle}>
              <a className="noTextDecor" href="/index"><span className="navFooterItems">Home</span></a>
              <a className="noTextDecor" href="#features"><span className="navFooterItems">Features</span></a>
              <a className="noTextDecor"><span className="navFooterItems">About</span></a>
              <a className="noTextDecor" href="/contact"><span className="navFooterItems">Contact</span></a>
              <a className="noTextDecor"><span className="navFooterItems">Terms of Service</span></a>
            </nav>
            <Buttons addClass="navButton homeButton-L" link="/signup" text="Get started"/>
          </div>
  
          <div className="footbar d-flex justify-content-between align-items-center" style={idStyle}>
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
    } else {
      return(
        <div className="footbar container-fluid d-flex flex-column" style={footerMb}>
          <div className="d-flex align-items-center justify-content-between" style={navStyle}>
            <nav style={navFooterStyleMb}>
              <a className="noTextDecor" href="/index"><span className="navFooterItemsMb">Home</span></a>
              <a className="noTextDecor" href="#features"><span className="navFooterItemsMb">Features</span></a>
              <a className="noTextDecor"><span className="navFooterItemsMb">About</span></a>
              <a className="noTextDecor" href="/contact"><span className="navFooterItemsMb">Contact</span></a>
              <a className="noTextDecor"><span className="navFooterItemsMb">Terms of Service</span></a>
            </nav>
            <Buttons addClass="navButtonMb homeButton-L" link="/signup" text="Get started"/>
          </div>
  
          <div className="d-flex justify-content-between align-items-center" style={idStyleMb}>
            <div style={copyStyleMb}>
              <span>&copy; Made by James</span>
            </div>
  
            <div style={smStyleMb}>
              <FontAwesomeIcon className="brandsMb" icon={faGithub}/>
              <FontAwesomeIcon className="brandsMb" icon={faLinkedinIn}/>
              <FontAwesomeIcon className="brandsMb" icon={faFacebook}/>
              <FontAwesomeIcon className="brandsMb" icon={faTwitter}/>
            </div>
          </div>
        </div>
      );
    }
    
  }
}

export default Footer;

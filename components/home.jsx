import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import Buttons from '../components/button';

let bgImgStyle = {
  position: "relative",
  right: "3rem",
  marginTop: "8rem",
  height: "41rem",
};

let ctaStyle = {
  marginTop: "12.5rem",
  textAlign: "center",
  width: "35rem"
};


class Home extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      screenWidth: 1400
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
        <div className="container-fluid d-flex">
          <div className="container" style={ctaStyle}>
            <h1 className="h1Style"><center>Manage your day in one app</center></h1>
            <p className="pStyle"><center>The only app you needs today, tomorrow, and every days after</center></p>
            <Buttons className="buttonCta" link="/signup" text="Sign me up"/>
          </div>
          <div className="bgImage">
            <img src="/images/home-image.png" alt="Background image" style={bgImgStyle}/>
          </div>
        </div>
      );
    } else {
      return(
        <p>Work in progress</p>
      );
    }
    
  }
}

export default Home;

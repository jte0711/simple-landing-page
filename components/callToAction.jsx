import React from 'react';
import Buttons from '../components/button';

let featuresStyle = {
  marginTop: "3rem",
  marginBottom: "4.5rem"
};

let headStyle = {
  marginTop: "3rem"
}

let featuresStyleMb = {
  marginTop: "2rem",
  marginBottom: "3rem"
};

let headStyleMb = {
  marginTop: "0.5rem"
}

class CallToAction extends React.Component{
  
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
        <div className="container-fluid d-flex flex-column align-items-center" style={featuresStyle}>
          <hr className="hrStyle"/>
          <h1 className="h1Style" align="center" style={headStyle}>One app to manage all. <br/> Join us now.</h1>
          <Buttons addClass="buttonCta homeButton-L" link="/signup" text="Get started"/>
        </div>
      );
    } else {
      return(
        <div className="container-fluid d-flex flex-column align-items-center" style={featuresStyleMb}>
          <hr className="hrStyle"/>
          <h1 className="h1Style" align="center" style={headStyleMb}>One app to manage all. <br/> Join us now.</h1>
          <Buttons addClass="buttonCta homeButton-L" link="/signup" text="Get started"/>
        </div>
      );
    }
    
  }
}

export default CallToAction;

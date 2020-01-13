import React from 'react';
import Buttons from '../components/button';
import NameForm from '../components/form';

let contentStyle = {
  height: "56rem",
  marginTop: "7.3rem"
};

let textStyle = {
  marginTop: "2.8rem",
  marginLeft: "2rem"
};

let bgImgStyle = {
  marginTop: "3.5rem"
};

let contentStyleMb = {
  height: "56rem",
  marginTop: "2rem"
};

class ContactContent extends React.Component{

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
        <div className="content container-fluid" style={contentStyle}>
          <div className="row" style={{height: "100%"}}>
            <div className="col-md" style={textStyle}>
              <div>
                <h1>GREETINGS</h1>
                <p>I'm James, this is my first landing page that I made from React. Please feel free to give me feedback about this
                landing page, be it from the design or the code.</p>
                {/* <p>We are still working on the app, in the meantime you can subscribe to us 
                and be the first to get notification when the app launched</p> */}
              </div>
              <div style={bgImgStyle}>
                <img src="images/bgImgPeopleWalking.png"/>
              </div>
            </div>
  
            <div className="col-md d-flex justify-content-center">
              <NameForm isMobile={isMobile}/>
            </div>
            
          </div>
         
        </div>
      );
    } else {
      return(
        <div className="content container-fluid" style={contentStyleMb}>
         <div className="d-flex flex-column align-items-center">
            <h1 style={{fontSize: "2rem", marginBottom: "1rem"}}>GREETINGS</h1>
            <p style={{fontSize: "1.2rem", maxWidth: "34rem"}}>I'm James, this is my first landing page that I made from React. Please feel free to give me feedback about this
            landing page, be it from the design or the code.</p>
            {/* <p>We are still working on the app, in the meantime you can subscribe to us 
            and be the first to get notification when the app launched</p> */}
            <div className="d-flex justify-content-center">
              <NameForm isMobile={isMobile}/>
            </div>
          </div>
        </div>
      );
    }
    
  }
}

export default ContactContent;

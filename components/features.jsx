import React from 'react';
import FeatureBox from "./featureBox";

let featuresStyle = {
  marginTop: "8rem",
};

let h1Style = {
  margin: "2.5rem auto 0 auto"
}

let pStyle = {
  maxWidth: "60rem",
}

let contentBox = {
  marginTop: "7.8rem",
  marginBottom: "1rem"
}

let contentBoxMb = {
  marginTop: "1.5rem",
  marginBottom: "1rem"
}

let h1MbStyle = {
  marginTop: "1.5rem",
  marginBottom: "-0.5rem"
}

class Features extends React.Component{
  
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
          <h1 className="h1Style" style={h1Style}>All-in-one apps</h1>
          <p className="pStyle" style={pStyle} align="center">Our application give you the best experience for all the features in. That’s including our to do list. 
          Unlike other to do list, it will give you  something different each cards you make and done</p>
          <div className="container-fluid" style={contentBox}>
  
            <div className="row d-flex justify-content-center rowComp">
              <FeatureBox isMobile={isMobile} imgSrc="images/clipboard.svg" alt="To do list illustration" title="To do list">Manage your busy day and write down your priorities with  a to do list </FeatureBox>
              <div className="betweenPad"></div>
              <FeatureBox isMobile={isMobile} imgSrc="images/calendar.svg" alt="Calendar illustration" title="Calendar">Manage your schedule and activities with a calendar that integrates with other functions </FeatureBox>
            </div>
  
            <div className="row d-flex justify-content-center rowComp">
              <FeatureBox isMobile={isMobile} imgSrc="images/weather.svg" alt="Weather illustration" title="Weather Forecast">Manage your busy day and write down your priorities with  a to do list </FeatureBox>
              <div className="betweenPad"></div>
              <FeatureBox isMobile={isMobile} imgSrc="images/events.svg" alt="Reminder illustration" title="Reminder">Manage your schedule and activities with a calendar that integrates with other functions </FeatureBox>
            </div>
  
          </div>
        </div>
      );
    } else {
      return(
        <div className="container-fluid d-flex flex-column align-items-center">
          <hr className="hrStyle-Mb"/>
          <h1 className="h1StyleMb" style={h1MbStyle}>All-in-one apps</h1>
          <p className="pStyleMb" style={pStyle} align="center">Our application give you the best experience for all the features in. That’s including our to do list. 
          Unlike other to do list, it will give you  something different each cards you make and done</p>
          
          <div className="container-fluid" style={contentBoxMb}>
            <div className="d-flex flex-column align-items-center">
              <FeatureBox isMobile={isMobile} imgSrc="images/clipboard.svg" alt="To do list illustration" title="To do list">Manage your busy day and write down your priorities with  a to do list </FeatureBox>`
              <div className="betweenPad"></div>
              <FeatureBox isMobile={isMobile} imgSrc="images/calendar.svg" alt="Calendar illustration" title="Calendar">Manage your schedule and activities with a calendar that integrates with other functions </FeatureBox>`
              <FeatureBox isMobile={isMobile} imgSrc="images/weather.svg" alt="Weather illustration" title="Weather Forecast">Manage your busy day and write down your priorities with  a to do list </FeatureBox>
              <div className="betweenPad"></div>
              <FeatureBox isMobile={isMobile} imgSrc="images/events.svg" alt="Reminder illustration" title="Reminder">Manage your schedule and activities with a calendar that integrates with other functions </FeatureBox>
            </div>

            <div className="row d-flex justify-content-center rowComp">
              </div>

          </div>
        </div>
      );
    }
    
  }
}

export default Features;

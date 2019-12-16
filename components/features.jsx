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


class Features extends React.Component{
  render(){
    return(
      <div className="container-fluid d-flex flex-column align-items-center" style={featuresStyle}>
        <hr className="hrStyle"/>
        <h1 className="h1Style" style={h1Style}>All-in-one apps</h1>
        <p className="pStyle" style={pStyle} align="center">Our application give you the best experience for all the features in. That’s including our to do list. 
        Unlike other to do list, it will give you  something different each cards you make and done</p>
        <div className="container-fluid" style={contentBox}>

          <div className="row d-flex justify-content-center rowComp">
            <FeatureBox imgSrc="images/clipboard.svg" alt="To do list illustration" title="To do list">Manage your busy day and write down your priorities with  a to do list </FeatureBox>
            <div className="betweenPad"></div>
            <FeatureBox imgSrc="images/calendar.svg" alt="Calendar illustration" title="Calendar">Manage your schedule and activities with a calendar that integrates with other functions </FeatureBox>
          </div>

          <div className="row d-flex justify-content-center rowComp">
            <FeatureBox imgSrc="images/weather.svg" alt="Weather illustration" title="Weather Forecast">Manage your busy day and write down your priorities with  a to do list </FeatureBox>
            <div className="betweenPad"></div>
            <FeatureBox imgSrc="images/events.svg" alt="Reminder illustration" title="Reminder">Manage your schedule and activities with a calendar that integrates with other functions </FeatureBox>
          </div>

        </div>
      </div>
    );
  }
}

export default Features;

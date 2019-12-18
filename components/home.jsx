import React from 'react';
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
  render(){
    return(
      <div className="container-fluid d-flex">
        <div className="container" style={ctaStyle}>
          <h1 className="h1Style"><center>Manage your day in one app</center></h1>
          <p className="pStyle"><center>The only app you needs today, tomorrow, and every days after</center></p>
          <Buttons className="buttonCta" text="Sign me up"/>
        </div>
        <div className="bgImage">
          <img src="/images/home-image.png" alt="Background image" style={bgImgStyle}/>
        </div>
      </div>
    );
  }
}

export default Home;

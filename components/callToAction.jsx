import React from 'react';
import Buttons from '../components/button';

let featuresStyle = {
  marginTop: "3rem",
  marginBottom: "4.5rem"
};

let headStyle = {
  marginTop: "3rem"
}

class CallToAction extends React.Component{
  render(){
    return(
      <div className="container-fluid d-flex flex-column align-items-center" style={featuresStyle}>
        <hr className="hrStyle"/>
        <h1 className="h1Style" align="center" style={headStyle}>One app to manage all. <br/> Join us now.</h1>
        <Buttons addClass="buttonCta" link="/signup" text="Get started"/>
      </div>
    );
  }
}

export default CallToAction;

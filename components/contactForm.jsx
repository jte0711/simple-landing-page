import React from 'react';
import Buttons from '../components/button';
import NameForm from '../components/form';

let contentStyle = {
  height: "56rem",
  marginTop: "7.3rem"
}

let textStyle = {
  marginTop: "2.8rem",
  marginLeft: "2rem"
}

let bgImgStyle = {
  marginTop: "3.5rem"
}

class ContactPage extends React.Component{
  render(){
    return(

      <div className="container-fluid" style={contentStyle}>
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
            <NameForm/>
          </div>
          
        </div>
       
      </div>
    );
  }
}

export default ContactPage;

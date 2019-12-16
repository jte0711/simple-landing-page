import React from 'react';
import { Button } from 'reactstrap';

let buttonStyle = {
  marginTop: "1.3rem",
  width: "8.5rem",
  height: "3.375rem",
  borderRadius: "15px",
  fontSize: "1.075rem",
  backgroundColor: "#38D39F",
  borderColor: "#38D39F",
  color: "black"
};

class Buttons extends React.Component{
  render(){
    return(
      <Button color="primary" style={buttonStyle}>Sign me up</Button>
    );
  }
}

export default Buttons;

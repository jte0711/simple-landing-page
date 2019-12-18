import React from 'react';
import { Button } from 'reactstrap';

let buttonStyle = {
  // marginTop: "1.3rem",
  width: "8.7rem",
  height: "3.575rem",
  borderRadius: "15px",
  fontSize: "1.2rem",
  backgroundColor: "#38D39F",
  borderColor: "#38D39F",
  opacity: "95%",
  color: "black"
};

class Buttons extends React.Component{

  constructor(props){
    super(props);  
  }

  render(){
    return(
      <Button className={this.props.addClass} color="primary" style={buttonStyle}>{this.props.text}</Button>
    );
  }
}

export default Buttons;

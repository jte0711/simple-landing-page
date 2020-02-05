import React from 'react';
import { Button } from 'reactstrap';

let buttonStyle = {
  // marginTop: "1.3rem",
  // padding: "1rem 1.7rem",
  borderRadius: "15px",
  fontSize: "1.2rem",
  backgroundColor: "#38D39F",
  borderColor: "#38D39F",
  opacity: "95%",
  color: "black"
  // width: "10rem"
};

class Buttons extends React.Component{

  constructor(props){
    super(props);  
    this.link = this.props.link;
  }

  render(){
    
    if (this.link != null){
      return <Button className={this.props.addClass} href={this.link} size="lg" color="primary" style={buttonStyle}>{this.props.text}</Button>;
      // return <Button className={this.props.addClass} href={this.link} color="primary" style={buttonStyle}>{this.props.text}</Button>;
    } else {
      return <Button className={this.props.addClass} color="primary" style={buttonStyle}>{this.props.text}</Button>;
    }

  }
}

export default Buttons;

import React from 'react';

let iconStyle = {
  height: "6.5rem",
  width: "6.5rem"
}

class FeatureBox extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      imgSrc: this.props.imgSrc,
      imgAlt: this.props.alt,
      title: this.props.title,
      description: this.props.children
    }
  }

  render(){

    if (this.props.isMobile !== true){
      return(
        <div className="featBox d-flex align-items-center">
          <div className="iconBox">
            <img src={this.state.imgSrc} alt={this.state.imgAlt} style={iconStyle}/>
          </div>
          <div className="textBox d-flex align-items-center flex-column">
            <h3>{this.state.title}</h3>
            <p className="descStyle" align="center">{this.state.description}</p>
          </div>
        </div>
      );
    } else {
      return(
        <div className="d-flex justify-content-center align-items-center" styles={{height: "6rem"}}> 
          <div className="iconBoxMb">
            <img src={this.state.imgSrc} alt={this.state.imgAlt} style={iconStyle}/>
          </div>
          <div className="textBoxMb d-flex align-items-center flex-column">
            <h3>{this.state.title}</h3>
            <p className="descStyle" align="center">{this.state.description}</p>
          </div>
        </div>
      );
    }    
  }
}

export default FeatureBox;

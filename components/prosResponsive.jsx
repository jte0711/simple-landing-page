import React from 'react';

let featuresStyle = {
  marginTop: "3rem",
};

let h1Style = {
  margin: "2.5rem 0 5rem 0",
  maxWidth: "45rem"
}

let contentBox = {
  width: "80%"
}

let imgStyle = {
  height: "28rem"
}

let h1StyleMb = {
  margin: "0.5rem 0 1.5rem 0"
}

class PageResponsive extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      description: this.props.children,
      title: this.props.title,
      titleAlign: this.props.titleAlign,
      imgSrc: this.props.imgSrc,
      imgAlt: this.props.imgAlt,
      screenWidth: 1000
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

    if (this.state.titleAlign == "right"){
      h1Style = {
        margin: "2.5rem 0 7rem 0",
        maxWidth: "45rem",
        textAlign: "right"
      }
    }

    let isMobile = (this.state.screenWidth <= 720);

    if (isMobile !== true){
      return(
        <div className="container-fluid d-flex flex-column align-items-center" style={featuresStyle}>
          <hr className="hrStyle"/>
          <div style={contentBox}>
            <h1 className="h1Style" style={h1Style}>{this.state.title}</h1>
            <div className="d-flex">
              <div>
                <img src={this.state.imgSrc} alt={this.state.imgAlt} style={imgStyle}></img>
              </div>
              <p style={{marginLeft: "2.5rem", fontSize: "1.5rem"}}>{this.state.description}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div className="container-fluid d-flex flex-column align-items-center" style={featuresStyle}>
          <hr className="hrStyle"/>
          <div className="d-flex flex-column align-items-center" style={contentBox}>
            <h1 className="h1Style" style={h1StyleMb}>{this.state.title}</h1>
            <p style={{fontSize: "1.5rem", marginBottom: "1.5rem"}}>{this.state.description}</p>
            <div>
              <img src={this.state.imgSrc} alt={this.state.imgAlt} style={imgStyle}></img>
            </div>
          </div>
        </div>
      );
    }
   
  }
}

export default PageResponsive;

import React from 'react';

let formStyle = {
  // marginTop: "2.8rem"
  width: "20rem",
  marginTop: "1rem"
}

let contentStyle = {
  marginTop: "5rem",
  height: "38rem"
}

let bgImgStyle = {
  position: "relative",
  right: "3rem",
  marginTop: "8rem",
  height: "20rem",
};

let buttonStyle = {
  width: "100%",
  height: "3.575rem",
  borderRadius: "15px",
  fontSize: "1.2rem",
  backgroundColor: "#38D39F",
  borderColor: "#38D39F",
  opacity: "95%",
  color: "black",
};

let labelStyle = {
  fontSize: "2rem",
  fontWeight: "bold"
}

class SubsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {

    if (event.target.id == "inputName"){
      this.setState({nameValue: event.target.value});
    } else if (event.target.id == "inputEmail"){
      this.setState({emailValue: event.target.value});
    } else if (event.target.id == "inputText"){
      this.setState({messageValue: event.target.value});
    }
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.nameValue + " " + this.state.emailValue + " " + this.state.messageValue);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container-fluid" style={contentStyle}>
        <div className="row">
          <div className="col d-flex flex-column align-items-center justify-content-center" style={{marginTop: "12rem",}}>
            <h1 style={labelStyle}>Subscribe to get updates</h1>
            <form id="contactForm" onSubmit={this.handleSubmit} className="form-submit" style={formStyle}>
              {/* <label className="formLabel" style={labelStyle}>Subscribe to get updates</label> */}
              <input type="email" value={this.state.emailValue} onChange={this.handleChange} id="inputEmail" className="form-control formInput" placeholder="Write your email here" required="" autoFocus=""/>
              <input className="btn btn-primary" type="submit" value="Submit" style={buttonStyle}/>
            </form>
          </div>
          <div className="col">
            <div className="bgImage">
              <img src="/images/undraw_online_ad_mg4t.svg" alt="Background image" style={bgImgStyle}/>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default SubsForm;
import React from 'react';

let formStyle = {
  // marginTop: "2.8rem"
  marginTop: "12rem",
  width: "80%"
}

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

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nameValue: '',
      emailValue: '',
      messageValue: ''
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
      <form id="contactForm" onSubmit={this.handleSubmit} className="form-submit" style={formStyle}>
        <label className="formLabel">Your Name</label>
        <input type="text" value={this.state.nameValue} onChange={this.handleChange} id="inputName" className="form-control formInput" placeholder="Write your name here" required="" autoFocus=""/>
        <label className="formLabel">Email</label>
        <input type="email" value={this.state.emailValue} onChange={this.handleChange} id="inputEmail" className="form-control formInput" placeholder="Enter your email here" required="" autoFocus=""/>
        <label className="formLabel">Your Message</label>
        <textarea value={this.state.messageValue} onChange={this.handleChange} className="form-control formInput" form="contactForm" id="inputText" placeholder="Write your message here" name="inputMessage" rows="4" cols="15"></textarea>
        <input className="btn btn-primary" type="submit" value="Submit" style={buttonStyle}/>
      </form>
    );
  }
}

export default NameForm;
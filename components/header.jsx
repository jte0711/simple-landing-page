import React from 'react';
import Link from 'next/link';

let logoStyle = {
  margin: "1.5rem 2rem",
};

let spanStyle = {
  margin: "1.5rem -0.5rem"
}

let navStyle = {
  marginBottom: "-7.5rem",
}

class NavHead extends React.Component{
  render(){
    return(
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-between" style={navStyle}>
        <a className="navbar-brand d-flex" href="/index">
          <img style={logoStyle} src="images/laptop.svg" width="30" height="30" className="d-inline-block align-top" alt="logo"/>
          <span style={spanStyle}>Dayday</span>
        </a>
        <div id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Features <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">About</a>
            <a className="nav-item nav-link" href="/contact">
                Contact
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavHead;

import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

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

  constructor(props){
    super(props);
    this.state = {
      screenWidth: 1000,
      collapse: false
    }
    this.toggleNavbar = this.toggleNavbar.bind(this);
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

  toggleNavbar(event){
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render(){

    let isMobile = (this.state.screenWidth <= 720);

    if (isMobile !== true){
      return(
        <nav className="navbar navbar-expand-sm navbar-light d-flex justify-content-between" style={navStyle}>
          <a className="navbar-brand d-flex" href="/index">
            <img style={logoStyle} src="images/laptop.svg" width="30" height="30" className="d-inline-block align-top" alt="logo"/>
            <span style={spanStyle}>Dayday</span>
          </a>
          <div id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-item nav-link active" href="#features">Features <span className="sr-only">(current)</span></a>
              <a className="nav-item nav-link" href="#">About</a>
              <a className="nav-item nav-link" href="/contact">
                  Contact
              </a>
            </div>
          </div>
        </nav>
      );
    } else {
      return(
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">
              <img style={logoStyle} src="images/laptop.svg" width="35" height="35" className="d-inline-block align-top" alt="logo"/>
              <span style={spanStyle}>Dayday</span>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse isOpen={this.state.collapse} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/index" className="collapseItem">Features</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/index" className="collapseItem">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/contact" className="collapseItem">Contact</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
    
  }
}

export default NavHead;

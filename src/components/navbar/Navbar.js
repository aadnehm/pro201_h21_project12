import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import "./navbar.css";
import { NavbarSearch } from "./NavbarSearch";

class NavbarComponent extends React.Component {
  render() {
    return (
      <Navbar
        className="navbar"
        fixed="top"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Navbar.Brand href="/">
          <img
            className="logo"
            src="./img/MI-logo-white.png"
            alt="Meliora impacts logo"
          ></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link classname="home-link" href="/">
              Home
            </Nav.Link>
            <NavbarSearch />

            <Nav.Link href="/nonprofits">Overview</Nav.Link>
            <Nav.Link href="/choose-subscription">Subscribe</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link className="account-link" href="/">
              My account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;

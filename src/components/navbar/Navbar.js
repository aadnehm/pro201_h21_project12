import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

class NavbarComponent extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" sticky="top" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img src="./img/MI-logo-white.png" alt="Meliora impacts logo"></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/nonprofits">Overview</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComponent;

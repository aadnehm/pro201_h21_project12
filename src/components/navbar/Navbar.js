import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Navbar.css";

class NavbarComponent extends React.Component {
  render() {
    return (
      <Navbar className="navbar" variant="dark" sticky="top" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="./img/MI-logo-white.png"
              alt="bilde av Meliora impact logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link classname="nav-link" href="/">
                Home
              </Nav.Link>
              <Nav.Link classname="nav-link" href="/nonprofits">
                Overview
              </Nav.Link>
              <Nav.Link classname="nav-link" href="/##">
                About us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComponent;

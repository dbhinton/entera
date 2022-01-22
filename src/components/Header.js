import React from "react";
import { Container, Nav, Navbar, Image } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export default function Header() {
  return (
    <>
      <Navbar bg="light" expand="lg" collapseOnSelect fixed="top">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              {" "}
              <Image
                width={85}
                src="https://i.imgur.com/WCpoBQc.png"
                fluid
                rounded
              />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="https://www.metmuseum.org/">
                <i className="fas fa-cogs"></i> Resources
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      );
    </>
  );
}

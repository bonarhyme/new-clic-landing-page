import Image from "next/image";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { appData } from "../../variables/data";

const ClikNav = () => {
  return (
    <Navbar bg="bg-pink" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="#home">
          <Image
            src={appData.logo}
            alt={`${appData.companyName} Logo`}
            width={100}
            height={50}
            objectFit="contain"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ph-5-lg">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Why?</Nav.Link>
            <Nav.Link href="#link">Product</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Language" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ClikNav;

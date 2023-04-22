import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function NavbarComponent() {
  const location = useLocation();
  const locationPathname = location.pathname;
  const [headerBgOpaque, setHeaderBgOpaque] = useState(false);
  const [atHome, setAtHome] = useState();

  useEffect(() => {
    // execute on location change
    console.log("Location changed!", locationPathname);
    if (locationPathname !== "/") {
      setAtHome(false);
      console.log("Location not home", locationPathname);
      setHeaderBgOpaque(true);
      window.removeEventListener("scroll", changeColor);
    } else {
      // At home
      setAtHome(true);
      console.log("Location home", locationPathname);
      setHeaderBgOpaque(false);
      window.addEventListener("scroll", changeColor);
    }
  }, [location]);

  // Change navbar color while scrolling
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setHeaderBgOpaque(true);
    } else {
      setHeaderBgOpaque(false);
    }
  };

  return (
    <Navbar
      style={{ backgroundColor: headerBgOpaque }}
      className={headerBgOpaque ? "header-bg-scrolling" : "header-bg"}
      variant="dark"
      expand="lg"
      scrolling="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href={atHome ? "#home" : "/"}>Uras Oran</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" align="end">
          <Nav className="ml-auto">
            <Nav.Link href="/#about">About</Nav.Link>
            <Nav.Link href="/#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/#contact">Contact</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavbarComponent;

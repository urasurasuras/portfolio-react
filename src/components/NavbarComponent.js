import React, { useRef, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";
import { Endpoints } from "../variables/Endpoints";

function NavbarComponent() {
  // Get location
  const location = useLocation();
  const locationPathname = location.pathname;

  // Initialize navbar opacity
  const [headerBgOpacity, setHeaderBgOpacity] = useState(
    "header-bg-fadeToTransparent"
  );

  const [atHome, setAtHome] = useState();

  // Execute on location change
  useEffect(() => {
    navbarStyleBehavior();
  }, [location]);

  function toggleNavbarColor(opaque) {
    if (opaque) {
      setHeaderBgOpacity("header-bg-fadeToOpaque");
    } else {
      setHeaderBgOpacity("header-bg-fadeToTransparent");
    }
  }

  // Toggle navbar color while scrolling
  function navbarScrollColorHandler() {
    if (window.scrollY >= 90) {
      toggleNavbarColor(true);
    } else {
      toggleNavbarColor(false);
    }
  }

  // If mobile, then toggle bg color on collapse toggle
  const [navbarMobileTogggle, setNavbarMobileTogggle] = useState(true);
  function mobileNavbarToggleHandler() {
    toggleNavbarColor(navbarMobileTogggle);
    setNavbarMobileTogggle(!navbarMobileTogggle);
  }

  // Change navbar bg behavior based on location
  function navbarStyleBehavior() {
    if (locationPathname !== "/") {
      // If I'm not at home, set the navbar to allways be solid
      setAtHome(false);
      console.log("Location not home", locationPathname);
      setHeaderBgOpacity("header-bg-solidOpaque");
      window.removeEventListener("scroll", navbarScrollColorHandler);
    } else {
      // At home
      setAtHome(true);
      console.log("Location home", locationPathname);
      navbarScrollColorHandler();
      window.addEventListener("scroll", navbarScrollColorHandler);
    }
  }

  return (
    <Navbar
      // If at home toggle navbar color on collapse toggle
      onToggle={atHome ? mobileNavbarToggleHandler : ""}
      style={{ backgroundColor: headerBgOpacity }}
      className={headerBgOpacity}
      variant="dark"
      expand="lg"
      scrolling="dark"
      fixed="top"
    >
      <Container>
        <Navbar.Brand href={atHome ? "#home" : Endpoints.Home}>
          Uras Oran
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" align="end">
          <Nav className="ml-auto">
            <Nav.Link href={Endpoints.Resume}>Resume</Nav.Link>
            <Nav.Link href={Endpoints.About}>About</Nav.Link>
            <Nav.Link href={Endpoints.Portfolio}>Portfolio</Nav.Link>
            <Nav.Link href={Endpoints.Contact}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

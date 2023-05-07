import React, { useRef, useState, useEffect } from "react";

import { useLocation } from "react-router-dom";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

import "./Navbar.css";
import { Endpoints } from "../variables/Endpoints";
import Badge from "react-bootstrap/Badge";

import { CookiesProvider, useCookies } from "react-cookie";

function NavbarComponent(props) {
  const [cookies, setCookie] = useCookies(["user"]);

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
    console.log(isADropDownExpanded);

    if (window.scrollY >= 90) {
      toggleNavbarColor(true);
    } else {
      if (!isADropDownExpanded) {
        toggleNavbarColor(false);
      }
    }
  }

  // If mobile, then toggle bg color on collapse toggle
  const [navbarMobileTogggle, setNavbarMobileTogggle] = useState(true);
  function mobileNavbarToggleHandler() {
    toggleNavbarColor(navbarMobileTogggle);
    setNavbarMobileTogggle(!navbarMobileTogggle);
  }

  function setBgSolid() {
    setHeaderBgOpacity("header-bg-solidOpaque");
    window.removeEventListener("scroll", navbarScrollColorHandler);
  }
  function setBgVariable() {
    navbarScrollColorHandler();
    window.addEventListener("scroll", navbarScrollColorHandler);
  }
  // Change navbar bg behavior based on location
  function navbarStyleBehavior() {
    if (locationPathname !== "/") {
      // If I'm not at home, set the navbar to allways be solid
      setAtHome(false);
      // console.log("Location not home", locationPathname);
      setBgSolid();
    } else {
      // At home
      setAtHome(true);
      // console.log("Location home", locationPathname);
      setBgVariable();
    }
  }

  const [isADropDownExpanded, setIsADropDownExpanded] = useState(false);
  function handleNavDropdownToggle(isExpanded) {
    // TODO: disable scroll when dropdown is expanded
    // console.log(isExpanded);

    setIsADropDownExpanded(isExpanded);
    if (!atHome) return;
    if (isExpanded) {
      setHeaderBgOpacity("header-bg-fadeToOpaque");
      window.removeEventListener("scroll", navbarScrollColorHandler);
    } else {
      setHeaderBgOpacity("header-bg-fadeToTransparent");
      window.addEventListener("scroll", navbarScrollColorHandler);
    }
  }

  let newBadgeContent = (
    <Badge pill bg="danger">
      NEW!
    </Badge>
  );
  // console.log(cookies.NewBadgeInd); // TODO: on page reload instead
  if (cookies.NewBadgeInd === "false") {
    newBadgeContent = "";
  }

  const handleNewBadgeClear = () => {
    setCookie("NewBadgeInd", true);
  };
  const handleNewBadgeMake = () => {
    setCookie("NewBadgeInd", false);
  };
  // console.log(newBadgeContent);
  // console.log(newBadge.newBadge.newBadge.newBadge);
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
            {/* <Nav.Link href={Endpoints.About}>About</Nav.Link> */}
            {/* <Button onClick={handleNewBadgeClear}>Clear</Button>
            <Button onClick={handleNewBadgeMake}>Put</Button> */}

            <NavDropdown
              title="Demos"
              id="basic-nav-dropdown"
              className="basic-nav-dropdown"
              onToggle={handleNavDropdownToggle}
            >
              <Nav.Link href={Endpoints.Demo}>
                Expenses App {newBadgeContent}
              </Nav.Link>
              <Nav.Link href={Endpoints.PersistentCounter}>
                Persistent Counter {newBadgeContent}
              </Nav.Link>
            </NavDropdown>
            <Nav.Link href={Endpoints.Portfolio}>Portfolio</Nav.Link>
            <Nav.Link href={Endpoints.ResumeSection}>Resume</Nav.Link>
            <Nav.Link href={Endpoints.Contact}>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;

import React, { useRef, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Burgermenu from "./Burgermenu";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

function NavbarComponent() {
  const navRef = useRef();
  const showNavbar = (event) => {
    console.log(event.target.value);
    navRef.current.classList.toggle("collapse");
  };

  // Change navbar color while scrolling
  const [headerBgColor, setHeaderBgColor] = useState('rgba(0 0 0 / 1)');
  const [colorAlpha, setColorAlpha] =useState(0);
  const changeColor = ()=>{
    // setColorAlpha((window.scrollY - 90) /200);
    // console.log(colorAlpha);
    // setHeaderBgColor('rgba(0 0 0 / '+ colorAlpha+')');
    if (window.scrollY >= 90){
      setHeaderBgColor(true);
    }else {
      setHeaderBgColor(false);
    }
  }

  window.addEventListener('scroll', changeColor);
  return (
    <Navbar style={{backgroundColor: headerBgColor}} 
    className={headerBgColor ? 'header-bg-scrolling' :'header-bg'} 
    variant="dark" expand="lg" scrolling="dark" fixed="top">
      <Container >
        <Navbar.Brand href="#home">Uras Oran</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" align="end" >
          <Nav className="ml-auto" >
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
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

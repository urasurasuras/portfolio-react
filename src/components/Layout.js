import React from "react";
import NavbarComponent from "./NavbarComponent";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

export class Layout extends React.Component {
  render() {
    return (
      <div className="App">
        <NavbarComponent />
        <Outlet />
        <Footer />
      </div>
    );
  }
}

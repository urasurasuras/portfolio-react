import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import { Button } from "react-bootstrap";

class NavbarItem extends Component {
  render() {
    return (
      <Nav.Link href={this.props.href}>
        <Button variant="text" color="secondary" size="sm">
          {this.props.title}
        </Button>
      </Nav.Link>
    );
  }
}

export default NavbarItem;

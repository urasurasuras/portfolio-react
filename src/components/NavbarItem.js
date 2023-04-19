import React, { Component } from "react";

class NavbarItem extends Component {
  state = {};
  render() {
    return (
      <li className="nav-item">
        <a className="nav-link js-scroll-trigger" href={this.props.href}>
          {this.props.title}
        </a>
      </li>
    );
  }
}

export default NavbarItem;

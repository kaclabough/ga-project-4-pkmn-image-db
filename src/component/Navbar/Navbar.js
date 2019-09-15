import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/" className="navitem">
            Home
          </Link>
          <Link to="/detect" className="navitem wtp">
            Who's That Pokemon?
          </Link>
          <Link to="/about" className="navitem">
            About
          </Link>
        </nav>
      </div>
    );
  }
}

export default Navbar;

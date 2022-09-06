import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{
          color: "white",
          marginRight: "20px",
          display: "flex",
          gap: "50px",
        }}
      >
        <Navbar.Brand>
          {" "}
          <Link to="/" className="nav-link">
            My Favorite Books
          </Link>
        </Navbar.Brand>
        <NavItem>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/about" className="nav-link">
            About
          </Link>
        </NavItem>
      </Navbar>
    );
  }
}

export default Header;

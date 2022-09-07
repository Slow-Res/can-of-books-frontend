import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import "bootstrap/dist/css/bootstrap.min.css";
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

        <NavItem>
          <LoginButton />
        </NavItem>

        <NavItem>
          <LogoutButton />
        </NavItem>
      </Navbar>
    );
  }
}

export default Header;

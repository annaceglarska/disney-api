import React from "react";
import BootstrapContainer from "react-bootstrap/Container";
import BootstrapNav from "react-bootstrap/Nav";
import BootsrapNavbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <BootsrapNavbar expand="lg" className="bg-body-tertiary">
      <BootstrapContainer>
        <BootsrapNavbar.Brand>Disney App</BootsrapNavbar.Brand>
        <BootsrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootsrapNavbar.Collapse id="basic-navbar-nav">
          <BootstrapNav className="me-auto ">
            <Link className="router-link" to={`/`}>
              Home
            </Link>
            <Link className="router-link" to={`/list`}>
              Character List
            </Link>
          </BootstrapNav>
        </BootsrapNavbar.Collapse>
      </BootstrapContainer>
    </BootsrapNavbar>
  );
}

export default Navbar;

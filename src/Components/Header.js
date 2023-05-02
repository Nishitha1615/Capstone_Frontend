import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, NavLink } from "react-router-dom";
import {useDispatch, useSelector } from "react-redux";
import { signout } from "../actions/auth.actions";


export default function Header() {
  const auth=useSelector(state=>state.auth);
  const dispatch=useDispatch()
  
const logout=()=>
{
  dispatch(signout())
}
  const renderloggedInLink = () => {
    return (
      <Nav>
        {/* <Nav.Link href="#deets">Signin</Nav.Link> */}

        <li className="nav-item">
          <span className="nav-link" onClick={logout}>
            Signout
          </span>
        </li>
      </Nav>
    );
  };

  const renderNonloggedInLink=() => {
    return (
      <Nav>
        {/* <Nav.Link href="#deets">Signin</Nav.Link> */}
        <li className="nav-item">
          <NavLink to="signin" className="nav-link">
            Sgnin
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink to="signup" className="nav-link">
            Signup
          </NavLink>
        </li>
      </Nav>
    );
  }
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        style={{ zIndex: "1" }}
      >
        <Container fluid>
          {/* <Navbar.Brand href="#home">Admin Page</Navbar.Brand> */}
          <Link to="/" className="navbar-brand">
            Admin Page
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/*             
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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

            {auth.aunthenticate ? renderloggedInLink() : renderNonloggedInLink()}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

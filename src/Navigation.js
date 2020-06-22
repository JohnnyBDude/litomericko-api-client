import React from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import CompanyCategoriesDropdown from "./CompanyCategoriesDropdown";

function Navigation() {
  return (
      <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Litomericko API client v0.0.1</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <CompanyCategoriesDropdown/>
                  <Nav.Link href={"/mapa"}>Mapa podniků</Nav.Link>
              </Nav>
              <Form inline>
                  <FormControl type="text" placeholder="Hledej" className="mr-sm-2" />
                  <Button variant="outline-success">Hledej</Button>
              </Form>
          </Navbar.Collapse>
      </Navbar>
  );
}

export default Navigation;

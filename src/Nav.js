import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import React, { Component } from 'react'
import './nav.css';


export default class componentName extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#brand">Dark Rose Club</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="#">
                About
              </NavItem>
              <NavItem eventKey={2} href="#">
                Scheudle
              </NavItem>
              <NavItem eventKey={2} href="#">
                Members Only
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    )
  }
}

import {Navbar, Nav, NavItem, NavDropdown, MenuItem} from 'react-bootstrap'
import React, { Component } from 'react'
import About from './About'
import Contact from './Contact'
import './nav.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";




export default class componentName extends Component {
  render() {
    return (
        <Router>
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/">Dark Rose Club</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              <NavItem eventKey={1} href="/about">
                  About
                </NavItem>
                <NavItem eventKey={2} href="#">
                  Scheudle
                </NavItem>
                <NavItem eventKey={2} href="contact">
                  Contact
                </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
        </Router>
    )
  }
}

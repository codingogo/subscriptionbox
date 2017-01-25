import React from 'react';
import { Button, Navbar, Nav, NavItem } from 'react-bootstrap';

export default () =>
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>Codingo Box
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem>
          <Button>Login</Button>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>;

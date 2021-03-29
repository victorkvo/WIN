import React, { Component } from 'react';
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap';
class Navbars extends Component {
    render() {
        return (
            <div>
<Navbar bg="dark" variant="dark" expand="lg">
<Navbar.Brand href="/">
      <img alt="nice kicks company logo" src="https://i.ibb.co/qDKqsjG/Logo3.jpg" width="250" height="100"/>
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/board">Store</Nav.Link>
      <Nav.Link href="/about">About Us</Nav.Link>
      <NavDropdown title="Products" id="basic-nav-dropdown">
        <NavDropdown.Item href="/board">Shoes</NavDropdown.Item>
        <NavDropdown.Item href="/board">Hats</NavDropdown.Item>
        <NavDropdown.Item href="/board">Jerseys</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/forms">Contact Us</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success" onClick={() => {alert('Search Disabled');}}>Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
            </div>
        )
    }
}
export default Navbars
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">COOKING ⋅⋅ CANVAS ⋅⋅</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#permintaan">Permintaan</Nav.Link>
            <Nav.Link href="#tambah-resep">Tambah Resep</Nav.Link>
            <Nav.Link href="#edit-resep">Edit Resep</Nav.Link>
            <Button variant="outline-dark" className="ms-2">Log Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

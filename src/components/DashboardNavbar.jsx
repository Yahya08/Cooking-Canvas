import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const NavigationBar = () => {
  const [logoutHovered, setLogoutHovered] = useState(false);

  const handleLogoutHover = () => {
    setLogoutHovered(true);
  };

  const handleLogoutLeave = () => {
    setLogoutHovered(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <Navbar.Brand href="#home">
          <img
            src="logo4.svg" // Ubah path/to/logo4.svg sesuai dengan lokasi file SVG Anda
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="COOKING CANVAS logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link href="#permintaan" className="mx-3" style={{ color: '#0F172A' }}>Permintaan</Nav.Link>
            <Nav.Link href="#tambah-resep" className="mx-3" style={{ color: '#0F172A' }}>Tambah Resep</Nav.Link>
            <Nav.Link href="#edit-resep" className="mx-3" style={{ color: '#0F172A' }}>Edit Resep</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          variant="dark"
          className="ms-auto"
          style={{
            color: logoutHovered ? '#ffffff' : '#000000',
            backgroundColor: logoutHovered ? '#000000' : 'transparent',
            border: '1px solid #000000', // Border hitam
            transition: 'background-color 0.3s, color 0.3s' // Transisi warna saat hover
          }}
          onMouseOver={handleLogoutHover}
          onMouseLeave={handleLogoutLeave}
        >
          Log Out
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

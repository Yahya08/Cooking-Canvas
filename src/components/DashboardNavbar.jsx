import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const [logoutHovered, setLogoutHovered] = useState(false);
  const [permintaanClicked, setPermintaanClicked] = useState(false);
  const [tambahResepClicked, setTambahResepClicked] = useState(false);
  const [editResepClicked, setEditResepClicked] = useState(false);

  // Hover state for navigation buttons
  const [permintaanHovered, setPermintaanHovered] = useState(false);
  const [tambahResepHovered, setTambahResepHovered] = useState(false);
  const [editResepHovered, setEditResepHovered] = useState(false);

  const handleLogoutHover = () => {
    setLogoutHovered(true);
  };

  const handleLogoutLeave = () => {
    setLogoutHovered(false);
  };

  const handlePermintaanClick = () => {
    setPermintaanClicked(true);
    setTambahResepClicked(false);
    setEditResepClicked(false);
  };

  const handleTambahResepClick = () => {
    setTambahResepClicked(true);
    setPermintaanClicked(false);
    setEditResepClicked(false);
  };

  const handleEditResepClick = () => {
    setEditResepClicked(true);
    setPermintaanClicked(false);
    setTambahResepClicked(false);
  };

  const handleLogout = () => {
    fetch('function/logout_api.php', {
      method: 'POST',
    })
      .then(response => response.json())
      .then(data => {
        // handle success
        console.log('Logout successful', data);
        // Redirect to the login page or home page after logout
        window.location.href = '/login'; // Adjust the URL as needed
      })
      .catch(error => {
        // handle error
        console.error('Logout failed', error);
      });
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="logo4.svg"
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="COOKING CANVAS logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            <Nav.Link
              as={Link}
              to="/dashboardpermintaanresep"
              className="mx-3"
              style={{
                color: (permintaanClicked || permintaanHovered) ? '#ffffff' : '#0F172A',
                backgroundColor: (permintaanClicked || permintaanHovered) ? '#0F172A' : 'transparent'
              }}
              onClick={handlePermintaanClick}
              onMouseEnter={() => setPermintaanHovered(true)}
              onMouseLeave={() => setPermintaanHovered(false)}
            >
              Permintaan
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboardtambahresep"
              className="mx-3"
              style={{
                color: (tambahResepClicked || tambahResepHovered) ? '#ffffff' : '#0F172A',
                backgroundColor: (tambahResepClicked || tambahResepHovered) ? '#0F172A' : 'transparent'
              }}
              onClick={handleTambahResepClick}
              onMouseEnter={() => setTambahResepHovered(true)}
              onMouseLeave={() => setTambahResepHovered(false)}
            >
              Tambah Resep
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/dashboardeditresep"
              className="mx-3"
              style={{
                color: (editResepClicked || editResepHovered) ? '#ffffff' : '#0F172A',
                backgroundColor: (editResepClicked || editResepHovered) ? '#0F172A' : 'transparent'
              }}
              onClick={handleEditResepClick}
              onMouseEnter={() => setEditResepHovered(true)}
              onMouseLeave={() => setEditResepHovered(false)}
            >
              Edit Resep
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Button
          variant="dark"
          className="ms-auto"
          style={{
            color: logoutHovered ? '#ffffff' : '#000000',
            backgroundColor: logoutHovered ? '#0F172A' : 'transparent',
            border: '1px solid #0F172A',
            transition: 'background-color 0.3s, color 0.3s'
          }}
          onMouseEnter={handleLogoutHover}
          onMouseLeave={handleLogoutLeave}
          onClick={handleLogout}
        >
          Log Out
        </Button>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;

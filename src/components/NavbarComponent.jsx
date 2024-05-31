import{useState, useEffect} from "react";
import{Navbar, Container, Nav} from "react-bootstrap";
import{ navLinks } from "../data/index";
import{ NavLink } from "react-router-dom";
import PropTypes from 'prop-types';

import '../style/Navbar.css'; 

const NavbarComponent = () => {
  const [changeColor, setChangeColor] = useState(false);

  const changeBackgroundColor = () => {
    setChangeColor(window.scrollY > 10);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackgroundColor);
    return () => {
      window.removeEventListener("scroll", changeBackgroundColor);
    };
  }, []);

  const getNavLinkClassName = ({ isActive, isPending }) => 
    isPending ? "nav-link pending" : isActive ? "nav-link active" : "nav-link";

  return (
    <Navbar
      className={`navbar navbar-expand-lg ${
        changeColor ? "color-active" : ""
      }`}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#home" className="fs-3 fw-bold">
          <img src="/logo.jpeg" height="40" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center">
            {navLinks.map((link) => (
              <Nav.Link key={link.id} as="div">
                <NavLink
                  to={link.path}
                  className={getNavLinkClassName}
                  end
                >
                  {link.text}
                </NavLink>
              </Nav.Link>
            ))}
          </Nav>
          {/* <div className="text-center">
            <button className="btn btn-outline-danger rounded-1">
              Join with us
            </button>
          </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

NavbarComponent.propTypes = {
  navLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      path: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired
};
export default NavbarComponent
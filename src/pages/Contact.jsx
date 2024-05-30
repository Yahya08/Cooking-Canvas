
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {   faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import "../style/Contact.css"; // Ensure the path is correct relative to your project structure

function Contact() {
  return (
    <div className="contact-container">
      <Container className="my-5">
        <Row>
          <Col md={8}>
            <h1>Contact Us</h1>
            <p>Kami harus membantu dan menjawab pertanyaan apa pun yang Anda miliki. Kami menantikan kabar dari Anda!</p>
            <ul>
              {/* <li><FontAwesomeIcon icon={faPhone} /> 08123456789</li> */}
              {/* <li><FontAwesomeIcon icon={faEnvelope} /> cookingcanvas@gmail.com</li> */}
              <li><FontAwesomeIcon icon={faInstagram} /> @cookingcanvas</li>
              <li><FontAwesomeIcon icon={faWhatsapp} /> 08123456789 : cooking canvas center</li>
            </ul>
          </Col>


          <Col md={4}>
            <img
              src="https://png.pngtree.com/png-vector/20230726/ourmid/pngtree-coloring-pages-free-kids-printable-teddy-bear-drawing-in-pencil-cartoon-png-image_6746133.png" // Update with the correct path to your image
              alt="Pears"
              className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <div className="white-divider"></div>
      <footer className="footer-section py-4">
        <Container>
          <Row className="d-flex justify-content-between align-items-center text-white py-3">
            <Col md={4} className="d-flex justify-content-start">
              <div>
                <h5>Cooking Canvas</h5>
                <p>© Cooking Canvas 2024 Ltd.</p>
              </div>
            </Col>
            <Col md={4} className="d-flex justify-content-center">
              <div>
                <a href="#" className="text-white me-3">Home</a>
                <a href="#" className="text-white me-3">Product</a>
                <a href="#" className="text-white me-3">About Us</a>
                <a href="#" className="text-white">Contact</a>
              </div>
            </Col>
            <Col md={4} className="d-flex justify-content-end">
              <div>
                <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faFacebook} /> Facebook</a>
                <a href="#" className="text-white me-3"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a>
                <a href="#" className="text-white"><FontAwesomeIcon icon={faInstagram} /> Instagram</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Contact;

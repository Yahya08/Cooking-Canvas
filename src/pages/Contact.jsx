import { Container, Row, Col } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TelephoneFill, EnvelopeFill, Instagram, Whatsapp, Facebook, Linkedin } from 'react-bootstrap-icons';
import '../style/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <Container className="my-5">
        <Row>
          <Col className='conten' md={8}>
            <h1>Contact Us</h1>
            <p>Kami siap membantu dan menjawab pertanyaan apa pun yang Anda miliki. Kami menantikan kabar dari Anda! </p>
            <ul className='icon-text'>
              <li><TelephoneFill /> 08123456789</li>
              <li><EnvelopeFill /> cookingcanvas@gmail.com</li>
              <li><Instagram /> @cookingcanvas</li>
              <li><Whatsapp /> 08123456789 : cooking canvas center</li>
            </ul>
          </Col>
          <Col md={4}>
            <img
              src="https://png.pngtree.com/png-vector/20230726/ourmid/pngtree-coloring-pages-free-kids-printable-teddy-bear-drawing-in-pencil-cartoon-png-image_6746133.png"
              alt="Pears"
              className="img-fluid"
            />
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
                <a href="#" className="text-white me-3"><Facebook /> Facebook</a>
                <a href="#" className="text-white me-3"><Linkedin /> LinkedIn</a>
                <a href="#" className="text-white"><Instagram /> Instagram</a>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Contact;

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { TelephoneFill, EnvelopeFill, Instagram, Whatsapp } from 'react-bootstrap-icons';
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

      <footer className="footer-section py-4" style={{ backgroundColor: '#000', color: '#fff' }}>
      <Container>
        <Row className="align-items-center text-white py-3">
          <Col md={4} className="d-flex align-items-center">

        
            <img src="public/logoheader.png" alt="Cooking Canvas Logo" style={{ height: '50px', marginRight: '10px' }} />
            {/* <h5>COOKING CANVAS</h5> */}
          </Col>
          <Col md={4} className="d-flex justify-content-center">
            <div>
              <a href="/HomePage" className="text-white mx-3">Home</a>
              <a href="/Recipe" className="text-white mx-3">Recipe</a>
              <a href="/Aboutus" className="text-white mx-3">About Us</a>
              <a href="/Contact" className="text-white mx-3">Contact</a>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-end">
            <div>
              <a href="https://www.facebook.com/" className="text-white mx-2"><FontAwesomeIcon icon={faFacebook} /></a>
              <a href="https://www.linkedin.com/" className="text-white mx-2"><FontAwesomeIcon icon={faLinkedin} /></a>
              <a href="https://www.youtube.com/" className="text-white mx-2"><FontAwesomeIcon icon={faYoutube} /></a>
              <a href="https://www.instagram.com/" className="text-white mx-2"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
          </Col>
        </Row>
        <Row className="text-white py-3">
          <Col md={6}>
            <p>© Cooking Canvas 2024 Ltd.</p>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <a href="#" className="text-white">Privacy Policy</a>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Contact;

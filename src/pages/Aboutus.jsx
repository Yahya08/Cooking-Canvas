
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../style/Aboutus.css';

const Aboutus = () => {
  return (
    <div className="aboutus">
      <Container className="my-5">
        <Row>
          <Col md={8}>
            <h1>About us</h1>
            <h3>Nice to meet you</h3>
            <p>
              Selamat datang di Cooking Canvas, situs web yang menjadi tempat bagi para pecinta kuliner untuk menjelajahi dunia resep masakan dan minuman berkualitas tinggi dari berbagai belahan dunia, mulai dari masakan tradisional hingga kreasi modern yang menggugah selera, serta minuman segar dan menyegarkan, mulai dari koktail klasik hingga kreasi minuman sehat yang lezat, di mana setiap resep yang kami sajikan telah melewati proses seleksi ketat dan diversifikasi oleh tim admin berpengalaman kami untuk memastikan hasil masakan yang lezat dan autentik, sehingga Anda dapat menikmati pengalaman memasak yang tak terlupakan baik sebagai koki berpengalaman maupun pemula yang baru memulai perjalanan kuliner.
            </p>
            <p>Selamat memasak dan menikmati!</p>
          </Col>
          <Col md={4}>
            <img
              src="https://png.pngtree.com/png-vector/20230726/ourmid/pngtree-coloring-pages-free-kids-printable-teddy-bear-drawing-in-pencil-cartoon-png-image_6746133.png" // Update with the correct path to your image
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




export default Aboutus;

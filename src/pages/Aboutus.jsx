
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faYoutube} from '@fortawesome/free-brands-svg-icons';
import '../style/Aboutus.css';  // Importing the CSS file using the relative path

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
              src="https://source.unsplash.com/800x600/?cooking" // Update with the correct path to your image
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
}




export default Aboutus;

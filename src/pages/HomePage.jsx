import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import '../style/main.css';  // Assuming you have a CSS file for custom styles


const HomePage = () => {
  return (
    <div>
      <header className="hero-section text-center py-5">
        <Container>
          <h1 className="display-4">COOKING CANVAS</h1>
          <p className="lead">Temukan, bagikan, dan kembangkan kreativitas kuliner Anda!</p>
          <Button href="/signin" className="btn-dark mt-3">Get Started</Button>
        </Container>
      </header>
      <section className="py-5">
        <Container>
        <Row className="d-flex align-items-center mb-5">
            <Col md={6} className="content mb-4">
              <h2>Jelajahi Dunia Kuliner dengan Cooking Canvas!</h2>
              <p>
                Cooking Canvas adalah tempat untuk mengeksplorasi ribuan resep makanan dari seluruh dunia. Temukan resep-resep unik,
                bagikan kreasi Anda sendiri, dan terhubung dengan komunitas pecinta masakan!
              </p>
            </Col>
            <Col md={6} className="mb-4">
            <img src="https://media.istockphoto.com/id/1269869107/id/foto/spaghetti-dan-makanan-bakso.jpg?s=612x612&w=0&k=20&c=uxVEghNP6tizBM320Ej9vtundvjazY6659wqjHI-qsw=" alt="Kuliner" className="image-custom-small" />
            </Col>
          </Row>

          <Row className="d-flex align-items-center mb-5">
            <Col md={6} className=" mb-4">
               <img src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg" alt="Resep" className="image-custom" />
            </Col>
            <Col md={6} className="content mb-4">
              <h2>Resep yang Teruji dan Terpercaya</h2>
              <p>
                Bayangkan Anda bisa dengan mudah membuat hidangan lezat dan minuman segar,
                dengan keyakinan bahwa setiap resep dijamin memuaskan. Baik Anda seorang koki
                berpengalaman maupun pemula di dapur, Cooking Canvas adalah sumber terpercaya
                Anda untuk resep-resep yang dapat diandalkan dan menggugah selera.
              </p>
            </Col>
          </Row>

          <h4 className="heading1">Testimoni</h4>
        <Row>
          <Row className="d-flex align-items mb-5" >
            <Col md={6}  className="mb-5">
              <div className="testimonial">
                <div className="testimonial-icon">👤</div>
                <h5>Dian Sari</h5>
                <p>
                  Cooking Canvas benar-benar mengubah cara saya memasak di rumah.
                  Resep-resepnya selalu berhasil dan rasanya luar biasa! Saya jadi lebih percaya diri di dapur.
                </p>
              </div>
              </Col>

              <Col md={6}  className="mb-5">
              <div className="testimonial">
                <div className="testimonial-icon">👤</div>
                <h6>Rizky Nugraha</h6>
                <p>
                  Sejak menggunakan Cooking Canvas, saya sering mendapat pujian atas masakan saya.
                  Terima kasih telah menyediakan resep-resep yang hebat dan terpercaya.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md={6}  className="mb-4">
              <div className="testimonial">
                <div className="testimonial-icon">👤</div>
                <h5>Lia Kusuma</h5>
                <p>
                  Cooking Canvas adalah penyelamat bagi saya yang sibuk.
                  Resep-resepnya mudah diikuti dan selalu menghasilkan hidangan yang lezat.
                  Sangat direkomendasikan!
                </p>
              </div>
            </Col>

            <Col md={6}  className="mb-4">
              <div className="testimonial">
                <div className="testimonial-icon">👤</div>
                <h6>Andi Pratama</h6>
                <p>
                  Saya sangat menyukai Cooking Canvas! Tidak perlu lagi bingung mencari resep yang enak.
                  Semua resep di sini sudah teruji dan hasilnya selalu memuaskan.
                </p>
              </div>
            </Col>
            
          </Row>
           
          </Row>
        </Container>
      </section>

      <section className="full-height-section text-center py-5">
        <Container>
          <h1 className="display-4">Gabung dan Mulai Memasak!</h1>
          <p className="lead">Bergabunglah dengan komunitas pecinta masak kami hari ini!</p>
          <Button className="btn-dark mt-3" href="/signin">Join Now</Button>
        </Container>
      </section>

      <div className="white-divider"></div>

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
export default HomePage;
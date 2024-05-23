import { Container, Row, Col, Button } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <header className="hero-section text-center py-5">
        <Container>
          <h1 className="display-4">COOKING CANVAS</h1>
          <p className="lead">Temukan, bagikan, dan kembangkan kreativitas kuliner Anda!</p>
          <Button className="btn-dark mt-3">Get Started</Button>
        </Container>
      </header>

      <section className="py-5">
        <Container>
          <Row>
            <Col md={6} className="mb-4">
              <h2>Jelajahi Dunia Kuliner dengan Cooking Canvas!</h2>
              <p>
                Cooking Canvas adalah tempat untuk menemukan dan berbagi resep masakan dari seluruh dunia.
                Jelajahi koleksi resep kami yang terus berkembang dan bagikan kreasi kuliner Anda sendiri!
              </p>
            </Col>
            <Col md={6} className="mb-4">
              <img src="image1.jpg" alt="Kuliner" className="img-fluid" />
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-4">
              <img src="image2.jpg" alt="Resep" className="img-fluid" />
            </Col>
            <Col md={6} className="mb-4">
              <h2>Resep yang Teruji dan Terpercaya</h2>
              <p>
                Bagaimanapun Anda suka dengan masakan siap, kami memiliki resep yang akan memenuhi selera Anda.
                Dari makanan pembuka hingga hidangan penutup, Cooking Canvas menawarkan berbagai macam resep yang 
                telah diuji dan disetujui oleh komunitas kuliner kami.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col md={4} className="mb-4">
              <h4>Dea Sari</h4>
              <p>
                Cooking Canvas adalah tempat terbaik untuk mencari resep-resep yang luar biasa dan mudah diikuti!
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h4>Lila Kusuma</h4>
              <p>
                Saya sangat suka dengan komunitas di sini. Selalu ada resep baru yang menunggu untuk dicoba.
              </p>
            </Col>
            <Col md={4} className="mb-4">
              <h4>Rizky Nugraha</h4>
              <p>
                Sejak bergabung dengan Cooking Canvas, saya selalu menemukan inspirasi baru untuk memasak.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <footer className="footer bg-dark text-white py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>Cooking Canvas</h5>
              <p>© Cooking Canvas 2024 Ltd.</p>
            </Col>
            <Col md={6} className="text-md-end">
              <a href="#" className="text-white me-2">Home</a>
              <a href="#" className="text-white me-2">Product</a>
              <a href="#" className="text-white me-2">About Us</a>
              <a href="#" className="text-white">Contact</a>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col className="text-center">
              <a href="#" className="text-white me-2"><img src="facebook-icon.png" alt="Facebook" height="20"/></a>
              <a href="#" className="text-white me-2"><img src="linkedin-icon.png" alt="LinkedIn" height="20"/></a>
              <a href="#" className="text-white me-2"><img src="instagram-icon.png" alt="Instagram" height="20"/></a>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage
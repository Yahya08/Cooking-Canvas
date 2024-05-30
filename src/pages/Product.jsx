import { Container, Row, Col } from "react-bootstrap";
import '../style/Product.css';  // Assuming you have a CSS file for custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Product = () => {
  return (
  <div>
    <div className="container">
    <section className="popular-recipes">
  <h2>Resep populer</h2>
  <div className="row">
    {[1, 2, 3].map((i) => (
      <div className="col-md-4" key={i}>
        <div className="card small-card">
          <img
            src={`https://png.pngtree.com/png-vector/20230726/ourmid/pngtree-coloring-pages-free-kids-printable-teddy-bear-drawing-in-pencil-cartoon-png-image_6746133.png`}
            className="card-img-top"
            alt={`Resep ${i}`}
          />
          <div className="card-body">
            <h5 className="card-title">Resep {i}</h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>




     












      <section className="latest-recipes mt-5">
        <h2>Resep terbaru</h2>
        <div className="recipe-item mb-4">
        <img src="https://png.pngtree.com/png-vector/20230726/ourmid/pngtree-coloring-pages-free-kids-printable-teddy-bear-drawing-in-pencil-cartoon-png-image_6746133.png" alt="Resep Nasi goreng Khas Yogyakarta" className="img-fluid" />
          <div className="recipe-details">
            <h3>Ayam Goreng Geprek</h3>
            <div className="recipe-meta">
              <span>1 porsi</span> | <span>180 menit</span> | <span>Sedang</span>
            </div>
            <p>Ayam geprek adalah makanan ayam goreng tepung khas Indonesia yang diulek atau dilumatkan bersama sambal bawang...</p>
            <a href="#" className="btn btn-primary">Baca selengkapnya</a>
          </div>
        </div>
        <div className="recipe-item mb-4">
        <img src="https://png.pngtree.com/png-vector/20230726/ourmid/pngtree-coloring-pages-free-kids-printable-teddy-bear-drawing-in-pencil-cartoon-png-image_6746133.png" alt="Resep Nasi goreng Khas Yogyakarta" className="img-fluid" />
          <div className="recipe-details">
            <h3>Resep Gorengan</h3>
            <div className="recipe-meta">
              <span>2 porsi</span> | <span>15 menit</span> | <span>Mudah</span>
            </div>
            <p>Gorengan adalah ragam makanan yang dibuat dengan cara digoreng. Beragam gorengan seperti tahu, tempe...</p>
            <a href="#" className="btn btn-primary">Baca selengkapnya</a>
          </div>
        </div>
        <div className="recipe-item">
        <img src="https://png.pngtree.com/png-vector/20230726/ourmid/pngtree-coloring-pages-free-kids-printable-teddy-bear-drawing-in-pencil-cartoon-png-image_6746133.png" alt="Resep Nasi goreng Khas Yogyakarta" className="img-fluid" />
          <div className="recipe-details">
            <h3>Resep Nasi goreng Khas Yogyakarta</h3>
            <div className="recipe-meta">
              <span>3 porsi</span> | <span>90 menit</span> | <span>Sulit</span>
            </div>
            <p>Nasi goreng adalah makanan berupa nasi yang digoreng dan diaduk dalam minyak goreng, margarin, atau mentega...</p>
            <a href="#" className="btn btn-primary">Baca selengkapnya</a>
          </div>
        </div>
      </section>
    </div>
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
};


export default Product
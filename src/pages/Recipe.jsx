import { Container, Row, Col } from "react-bootstrap";
import '../style/Recipe.css';  // Assuming you have a CSS file for custom styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';



const Recipe = () => {
  return (
    <div>
      <div className="container">
        <section className="latest-recipes mt-5">
          <h2 className="judul">Resep terbaru</h2>
          <div className="recipe-item mb-4">
                <img
          src="https://www.flokq.com/blog/wp-content/uploads/2020/09/A-Guide-to-Ordering-Ayam-Geprek-for-Beginners.png"
          alt="Ayam Goreng Geprek"
          className="img-fluid"
          style={{ borderRadius: '10px' }}
/>
            <div className="recipe-details">
              <h3>Ayam Goreng Geprek</h3>
              <div className="recipe-meta">
                <span>1 porsi</span> | <span>180 menit</span> | <span>Sedang</span>
              </div>
              <p className="resep">Ayam geprek adalah makanan ayam goreng tepung khas Indonesia yang diulek atau dilumatkan bersama sambal bajak. Sebagian besar sumber menyebut bahwa ayam geprek berasal dari Kota Yogyakarta. </p>
              <a href="/RecipeDetailPage" className="btn btn-landing" style={{backgroundColor: "#0F172A",color: "#ffffff", width: "680px", borderColor: "#000000"}}>Baca selengkapnya</a>
            </div>
          </div>
          <div className="recipe-item mb-4">
                <img
          src="https://cdn.pixabay.com/photo/2016/04/25/01/58/french-fries-1351062_1280.jpg"
          alt="Resep Gorengan"
          className="img-fluid"
          style={{ borderRadius: '10px' }}
/>
            <div className="recipe-details">
              <h3>Resep Gorengan</h3>
              <div className="recipe-meta">
                <span>2 porsi</span> | <span>15 menit</span> | <span>Mudah</span>
              </div>
              <p className="resep">Gorengan adalah makanan yang dibuat dengan cara digoreng dalam minyak goreng.Gorengan adalah salah satu jenis junk food dan makanan ringan yang populer di Indonesia. Gorengan adalah makanan yang dibuat dengan cara digoreng dalam minyak goreng.Gorengan merupakan bahan makanan...........</p>
              <a href="/RecipeDetailPage" className="btn btn-landing" style={{backgroundColor: "#0F172A",color: "#ffffff", width: "680px", borderColor: "#000000"}}>Baca selengkapnya</a>
            </div>
          </div>
          <div className="recipe-item mb-4">
          <img
          src="https://cdn.pixabay.com/photo/2014/02/11/08/31/fried-rice-263882_1280.jpg"
          alt="Resep Nasi goreng Khas Yogyakarta"
          className="img-fluid"
          style={{ borderRadius: '10px' }}
/>
            <div className="recipe-details">
              <h3>Resep Nasi goreng Khas Yogyakarta</h3>
              <div className="recipe-meta">
                <span>3 porsi</span> | <span>90 menit</span> | <span>Sulit</span>
              </div>
              <p className="resep">Nasi goreng adalah makanan berupa nasi yang digoreng dan dicampur dalam minyak goreng, margarin, atau mentega. Biasanya ditambah dengan kecap manis, bawang merah, bawang putih, asam jawa, lada dan bahan lainnya; seperti telur, daging......</p>
              <a href="/RecipeDetailPage" className="btn btn-landing" style={{backgroundColor: "#0F172A",color: "#ffffff", width: "680px", borderColor: "#000000"}}>Baca selengkapnya</a>
            </div>
          </div>
          <div className="recipe-item mb-4">
              <img
        src="https://cdn.pixabay.com/photo/2014/04/22/02/55/pasta-329522_1280.jpg"
        alt="Spaghetti ala anak kos"
        className="img-fluid"
        style={{ borderRadius: '10px' }}
/>
            <div className="recipe-details">
              <h3>Spaghetti ala anak kos</h3>
              <div className="recipe-meta">
                <span>1 porsi</span> | <span>30 menit</span> | <span>Sulit</span>
              </div>
          
              <p className="resep">Spageti adalah salah satu jenis pasta yang berbentuk panjang, tipis, dan padat menyerupai mi. Spageti adalah makanan pokok dalam masakan Italia tradisional. Karena berbentuk seperti mi, sebagian orang menyebutnya mi dari Italia meskipun banyak varian pasta lainnya yang juga berbentuk seperti mi.</p>
              <a href="/RecipeDetailPage" className="btn btn-landing" style={{backgroundColor: "#0F172A",color: "#ffffff", width: "680px", borderColor: "#000000"}}>Baca selengkapnya</a>
            </div>
          </div>
        </section>
      </div>

      <footer className="footer-section py-4" style={{ backgroundColor: '#000', color: '#fff' }}>
      <Container>
        <Row className="align-items-center text-white py-3">
          <Col md={4} className="d-flex align-items-center">

        
            <img src="logoheader.png" alt="Cooking Canvas Logo" style={{ height: '50px', marginRight: '10px' }} />
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

export default Recipe;




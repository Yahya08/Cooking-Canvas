import '../style/RecipeDetailPage.css';  // Ensure the path is correct relative to your project structure
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faInstagram,faYoutube } from '@fortawesome/free-brands-svg-icons';


const RecipeDetailPage = () => {
  const [comments, setComments] = useState([
    { name: 'Irfan Andryanto', comment: 'Yummmyyy' },
    { name: 'Hamin Nur Khamid', comment: 'Enak pake serundil mantap kayanya' },
    { name: 'Ilham Mustaqim', comment: 'Masak kentangnya jangan terlalu kering' },
    { name: 'Yahya', comment: 'Lumayan buat akhir bulan di kos' },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, { name: 'Anonymous', comment: newComment }]);
    setNewComment('');
  };

  return (



    <div>

    <div className="recipe-detail-page container">
      <div className="row">
      <div className="col-md-6">
  <img
    src="https://source.unsplash.com/800x600/?cooking"
    alt="Ayam Goreng Geprek"
    className="img-fluid"
  />
</div>

        <div className="col-md-6">
          <h1>Ayam Goreng Geprek</h1>
          <p>1-2 porsi | waktu: berapa lama</p>
          <p>
            Ayam geprek adalah makanan ayam goreng tepung khas Indonesia yang dilulek atau dilumatkan bersama sambal bajak. Sebagian besar sumber menyebut bahwa ayam geprek berasal dari Kota Yogyakarta. Kini, ayam geprek telah menjadi hidangan populer yang dapat ditemukan di hampir semua kota besar di Indonesia.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Peralatan</h2>
          <ul>
            <li>1 buah wajan</li>
            <li>1 buah sutil</li>
            <li>1 buah penggorengan</li>
            <li>1 buah cobek</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Bahan</h2>
          <ul>
            <li>1 buah ayam</li>
            <li>1 cabai rawit merah</li>
            <li>1 siung bawang putih</li>
            <li>1 siung bawang merah</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Cara membuat</h2>
          <ol>
            <li>Cuci bersih ayam dan marinasi ayam dengan jeruk nipis 20 menit. Diam sejenak sambil siapkan bahan lainnya. Kemudian dilumuri.</li>
            <li>Cuci bersih ayam yang sudah dimarinasi. Tiriskan. Kemudian siapkan tepung, tambahkan bumbu halus yg sudah diblender. Balurkan tepung pada ayam sambil ditekan-tekan. Ulangi 2x.</li>
            <li>Goreng ayam dalam minyak panas hingga krispi dengan api sedang cenderung kecil. Bolak balik ayam supaya matang merata.</li>
            <li>Untuk sambal, ulek semua bahan sambal. Lalu siram sambal dengan minyak panas bekas menggoreng ayam tadi. Tes rasa. Lalu geprek ayam bersama sambal.</li>
            <li>Ayam geprek siap disajikan dengan nasi hangat.</li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Tulis komentar</h2>
          <form onSubmit={handleCommentSubmit}>
            <div className="mb-3">
              <textarea
                className="form-control"
                value={newComment}
                onChange={handleCommentChange}
                rows="3"
                placeholder="Komentar"
              />
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Pritinjau Komentar</h2>
          <ul className="list-group">
            {comments.map((comment, index) => (
              <li key={index} className="list-group-item">
                <strong>{comment.name}</strong>: {comment.comment}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Produk-produk yang serupa</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://source.unsplash.com/800x600/?cooking" className="card-img-top" alt="Resep 1" />
                <div className="card-body">
                  <h5 className="card-title">Resep 1</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://source.unsplash.com/800x600/?cooking" className="card-img-top" alt="Resep 2" />
                <div className="card-body">
                  <h5 className="card-title">Resep 2</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://source.unsplash.com/800x600/?cooking" className="card-img-top" alt="Resep 3" />
                <div className="card-body">
                  <h5 className="card-title">Resep 3</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>


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

export default RecipeDetailPage;

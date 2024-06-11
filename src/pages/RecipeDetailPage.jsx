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
    src="https://www.flokq.com/blog/wp-content/uploads/2020/09/A-Guide-to-Ordering-Ayam-Geprek-for-Beginners.png"
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
        <div className="produk-serupa col-12">
          <h2>Produk-produk yang serupa</h2>
          <div className="produk-serupa1 row">
            <div className="col-md-4">
              <div className="card">
              <a href="./Recipe">
                <img src="https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962997_1280.jpg" className="card-img-top" alt="Resep 1" />
              </a>
                <div className="card-body">
                  <h5 className=" card-title">Hamburger</h5>
                  <p className="card-text">Burger adalah sejenis roti berbentuk bundar yang diiris dua, dan di tengahnya diisi dengan patty yang biasanya diambil dari daging, kemudian sayur-sayuran berupa selada, tomat dan bawang bombai. Sebagai sausnya, hamburger diberi berbagai jenis saus..</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
              <a href="./Recipe">
                <img src="https://cdn.pixabay.com/photo/2017/12/10/14/47/pizza-3010062_1280.jpg" className="card-img-top"  alt="Resep 2" />
              </a>  
                <div className="card-body">
                  <h5 className="card-title">Pizza</h5>
                  <p className="card-text">Hidangan gurih asal Italia sejenis adonan bundar dan pipih, yang dipanggang di oven dan biasanya dilumuri saus tomat serta keju dengan bahan makanan tambahan lainnya yang bisa dipilih sesuai selera. Keju yang dipakai biasanya mozzarella atau keju piza.</p>
                </div>
              </div>

            
            </div>
            <div className="col-md-4">
              <div className="card">
              <a href="./Recipe">
                <img src="https://cdn.pixabay.com/photo/2022/08/25/17/40/spare-ribs-7410906_1280.jpg" className="card-img-top" alt="Resep 3" />
                </a>   
                <div className="card-body">
                  <h5 className="card-title">BBQ</h5>
                  <p className="card-text">Proses pemanggangan menggunakan api langsung dan kering, dengan suhu di atas 500 °F (260 °C) selama beberapa menit. Pemanggangan dapat dilakukan di atas kayu, arang, gas, atau alat listrik. Pemanggangan dan pengasapan memakan waktu yang berbeda.</p>
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

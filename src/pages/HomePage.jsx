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
              <h2>Jelajahi Dunia Kuliner <br/> dengan Cooking Canvas!</h2>
              <p>
              Cooking Canvas adalah tempat untuk <br/> mengeksplorasi ribuan resep makanan dari <br/> seluruh dunia. Temukan resep-resep unik,<br/> 
              bagikan kreasi Anda sendiri, dan terhubung <br/> dengan komunitas pecinta masakan!
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
            <Col className="content"  >
              <h2>Resep yang Teruji dan <br/> Terpercaya</h2>
              <p>
              Bayangkan Anda bisa dengan mudah <br/> membuat hidangan lezat dan minuman segar, <br/>
              dengan keyakinan bahwa setiap resep <br/> dijamin memuaskan. Baik Anda seorang koki <br/> berpengalaman maupun pemula di dapur, <br/>
              Cooking Canvas adalah sumber terpercaya <br/> Anda untuk resep-resep yang dapat <br/>diandalkan dan menggugah selera..<br/>
              </p>
            </Col>
          </Row>

        <h4 className="heading1"> Heading</h4>
        <div className="testimoni1">
          <Row>
            <Col md={4} className="mb-4">
              <h5>Dea Sari</h5>
              <p>
               Cooking Canvas benar-benar mengubah cara saya memasak di rumah. 
               Resep-resepnya selalu berhasil dan rasanya luar biasa! 
              Saya jadi lebih percaya diri di dapur
              </p>
            </Col>
            
            <Col md={4} className="heading2">
              <h5>Lila Kusuma</h5>
              <p>
              Cooking Canvas adalah penyelamat bagi saya yang sibuk. 
              Resep-resepnya mudah diikuti dan selalu menghasilkan hidangan yang lezat. 
              Sangat direkomendasikan!
              </p>

            </Col>     
          </Row>
        </div>

        <div className="testimoni2">
          <Row>
            <Col md={4} className="mb-4">
              <h6>Andi Pratama</h6>
              <p>
              Saya sangat menyukai Cooking Canvas! Tidak perlu lagi bingung mencari resep yang enak.
              Semua resep di sini sudah teruji dan hasilnya selalu memuaskan.
              </p>
            </Col>

            <Col md={4} className="heading2">
              <h6>Rizky Nugraha</h6>
              <p>
              Sejak menggunakan Cooking Canvas, saya sering mendapat pujian atas masakan saya. 
              Terima kasih telah menyediakan resep-resep yang hebat dan terpercaya
              </p>
            </Col>     
          </Row>
        </div>



        </Container>
      </section>

     <section className="full-height-section">
        <Container className="text-center">
          <h1 className="display-4">Gabung dan Mulai Memasak!</h1>
          <p className="lead">Bergabunglah dengan komunitas pecinta masak kami hari ini!</p>
          <Button className="btn-dark mt-3">Button</Button>
        </Container>
      </section>
      <div className="white-divider"></div>
      <footer className="footer-section">
        <Container className="text-center">
          <p>Cooking Canvas</p>
          <p>© Cooking Canvas 2024 Ltd.</p>
          <div>
            <a href="#">Facebook</a> | <a href="#">LinkedIn</a> | <a href="#">Instagram</a>
          </div>
          <div>
            <a href="#">Home</a> | <a href="#">Product</a> | <a href="#">About Us</a> | <a href="#">Contact</a>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default HomePage
import '../style/Signin.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Signin = () => {
  return (
    <Container fluid style={{ height: '100vh' }}>
      <Row className="h-100">
        <Col
          md={6}
          className="d-none d-md-flex align-items-center justify-content-center"
          style={{
            backgroundColor:'#0F172A',
            backgroundImage: "url('https://source.unsplash.com/800x600/?cooking')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#ffffff'
          }}
        >
          {/* Konten opsional di sebelah kiri */}
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
          <div className="text-center mb-4 d-flex align-items-center">
            <img src="logo3.svg" alt="Logo" style={{ width: '200px', marginBottom: '10px' }} />
          </div>
          <div className="mb-4" style={{ textAlign: 'left', width: '100%', maxWidth: '400px', border: '1px solid #ced4da', borderRadius: '5px', padding: '20px' }}>
            <h4 style={{ marginBottom: '10px', color: '#0F172A', fontWeight:'bold'  }}>Sign in to your account</h4>
            <p style={{ marginBottom: '20px', color: '#6c757d' }}>Enter your details below</p>
            <Form style={{ width: '100%' }}>
              <Form.Group controlId="fullName">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" placeholder="Nama Lengkap" />
              </Form.Group>
              <Form.Group controlId="username" style={{ marginTop: '20px' }}>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" />
              </Form.Group>
              <Form.Group controlId="email" style={{ marginTop: '20px' }}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" defaultValue="m@example.com" />
              </Form.Group>
              <Form.Group controlId="password" style={{ marginTop: '20px' }}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="dark" type="submit" style={{ marginTop: '20px', width: '100%' }}>
                Sign In
              </Button>
            </Form>
          </div>
          <p style={{ marginTop: '20px' }}>Don't have an account yet? <a href="#" style={{ color: 'inherit', fontWeight: 'bold' }}>Sign up</a></p>
        </Col>
      </Row>
    </Container>
  );
};

export default Signin;

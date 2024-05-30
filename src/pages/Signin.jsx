import '../style/Signin.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const Signin = () => {
  return (
    <Container fluid style={{ height: '100vh' }}>
    <Row className="h-100">
      <Col
        md={6}
        className="d-none d-md-flex align-items-center justify-content-center"
        style={{
          backgroundColor: '#0F172A',
          backgroundImage: "url('https://source.unsplash.com/800x600/?cooking')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#ffffff'
        }}
      >
        {/* Optional content on the left */}
      </Col>
      <Col md={6} className="d-flex flex-column align-items-center justify-content-center">
          <div className="text-center mb-4">
            <img src="public/logo.jpeg" alt="Logo" style={{ width: '100px', marginBottom: '10px' }} />
            <h4 style={{ color: '#0F172A', fontWeight: 'bold' }}>COOKING CANVAS</h4>
          </div>
          <Card style={{ width: '100%', maxWidth: '400px' }} className="mb-3">
            <Card.Header className="text-center">
              <h4>Sign in to your account</h4>
            </Card.Header>
            <Card.Body>
              <Form className="w-100">
                <Form.Group controlId="fullName">
                  <Form.Label style={{ color: '#0F172A' }}>Nama lengkap</Form.Label>
                  <Form.Control type="text" placeholder="mister example" className="w-100" />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label style={{ color: '#0F172A' }}>Email</Form.Label>
                  <Form.Control type="email" placeholder="m@example.com" className="w-100" />
                </Form.Group>
                <Form.Group controlId="password" className="mb-3">
                  <Form.Label style={{ color: '#0F172A' }}>Password</Form.Label>
                  <Form.Control type="password" className="w-100" />
                </Form.Group>
                <Button variant="primary" type="submit" block style={{ backgroundColor: '#0F172A', borderColor: '#0F172A', width: '100%' }}>
                  Sign Up
                </Button>
              </Form>
              <div className="text-center mt-3">
                <a href="#" style={{ color: '#0F172A', fontWeight: 'bold' }}>already have an account? Log In</a>
              </div>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  </Container>
  )
}

export default Signin

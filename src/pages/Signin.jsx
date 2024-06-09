import React, { useState } from 'react';
import '../style/Signin.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Signin = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('function/signin_api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ identifier, password }),
      });

      if (response.ok) {
        // Handle successful login, e.g., redirect to dashboard
        const data = await response.json();
        console.log('Mendapat Response JSON data', data);
      } else {
        // Handle failed login, e.g., display error message
        console.error('Gagal mendapat response');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

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
          {/* Konten opsional di sebelah kiri */}
        </Col>
        <Col md={6} className="d-flex flex-column align-items-center justify-content-center" style={{ border: '1px solid #ced4da', borderRadius: '5px', padding: '20px' }}>
          <div className="text-center mb-4 d-flex align-items-center">
            <img src="logo3.svg" alt="Logo" style={{ width: '200px', marginBottom: '10px' }} />
          </div>
          <div className="mb-4" style={{ textAlign: 'left', width: '100%', maxWidth: '400px', padding: '20px', border: '1px solid #ced4da', borderRadius: '5px' }}>
            <h4 style={{ marginBottom: '10px', color: '#0F172A', fontWeight: 'bold' }}>Sign in to your account</h4>
            <p style={{ marginBottom: '20px', color: '#6c757d' }}>Enter your email below</p>
            <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
              <Form.Group controlId="email">
                <Form.Label style={{ color: '#0F172A', textAlign: 'left', width: '100%' }}>Email</Form.Label>
                <Form.Control type="email" name="identifier" placeholder="" value={identifier} onChange={(e) => setIdentifier(e.target.value)} />
              </Form.Group>
              <Form.Group controlId="password" style={{ marginTop: '20px' }}>
                <Form.Label style={{ color: '#0F172A', textAlign: 'left', width: '100%' }}>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
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

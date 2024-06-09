import React, { useState } from 'react';
import '../style/Signup.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Signup = () => {
  const [formData, setFormData] = useState({
    nama_lengkap: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('function/signup_api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data); // You can handle response data here
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
            <h4 style={{ marginBottom: '10px', color: '#0F172A', fontWeight:'bold'  }}>Sign up to your account</h4>
            <p style={{ marginBottom: '20px', color: '#6c757d' }}>Enter your details below</p>
            <Form style={{ width: '100%' }} onSubmit={handleSubmit}>
              <Form.Group controlId="nama_lengkap">
                <Form.Label>Nama Lengkap</Form.Label>
                <Form.Control type="text" placeholder="fullname" name="nama_lengkap" value={formData.nama_lengkap} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="username" style={{ marginTop: '20px' }}>
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Username" name="username" value={formData.username} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="email" style={{ marginTop: '20px' }}>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} />
              </Form.Group>
              <Form.Group controlId="password" style={{ marginTop: '20px' }}>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange} />
              </Form.Group>
              <Button variant="dark" type="submit" style={{ marginTop: '20px', width: '100%' }}>
                Sign Up
              </Button>
            </Form>
          </div>
          <p style={{ marginTop: '20px' }}>Don't have an account yet? <a href="#" style={{ color: 'inherit', fontWeight: 'bold' }}>Sign In</a></p>
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
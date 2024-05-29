
import React from "react";
import '../style/Signin.css';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'; // Import Bootstrap components

const Signup = () => {
  return (
    <Container fluid className="vh-100">
      <Row className="h-100">
      <Col md={6} className="d-none d-md-flex align-items-center justify-content-center" style={{ backgroundImage: "url('public/logo.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}>
          {/* This column is for the image */}
        </Col>
        <Col md={6} className="d-flex align-items-center justify-content-center">
          <Card style={{ width: '100%', maxWidth: '400px' }}>
            <Card.Header>
              <h4 className="text-center">Sign up to your account</h4>
            </Card.Header>
            <Card.Body>
              <Form>
                <Form.Group controlId="fullName">
                  <Form.Label>Nama lengkap</Form.Label>
                  <Form.Control type="text" placeholder="mister example" />
                </Form.Group>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="m@example.com" />
                </Form.Group>
                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>
                <Button variant="primary" type="submit" block>
                  Sign Up
                </Button>
              </Form>
              <div className="text-center mt-3">
                <a href="#">already have an account? Log In</a>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Signup

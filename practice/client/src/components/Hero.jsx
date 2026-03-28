import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <section className="hero bg-primary text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4">Hi, I'm Ram</h1>
            <p className="lead">A passionate MERN Stack Developer, Fresher looking for opportunities to build amazing web applications.</p>
            <Button variant="light" size="lg" href="#contact">Get In Touch</Button>
          </Col>
          <Col md={6} className="text-center">
            <img src="https://via.placeholder.com/300" alt="Ram" className="img-fluid rounded-circle" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
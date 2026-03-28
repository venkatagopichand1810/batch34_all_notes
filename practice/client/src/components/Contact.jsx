import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow">
              <Card.Body className="text-center">
                <Row>
                  <Col md={6} className="mb-3">
                    <FaEnvelope size={30} className="text-primary mb-2" />
                    <p>ram@example.com</p>
                  </Col>
                  <Col md={6} className="mb-3">
                    <FaPhone size={30} className="text-primary mb-2" />
                    <p>+91 12345 67890</p>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} className="mb-3">
                    <FaMapMarkerAlt size={30} className="text-primary mb-2" />
                    <p>India</p>
                  </Col>
                  <Col md={6} className="mb-3">
                    <a href="#" className="btn btn-primary me-2"><FaLinkedin className="me-1" />LinkedIn</a>
                    <a href="#" className="btn btn-dark"><FaGithub className="me-1" />GitHub</a>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
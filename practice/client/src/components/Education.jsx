import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Education</h2>
        <Row>
          <Col md={6} className="mx-auto">
            <Card className="shadow-sm">
              <Card.Body>
                <FaGraduationCap size={30} className="text-primary mb-3" />
                <Card.Title>GUVI IIT India</Card.Title>
                <Card.Text>
                  Completed training in MERN Stack Development. Gained hands-on experience in building full-stack web applications.
                </Card.Text>
                <Card.Text className="text-muted">2023 - 2024</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Education;
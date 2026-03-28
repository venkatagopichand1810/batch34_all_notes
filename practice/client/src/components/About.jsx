import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h2><FaUser className="me-2 text-primary" />About Me</h2>
            <p>
              Hello! I am Ram, a fresher MERN Stack Developer passionate about creating dynamic and responsive web applications.
              I have completed training at GUVI IIT India and have worked on multiple projects including shopping websites and other full-stack applications.
              I am eager to apply my skills in a professional environment and contribute to innovative projects.
            </p>
          </Col>
          <Col md={6}>
            <img src="https://via.placeholder.com/400x300" alt="About Ram" className="img-fluid rounded shadow" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
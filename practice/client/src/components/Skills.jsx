import React from 'react';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import { FaCode } from 'react-icons/fa';

const Skills = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'MongoDB', 'Bootstrap', 'Git'];

  return (
    <section id="skills" className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4"><FaCode className="me-2 text-primary" />Skills</h2>
        <Row>
          <Col className="text-center">
            {skills.map((skill, index) => (
              <Badge key={index} bg="primary" className="m-2 p-2 fs-6" style={{ fontSize: '1rem' }}>
                {skill}
              </Badge>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
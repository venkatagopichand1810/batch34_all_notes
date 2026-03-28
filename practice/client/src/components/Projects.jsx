import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaProjectDiagram } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    { title: 'E-Commerce Shopping Website', description: 'A full-stack MERN application for online shopping with user authentication, product catalog, and payment integration.', tech: 'MERN Stack', link: '#' },
    { title: 'Task Management App', description: 'A React-based to-do app with Node.js backend for managing daily tasks and collaboration.', tech: 'React, Node.js', link: '#' },
    { title: 'Blog Platform', description: 'A MERN stack blog website with user posts, comments, and admin panel.', tech: 'MERN Stack', link: '#' },
    { title: 'Portfolio Website', description: 'This responsive portfolio website built with React and Vite.', tech: 'React, Bootstrap', link: '#' },
    { title: 'Weather Dashboard', description: 'An industry-style weather app using APIs, displaying forecasts and maps.', tech: 'JavaScript, API', link: '#' },
    { title: 'Social Media Clone', description: 'A simplified social media platform with posts, likes, and user profiles using MERN.', tech: 'MERN Stack', link: '#' }
  ];

  return (
    <section id="projects" className="py-5">
      <Container>
        <h2 className="text-center mb-4"><FaProjectDiagram className="me-2 text-primary" />Projects</h2>
        <Row>
          {projects.map((project, index) => (
            <Col md={4} key={index} className="mb-4">
              <Card className="h-100 shadow-sm project-card">
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <Card.Text className="text-muted"><strong>Tech:</strong> {project.tech}</Card.Text>
                  <Button variant="primary" href={project.link} className="mt-auto">View Project</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
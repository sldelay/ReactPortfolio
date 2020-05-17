import React from 'react';
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ProCard from "../ProjectCard/Card";
import Footer from "../Footer/Footer";

const Portfolio = ({ projects }) => {
  console.log(projects)
  return (
    <>
      <Container className="Portfolio">
        <Row>
          {projects.map((project, index) => (
            <ProCard key={index} project={project} />
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default Portfolio;
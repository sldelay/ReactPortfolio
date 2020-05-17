import React from 'react';
import "./style.css";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

const ProCard = ( {project} ) => {

  const {image, title, description, technologies, code, live} = project;

  return (
  <Col sm={12} md={6}>
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
      </Card.Body>
      <ul>
        {technologies.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <Card.Body>
        <Card.Link href={code} target="_blank">GitHub</Card.Link>
        <Card.Link href={live} target="_blank">Live Site</Card.Link>
      </Card.Body>
    </Card>
  </Col>
  )
}

export default ProCard;
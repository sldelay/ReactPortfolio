import React from 'react';
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Home = () => {
  return (
    <section className="landing">
      <Container>
        <Row>
          <Col className="landingCol">
            <h1 className="hello">HELLO.</h1>
            <h2 className="iAm">I AM A FULL STACK WEB DEVELOPER</h2>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Home
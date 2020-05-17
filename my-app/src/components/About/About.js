import React from 'react';
import "./style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Footer from "../Footer/Footer";


const About = () => {
  return (
    <>
      <Container className="About">
        <Row>
          <Col>
            <h4>Hey, I'm Sam</h4>
            <div>
              <p>
                I am a creative problem solver, a purpose driven
                learner and a collaborator. I adjust quickly to new environments and approach challenges iteratively, with
                ease and excitement. I have always loved building things.
            </p>
              <p>
                In December of 2019, I started a full stack web development bootcamp with the University of New Hampshire
                (UNH). The program is offered through UNH, in a partnership with Trilogy Education Services. The program
                offers an in-depth curriculum. On the frontend, we learned HTML5, CSS, Bootstrap, Javascript (including ES6), and jQuery. In the
                backend we learned Node.js, Express, MySQL, and MongoDB. The last bit of the bootcamp is spent learning
                the
                React framework.
            </p>
            </div>
            <h6><b>Email:</b> samuel.delay@gmail.com</h6>
            <h6><b>Phone:</b> (603) 769-0590</h6>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  )
}

export default About;
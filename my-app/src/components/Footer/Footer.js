import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Nav from "react-bootstrap/Nav";
import "./style.css";


const Footer = () => {
  return (
    <Navbar bg="dark" sticky="bottom">
      <Nav className="center">
        <Nav.Link href="/assets/SDResume4_2020.pdf" target="_blank"><i className="fas fa-file fa-3x"></i></Nav.Link>
        <Nav.Link href="https://www.linkedin.com/in/samuel-delay-b75244b4/" target="_blank"><i className="fab fa-linkedin fa-3x"></i></Nav.Link>
        <Nav.Link href="https://github.com/sldelay" target="_blank"><i className="fab fa-github-square fa-3x"></i></Nav.Link>
      </Nav>
    </Navbar>
  )
}

export default Footer;
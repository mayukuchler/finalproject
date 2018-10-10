import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const About = () => (
  <div>
    <Hero backgroundImage="http://getwallpapers.com/wallpaper/full/7/8/d/370135.jpg">
      <h1>Best Friend Finder</h1>
      <h2>Find your best friend with one swipe!</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
         
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          
        </Col>
      </Row>
    </Container>
  </div>
);

export default About;

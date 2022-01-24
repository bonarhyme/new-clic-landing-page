import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { BsFillPeopleFill, BsQuestionLg } from "react-icons/bs";

import { HiLightBulb } from "react-icons/hi";

import AOS from "aos";
import "aos/dist/aos.css";

const GetInTouch = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <Container className="py-5">
      <h2 className="text-center">Get In Touch</h2>
      <Row className="justify-content-center align-items-center">
        <Col md={4}>
          <article className="my-card bg-pink" data-aos="fade-right">
            <HiLightBulb size={75} color="black" />
            <address>georgia.young@example.com</address>
            <p>
              <b>Get Support</b>
            </p>
            <a href="#" className="card-btn">
              Give your suggestions
            </a>
          </article>
        </Col>
        <Col md={4}>
          <article className="my-card green big" data-aos="zoom-in">
            <BsFillPeopleFill size={75} color="white" />
            <address className="white">georgia.young@example.com</address>
            <p>
              <b className="white">Get Support</b>
            </p>
            <a href="#" className="card-a">
              Join The Team
            </a>
          </article>
        </Col>
        <Col md={4}>
          <article className="my-card bg-pink" data-aos="fade-left">
            <HiLightBulb size={75} color="black" />
            <address>georgia.young@example.com</address>
            <p>
              <b>Get Support</b>
            </p>
            <a href="#" className="card-btn">
              Ask a question
            </a>
          </article>
        </Col>
      </Row>
    </Container>
  );
};

export default GetInTouch;

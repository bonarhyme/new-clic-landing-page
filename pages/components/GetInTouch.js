import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { BsFillPeopleFill, BsQuestionLg } from "react-icons/bs";

import { HiLightBulb } from "react-icons/hi";

import MyCard from "./MyCard";

const GetInTouch = () => {
  return (
    <Container className="py-5">
      <h2 className="text-center">Get In Touch</h2>
      <Row className="justify-content-center align-items-center">
        <Col md={4}>
          <MyCard
            Logo={HiLightBulb}
            email="georgia.young@example.com"
            text="Get Support"
            linkText="Give your suggestions"
            link="/"
            btn
          />
        </Col>
        <Col md={4}>
          <MyCard
            Logo={BsFillPeopleFill}
            email="georgia.young@example.com"
            linkText="Join The Team"
            link="/"
            big
          />
        </Col>
        <Col md={4}>
          <MyCard
            Logo={BsQuestionLg}
            email="georgia.young@example.com"
            linkText="Ask a question"
            text="Get Support"
            link="/"
            btn
          />
        </Col>
      </Row>
    </Container>
  );
};

export default GetInTouch;

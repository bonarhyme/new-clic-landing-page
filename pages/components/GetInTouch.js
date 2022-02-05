import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Offcanvas, Row } from "react-bootstrap";

import { BsFillPeopleFill, BsQuestionLg } from "react-icons/bs";

import { HiLightBulb } from "react-icons/hi";

import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

const GetInTouch = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("contact@clikplatform.nl");
  const [text, setText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, text });
  };

  return (
    <Container className="py-5" id="contact">
      <h2 className="text-center">Get In Touch</h2>
      <Row className="justify-content-center align-items-center">
        <Col md={4}>
          <article className="my-card bg-pink" data-aos="fade-right">
            <HiLightBulb size={75} color="black" />
            <address>support@clikplatform.nl</address>

            <Button
              className=" text-white"
              variant="success"
              onClick={() => {
                handleShow();
                setEmail("support@clikplatform.nl");
              }}
            >
              Get Support
            </Button>
          </article>
        </Col>
        <Col md={4}>
          <article className="my-card green big" data-aos="zoom-in">
            <BsFillPeopleFill size={75} color="white" />
            <address className="white"> joinus@clikplatform.nl</address>
            <span className="text-white card-a ">
              <Link href="#get-in-touch">Join The Team</Link>
            </span>
          </article>
        </Col>
        <Col md={4}>
          <article className="my-card bg-pink" data-aos="fade-left">
            <HiLightBulb size={75} color="black" />
            <address>contact@clikplatform.nl</address>
            <Button
              variant="success"
              className="text-white"
              onClick={() => {
                handleShow();
                setEmail("contact@clikplatform.nl");
              }}
            >
              Ask a question
            </Button>
          </article>
        </Col>
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Send us an Email</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Form
              style={{ width: "100%", maxWidth: "400px" }}
              onSubmit={handleSubmit}
            >
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Our Email</Form.Label>
                <Form.Control type="email" value={email} disabled />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Your message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Enter your message"
                />
              </Form.Group>
              <Button type="submit" variant="success">
                Submit
              </Button>
            </Form>
          </Offcanvas.Body>
        </Offcanvas>
      </Row>
    </Container>
  );
};

export default GetInTouch;

import Image from "next/image";
import React, { useEffect } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { appData } from "../../variables/data";

import AOS from "aos";
import "aos/dist/aos.css";
import OurForm from "./OurForm";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <header>
      <Container className="p-5">
        <Row>
          <Col md={6} xs={12} className="my-5">
            <div data-aos="fade-right">
              <h1 className="clik">
                <strong>Clik</strong>
              </h1>
              <p>Be part of your local community</p>
              <OurForm />
              <Form.Text className="text-muted">
                Clik will soon be available, join wait list to stay informed
              </Form.Text>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div data-aos="fade-left">
              <div className="leaf-feed-container">
                <div className="leaf">
                  <Image
                    src={appData.leaf}
                    width={70}
                    height={70}
                    objectFit="contain"
                    alt=""
                  />
                </div>
                <div className="feed">
                  {/* <video src={appData.wedo}></video> */}
                  <video width={300} muted autoPlay controls>
                    <source src="/wedo.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

import Image from "next/image";
import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
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
                <strong>Access your community in Clik</strong>
              </h1>
              <p>
                {" "}
                Clik lets you benefit and contribute to your local community -
                Stay connected!
              </p>
              <OurForm />
              <Form.Text className="text-muted">
                Clik will soon be available, join wait list to stay informed
              </Form.Text>
            </div>
          </Col>
          <Col md={6} xs={12}>
            <div data-aos="fade-left">
                <div className="feed">
                  {/* <video src={appData.Clik-Feeda}></video> */}
                  <video width={300} muted autoPlay>
                    <source src="/Clik-Feed.mp4" type="video/mp4" />
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

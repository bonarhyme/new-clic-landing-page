import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { MdLibraryAddCheck } from "react-icons/md";
import { appData } from "../../variables/data";

const Why = () => {
  return (
    <article className="bg-wh">
      <Container className="py-3  text-center">
        <h2 className="py-5">Why Clik?</h2>
        <Row className="justify-content-center  why">
          <Col xs={12} md={4} className="py-3">
            <Image
              src={appData.target}
              width={64}
              height={64}
              alt=""
              //   className="green"
            />

            <h4>Relevance</h4>
            <p>Get notified by activities and items that matter to you</p>
          </Col>
          <Col xs={12} md={4} className="py-3">
            <MdLibraryAddCheck size={64} color="green" />
            <h4>All in one</h4>
            <p>
              Benefit from, and add to the strengths of your local community via
              the marketplace, events, services, volunteering, donations, jobs,
              and accomodation listings
            </p>
          </Col>
          <Col xs={12} md={4} className="py-3">
            <Image src={appData.influence} width={64} height={64} alt="" />
            <h4>Influence</h4>
            <p>
              Impact change by sharing your thoughts about your community in the
              local feedback feed
            </p>
          </Col>
        </Row>
      </Container>
    </article>
  );
};

export default Why;
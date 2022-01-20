import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import { appData } from "../../variables/data";

const Supporters = () => {
  return (
    <article>
      <Container>
        <h2 className="text-center pt-5">Our Supporters</h2>
        <Image
          src={appData.supporters}
          width={1170}
          height={200}
          objectFit="contain"
          alt="clik supporters"
        />
      </Container>
    </article>
  );
};

export default Supporters;

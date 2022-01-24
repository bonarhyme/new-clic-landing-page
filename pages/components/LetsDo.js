import React from "react";
import { Form } from "react-bootstrap";
import OurForm from "./OurForm";

const LetsDo = () => {
  return (
    <article className="lets-do text-center">
      <h2>Let&apos;s do it. Together</h2>
      <p className="remove-padding">
        Clik is a platform made by the people. <br />
        We need you to help us test the beta version before launch
      </p>
      <div>
        <OurForm />
        <Form.Text className="text-muted">
          Clik &quot;Join Beta&quot; if you would like to Beta Test Clik
        </Form.Text>
      </div>
    </article>
  );
};

export default LetsDo;

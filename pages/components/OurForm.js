import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { appData } from "../../variables/data";

const OurForm = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState({ isExist: false, message: "" });
  const [loading, setLoading] = useState(false);

  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);
    setError({ ...error, isExist: false });
    fetch(appData.formUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setSuccess(true);
        console.log("Success:", data);
      })
      .catch((error) => {
        setLoading(false);
        setError({ ...error, isExist: true, message: error.message });
        console.error("Error:", error);
      });
  };

  return (
    <div>
      {loading && <Alert variant="info">Loading......</Alert>}
      {error.isExist && (
        <Alert variant="danger">
          An error occured. Failed to add you to the wait list.
        </Alert>
      )}
      {success && (
        <Alert variant="success">
          Congratulations!!! You have been successfully added to the wait list{" "}
        </Alert>
      )}

      <form onSubmit={handleForm}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email Address"
          required
        />
        <button type="submit">Join Wait List</button>
      </form>
    </div>
  );
};

export default OurForm;

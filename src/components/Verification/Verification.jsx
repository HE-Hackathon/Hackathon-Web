import React, { Component } from "react";
import { Button, Container } from "@material-ui/core";
import { Link } from "react-router-dom";

const Verification = (props) => {
  return (
    <div style={{ height: "100vh" }}>
      <Container style={{ paddingTop: 30 }}>
        <Container
          maxWidth="lg"
          style={{
            fontSize: "4vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 30,
          }}
        >
          Thank you for registering!
        </Container>
        <Container
          maxWidth="lg"
          style={{
            fontSize: "4vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 30,
          }}
        >
          A verification link has been sent to your mail
        </Container>
      </Container>
      <Container
        style={{          
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 30,
        }}
      >
        <Link to="/">
          <Button variant="contained" color="primary">Redirect to Login</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Verification;

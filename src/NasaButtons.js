import React, { useState } from "react";
import "./nasa.css";
import { Button, Col, Container } from "reactstrap";

export default function NasaButtons(props) {
  const setDate = props.setDate;
  const [text, setText] = useState("");
  return (
    <div>
      <Container className="themed-container" fluid="sm">
        <Col sm={{ size: "auto", offset: 1 }}>
          Input date (YYYY-MM-DD):
          <input
            type="text"
            value={text}
            onChange={event => setText(event.target.value)}
          />
          <Button color="secondary" onClick={() => setDate(text)}>
            Show Picture
          </Button>
        </Col>
      </Container>
      <hr />
    </div>
  );
}

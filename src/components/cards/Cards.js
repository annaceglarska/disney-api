import React from "react";
import Card from "./../card/Card";
import "./Cards.css";
import { Container, Row } from "react-bootstrap";

function Cards(props) {
  return (
    <Container>
      <Row>
        {props.charactersDataResponse &&
          props.charactersDataResponse.data.map((element) => (
            <Card key={element._id} element={element} />
          ))}
      </Row>
    </Container>
  );
}

export default Cards;

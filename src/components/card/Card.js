import React from "react";
import BootstrapCard from "react-bootstrap/Card";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ element }) {
  return (
    <BootstrapCard style={{ width: "18rem", margin: "10px" }}>
      <BootstrapCard.Img variant="top" src={element.imageUrl} />
      <BootstrapCard.Body>
        <BootstrapCard.Title>{element.name}</BootstrapCard.Title>
        <BootstrapCard.Text></BootstrapCard.Text>
        <Link className="details-button" to={`/details/${element._id}`}>
          Go to characters details
        </Link>
      </BootstrapCard.Body>
    </BootstrapCard>
  );
}

export default Card;

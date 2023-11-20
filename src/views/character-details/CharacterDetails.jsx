import React from "react";
import { useParams } from "react-router";

function CharacterDetails() {
  const params = useParams();
  console.log(params);
  return <div>CharacterDetails</div>;
}

export default CharacterDetails;

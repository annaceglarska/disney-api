import React from "react";
import disneyPicture from "./../../assets/Disney-characters.avif";
import "./Start.css";
import { Link } from "react-router-dom";

function Start() {
  return (
    <>
      <img className="picture" src={disneyPicture} />
      <Link className="link-style button" to={"/list"}>
        Go to characters list
      </Link>
    </>
  );
}

export default Start;

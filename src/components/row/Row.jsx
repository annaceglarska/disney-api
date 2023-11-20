import React from "react";
import ArrayFormater from "./../array-formater/ArrayFormater";
import { Link } from "react-router-dom";

function Row({ element }) {
  return (
    <tr>
      <td>{element._id}</td>
      <td>
        <ArrayFormater stringArray={element.films} />
      </td>
      <td>
        <ArrayFormater stringArray={element.shortFilms} />
      </td>
      <td>
        <ArrayFormater stringArray={element.tvShows} />
      </td>
      <td>
        <ArrayFormater stringArray={element.videoGames} />
      </td>
      <td>
        <ArrayFormater stringArray={element.parkAttractions} />
      </td>
      <td>
        <ArrayFormater stringArray={element.allies} />
      </td>
      <td>
        <ArrayFormater stringArray={element.enemies} />
      </td>
      <td>
        <a href={element.sourceUrl} target="_blank">
          {element.name}
        </a>
      </td>
      <td>{element.name}</td>
      <td>
        <img src={element.imageUrl} />
      </td>
      <td>{new Date(element.createdAt).toLocaleString()}</td>
      <td>{new Date(element.updatedAt).toLocaleString()}</td>
      <td>
        <Link to={`/details/${element._id}`}>
          Display info about {element.name}
        </Link>
      </td>
    </tr>
  );
}

export default Row;

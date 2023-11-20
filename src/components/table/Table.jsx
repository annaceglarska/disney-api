import React, { useEffect, useState } from "react";
import Row from "./../row/Row";
import apiService from "../../services/api.service";
import BootstrapTable from "react-bootstrap/Table";
import "./Table.css";
import Button from "react-bootstrap/Button";

function Table() {
  const [charactersDataResponse, setCharactersDataResponse] = useState(null);
  useEffect(() => {
    dataFetch();
  }, []);

  const clickPreviousNext = (type) => () => {
    const { previousPage, nextPage } = charactersDataResponse.info;
    const params =
      type === "previous" ? previousPage.split("?")[1] : nextPage.split("?")[1];
    dataFetch(params);
  };

  const dataFetch = (params) => {
    apiService
      .fetchCharacters(params)
      .then((data) => {
        setCharactersDataResponse(data);
      })
      .catch(() => console.log("Coś poszło nie tak"));
  };

  return (
    <>
      <BootstrapTable striped bordered>
        <thead className="thead">
          <th>Id</th>
          <th>Films</th>
          <th>Short film</th>
          <th>Tv shows</th>
          <th>Video Games</th>
          <th>Park Attractions</th>
          <th>Allies</th>
          <th>Enemies</th>
          <th>Source Url</th>
          <th>Name</th>
          <th>Image Url</th>
          <th>Created At</th>
          <th>Updated At</th>
          <th>Url</th>
        </thead>
        <tbody>
          {charactersDataResponse &&
            charactersDataResponse.data.map((element) => (
              <Row key={element._id} element={element} />
            ))}
        </tbody>
      </BootstrapTable>
      <div class="buttons-container">
        <Button
          variant="primary"
          disabled={
            charactersDataResponse
              ? !charactersDataResponse.info.previousPage
              : true
          }
          onClick={clickPreviousNext("previous")}
        >
          Previous
        </Button>
        <Button
          variant="primary"
          disabled={
            charactersDataResponse
              ? !charactersDataResponse.info.nextPage
              : true
          }
          onClick={clickPreviousNext("next")}
        >
          Next
        </Button>
      </div>
    </>
  );
}

export default Table;

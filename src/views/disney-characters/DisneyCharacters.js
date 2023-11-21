import React, { useState, useEffect } from "react";
import Table from "../../components/table/Table";
import "./DisneyCharacters.css";
import Button from "react-bootstrap/Button";
import Cards from "../../components/cards/Cards";
import apiService from "../../services/api.service";

function DisneyCharacters() {
  const [isCardsView, setIsCardsView] = useState(false);

  const [charactersDataResponse, setCharactersDataResponse] = useState(null);
  useEffect(() => {
    dataFetch();
  }, []);

  const changeView = () => {
    setIsCardsView(!isCardsView);
    console.log(isCardsView);
  };

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
      <Button variant="primary" className="button-view" onClick={changeView}>
        View
      </Button>
      {isCardsView ? (
        <Cards charactersDataResponse={charactersDataResponse} />
      ) : (
        <Table charactersDataResponse={charactersDataResponse} />
      )}
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

export default DisneyCharacters;

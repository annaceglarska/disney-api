import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import apiService from "../../services/api.service";
import Accordion from "react-bootstrap/Accordion";
import Spinner from "react-bootstrap/Spinner";
import ArrayFormater from "../../components/array-formater/ArrayFormater";
import "./CharacterDetails.css";
import Button from "react-bootstrap/Button";
import openaiService from "../../services/openai.service";

function CharacterDetails() {
  const params = useParams();
  console.log(params);

  const [characterDetails, setCharacterDetails] = useState(null);
  const [generatedDescription, setGeneratedDescription] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    apiService
      .fetchCharacterById(params.id)
      .then((data) => {
        setCharacterDetails(data);
      })
      .catch(() => console.log("Coś poszło nie tak"));
  }, [params.id]);

  const generateDescription = async () => {
    setIsLoading(true);
    try {
      const response = await openaiService.getDescription(
        characterDetails.data.name
      );
      setGeneratedDescription(response.message.content);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  if (!characterDetails) {
    return (
      <Spinner animation="border" role="status" className="main-spinner">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <h4 className="header-details">{characterDetails.data.name}</h4>
      <img className="image" src={characterDetails.data.imageUrl} />
      {isLoading ? (
        <Spinner animation="border" role="status" className="spinner">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      ) : (
        <div>
          {generatedDescription ? (
            <div className="description">{generatedDescription}</div>
          ) : (
            <Button
              variant="primary"
              className="chat-button"
              onClick={generateDescription}
            >
              Generate description
            </Button>
          )}
        </div>
      )}

      <div>
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>Films</Accordion.Header>
            <Accordion.Body>
              <ArrayFormater stringArray={characterDetails.data.films} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Short films</Accordion.Header>
            <Accordion.Body>
              <ArrayFormater stringArray={characterDetails.data.shortFilms} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>TV Shows</Accordion.Header>
            <Accordion.Body>
              <ArrayFormater stringArray={characterDetails.data.tvShows} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Video Games</Accordion.Header>
            <Accordion.Body>
              <ArrayFormater stringArray={characterDetails.data.videoGames} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Park Attractions</Accordion.Header>
            <Accordion.Body>
              <ArrayFormater
                stringArray={characterDetails.data.parkAttractions}
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Allies</Accordion.Header>
            <Accordion.Body>
              <ArrayFormater stringArray={characterDetails.data.allies} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6">
            <Accordion.Header>Enemies</Accordion.Header>
            <Accordion.Body>
              <ArrayFormater stringArray={characterDetails.data.enemies} />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7">
            <Accordion.Header>Wiki</Accordion.Header>
            <Accordion.Body>
              <a href={characterDetails.data.sourceUrl}>
                {characterDetails.data.sourceUrl}
              </a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
}

export default CharacterDetails;

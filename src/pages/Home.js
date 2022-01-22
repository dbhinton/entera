import React, { useState, useEffect } from "react";
import { Button, Container, Card } from "react-bootstrap";
import axios from "axios";

export default function Home() {
  const [metData, setMetData] = useState([]);
  async function fetchApi() {
    const { data } = await axios.get(
      "https://collectionapi.metmuseum.org/public/collection/v1/objects/436121"
    );
    setMetData(data);
  }
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <Container style={{ marginTop: "6rem" }}>
        <Card className="mt-5" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={metData.primaryImage} />
          <Card.Body>
            <Card.Title>{metData.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {metData.artistDisplayName}
            </Card.Subtitle>
            <Card.Text>{metData.artistDisplayBio}</Card.Text>
            <Button
              variant="outline-dark"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "https://www.metmuseum.org/";
              }}
            >
              See More
            </Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}

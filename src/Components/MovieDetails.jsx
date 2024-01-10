import { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  const fetchData = async () => {
    const endpoint = `http://www.omdbapi.com/?apikey=e9b4ccd8&i=${params.movieId}`;
    try {
      const resp = await fetch(endpoint);
      if (resp.ok) {
        const response = await resp.json();
        console.log(response);
        setData(response);
        // this.setState({ isLoaded: true });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <Row className=" justify-content-center">
        <Col xs={6}>
          <Card className="bg-black text-center">
            <Card.Img
              variant="top"
              src={data.Poster}
              style={{
                width: "100%",
                height: "600px",
                objectFit: "contain",
              }}
            />
            <Card.Body>
              <Card.Title className=" fw-bold fs-1">{data.Title}</Card.Title>
              <Card.Text>{data.Plot}</Card.Text>
              <Button variant="outline-light">Watch Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;

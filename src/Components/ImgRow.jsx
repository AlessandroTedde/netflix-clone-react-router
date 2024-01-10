import { Container, Row } from "react-bootstrap";
import SingleCol from "./SingleCol";
import { useState, useEffect } from "react";

const ImgRow = ({ queryParam, title }) => {
  // state = {
  //   search: [],
  // };

  const [search, setSearch] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    try {
      let resp = await fetch("http://www.omdbapi.com/?apikey=c349cfd&s=" + queryParam);
      if (resp.ok) {
        let search = await resp.json();
        // salvare nello state il nostro array data

        setSearch({ search });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container fluid className="bg-dark text-light">
      <h2 className="pt-5 pb-3 text-start">{title}</h2>
      <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
        {search.map((movie, index) => (
          <SingleCol key={index} imageUrl={movie.Poster} />
        ))}
      </Row>
    </Container>
  );
};

export default ImgRow;

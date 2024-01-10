import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleCol from "./SingleCol";

class ImgRow extends Component {
  state = {
    search: [],
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  fetchMovies = async () => {
    try {
      let resp = await fetch("http://www.omdbapi.com/?apikey=c349cfd&s=" + this.props.queryParam);
      if (resp.ok) {
        let search = await resp.json();
        // salvare nello state il nostro array data

        this.setState({ search: search.Search });
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    console.log(this.state);
    return (
      <Container fluid className="bg-dark text-light">
        <h2 className="pt-5 pb-3 text-start">{this.props.title}</h2>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6">
          {this.state.search.map((movie, index) => (
            <SingleCol key={index} imageUrl={movie.Poster} />
          ))}
        </Row>
      </Container>
    );
  }
}
export default ImgRow;

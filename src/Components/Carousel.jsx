import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Carousel = ({ queryParam, title }) => {
  // state = {
  //   movies: [],
  // };

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, [movies]);

  const fetchMovies = async () => {
    try {
      let resp = await fetch("http://www.omdbapi.com/?apikey=c349cfd&s=" + queryParam);
      if (resp.ok) {
        let fetchedMovies = await resp.json();
        // salvare nello state il nostro array data

        setMovies(fetchedMovies);
      }
    } catch (error) {
      console.log(error);
    }
  };

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <h2 className="text-light mt-5 mb-3 ms-3 text-start">{title}</h2>
      <Slider {...settings}>
        {movies.Search &&
          movies.Search.map((movie) => (
            <Link to={`/${movie.imdbID}`}>
              <div className="m-0 p-0 images">
                <img
                  className="object-fit-cover w-100"
                  src={movie.Poster}
                  key={movie.imdbID}
                  height={350}
                  alt="cover"
                />
              </div>
            </Link>
          ))}
      </Slider>
    </div>
  );
};

export default Carousel;

import { React, useState, useEffect } from "react";
import "../styles/Movie.module.css";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";
const Movie = ({ movie }) => {
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    console.log(movie);
  });
  return (
    <div className="image-container">
      <img
        src={movie?.image}
        alt={movie?.title}
        width="95%"
        height="250"
        onClick={() => setModalShow(true)}
      />
      <MovieDetails show={modalShow} movie={movie} onHide={() => setModalShow(false)} />
    </div>
  );
};

export default Movie;

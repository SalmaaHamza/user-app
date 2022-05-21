import React from "react";
import "../styles/Movie.module.css";
const Movie = ({ movie }) => {
  return (
    <div className="image-container">
      <img src={movie?.image} alt={movie?.title} width="95%" height="30%"/>
    </div>
  );
};

export default Movie;

import React from 'react';
import "../styles/Movie.module.css";
const Movie = ({movie}) => {
  return (
    <div className="image-container">
      <img src={movie?.image} alt={movie?.title} />
    </div>
  );
};

export default Movie;
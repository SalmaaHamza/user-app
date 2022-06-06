import { PlayArrow } from "@material-ui/icons";
import { React, useState } from "react";
import "./movieListItem.css";
const MovieListItem = ({ movie, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const myVedio = "Trail.mp4";
  return (
    <>
      <div
        className="listItem"
        style={{ left: isHovered && index * 255 - 50 + index * 2.5 + 2 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={movie?.image} alt={movie?.title} />
        {isHovered && (
          <>
            <video  autoPlay={true} loop>
              <source src="Trailer.mp4" type="video/mp4" />
            </video>
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon"/>
              </div>
              <div className="itemInfoTop">
                <span>{" 1 hour and 40 Mins"}</span>
                <span>{movie.year ?? "  2022 "}</span>
              </div>
              <div className="desc">{movie.description}</div>
              <div>{movie.category}</div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default MovieListItem;

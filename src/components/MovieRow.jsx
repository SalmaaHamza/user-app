import { React } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Movie from "./Movie";
import "../styles/Movie.module.css";
// import { NavigateBeforeIcon, NavigateNextIcon } from "@mui/icons-material";

const MovieRow = ({ movies }) => {
  return (
    <div className="image-container d-flex align-items-start mt-4 mb-4">
      {movies?.map((e) => <Movie key={e?._id} movie={e}></Movie>) ?? (
        <div>Loading......</div>
      )}
    </div>
  );
};

export default MovieRow;

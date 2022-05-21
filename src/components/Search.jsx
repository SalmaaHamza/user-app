import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { useSelector } from "react-redux";
const Search = () => {
  const [movieName, setMovieName] = useState(null);
  const movies = useSelector(state => state.movies);
  const handleTextChange = (e) => {
    console.log(movies.filter(c => c.title.toLowerCase().includes(e.target.value)));
    setMovieName(e.target.value);
  };
  return (
    <div className="form-group d-flex">
      <div class="input-group">
        <input
          class="form-control border-right-0"
          onChange={handleTextChange}
          value={movieName}
        />
        <span class="input-group-append bg-white border-left-0">
          <span class="input-group-text bg-transparent">
            <i class="fa fa-search"></i>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Search;

import { React, useEffect } from "react";
import MovieRow from "../components/MovieRow";
import Trail from "../components/Trail";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../redux/actions/moviesActions";
import Featured from "../components/Featured";
const HomeModule = () => {
  const movies = useSelector((state) => state.movies);
  const listMovies = useSelector((state) => state.lists);
  useEffect(() => {
    listMovies?.forEach((el, i, arr) => {
      arr[i].content = el?.content?.map((c) => movies.find((m) => m._id === c));
    });
  }, [listMovies, movies]);

  // const dispatch =x useDispatch();
  useEffect(() => {
    console.log(listMovies);
  });
  return (
    <>
      <Featured />
        {listMovies?.map((c) => (
      <div className="row">
          <div key={c._id}>
            <h1 className="text-light">{c?.title}</h1>
            <MovieRow movies={c?.content} />
          </div>
      </div>
        ))}
    </>
  );
};

export default HomeModule;

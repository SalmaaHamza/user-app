import { React, useEffect } from "react";
import MovieRow from "../components/MovieRow";
import Trail from "../components/Trail";
import { getAllMovies } from "../redux/actions/moviesActions";
import { useDispatch } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

const HomeModule = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  return (
    <>
      <Trail />
      <div className='row'>
        <MovieRow/>
      </div>
    </>
  );
};

export default HomeModule;

import { React, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllMovies } from "../redux/actions/moviesActions";
import listsActions from "../redux/actions/listsActions";
import HomeModule from "../modules/HomeModule";
const Home = ({ type }) => {
  const dispatch = useDispatch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  useEffect(() => {
    dispatch(listsActions(type, ""));
  }, [dispatch, type]);

  return <HomeModule type={type} />;
};

export default Home;

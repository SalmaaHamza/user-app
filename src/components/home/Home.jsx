import React from "react";
import Navbar from "../navbar/Navbar";
import styles from "./Home.css";
import Featured from "../featured/Featured";
import MovieList from "../movieList/MovieList";
import Header from "../Header";
import { useSelector } from "react-redux";
const Home = ({ type }) => {
  const moviesList = useSelector((state) => state.lists);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {moviesList?.map((list) => (
        <MovieList movies={list?.content} title={list?.title} />
      ))}
    </div>
  );
};

export default Home;

import React from "react";
import MovieRow from "../components/MovieRow";
import Trail from "../components/Trail";
import "bootstrap/dist/css/bootstrap.css";

const HomeModule = () => {
  const items = Array(5).fill(0);
  return (
    <div className="container-fluid bg-dark py-4">
      <div className="my-4">
        <Trail />
      </div>
      {items.map(() => (
        <div className="my-3 text-align-start">
          <h1 className="text-light my-3 text-lg-left"> This Header</h1>
          <MovieRow />
        </div>
      ))}
    </div>
  );
};

export default HomeModule;

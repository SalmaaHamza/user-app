import React from "react";
// import { InfoOutlined, PlayArrow } from "@material-ui/icons";
const Featured = () => {
  return (
    <div className="featured">
      <img src="logo192.png" alt="" />
      <div className="info">
        <img src="Trailer.mp4" alt="" />
        <span className="desc">SOSOSOSOSOSOSOSOSOOSOSOSOSOSOSO</span>
        <div className="buttons">
          <button className="play">
            {/* <PlayArrow /> */}
            <span>Play</span>
          </button>
          <button className="more">
            {/* <InfoOutlined /> */}
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;

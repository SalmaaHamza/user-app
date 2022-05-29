import { Dropdown } from "bootstrap";
import React from "react";
import '../styles/Trail.module.css'
const Trail = () => {

  return (
    <div className="w-100" >

      <video width="100%" height="600">
        <source src="Trailer.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Trail;

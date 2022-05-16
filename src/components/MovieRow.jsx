import { Carousel } from "react-bootstrap";
import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

const MovieRow = () => {
  const img = "https://loremflickr.com/320/240";

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <Carousel
        interval={null}
        activeIndex={index}
        onSelect={handleSelect}
        controls="false"
      >
        <Carousel.Item>
          <a href="https://arizonaatwork.com" className="col-3 mx-0">
            <img className="  mx-0" src={img} alt="First slide" />
          </a>
          <a href="https://arizonaatwork.com" className="col-3 mx-0">
            <img className="  mx-0" src={img} alt="First slide" />
          </a>
          <a href="https://arizonaatwork.com" className="col-3 mx-0">
            <img className="  mx-0" src={img} alt="First slide" />
          </a>
          <a href="https://arizonaatwork.com" className="col-3 mx-0">
            <img className="  mx-0" src={img} alt="First slide" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://arizonaatwork.com" className="col-3 mx-0">
            <img className="  mx-0" src={img} alt="First slide" />
          </a>
          <a href="https://arizonaatwork.com" className="col-3 mx-0">
            <img className="  mx-0" src={img} alt="First slide" />
          </a>
          <a href="https://arizonaatwork.com" className="col-3 mx-0">
            <img className="  mx-0" src={img} alt="First slide" />
          </a>
          <a href="https://arizonaatwork.com" className="col-3 mx-0">
            <img className="  mx-0" src={img} alt="First slide" />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://arizonaatwork.com" className="col-3 mx-0">
            <img className="mx-0" src={img} alt="First slide" />
          </a>
          <a href="https://arizonaatwork.com" className="col-3 mx-0">
            <img className="mx-0" src={img} alt="First slide" />
          </a>
          <a href="https://arizonaatwork.com" className="col-3 mx-0">
            <img className="mx-0" src={img} alt="First slide" />
          </a>
          <a href="https://arizonaatwork.com" className="col-3 mx-0">
            <img className="mx-0" src={img} alt="First slide" />
          </a>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default MovieRow;

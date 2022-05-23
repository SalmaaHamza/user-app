import { React } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieDetails = (props) => {
  return (
    <div>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        contentClassName="bg-dark text-light"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.movie?.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>{props.movie?.description}</p>
          <video
            width="100%"
            height="600"
            src="Trailer.mp4"
            type="video/mp4"
            controls
          ></video>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieDetails;

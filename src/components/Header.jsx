import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
const Header = () => {
  // const [selectedType, setSelectedType] = useState(0);
  // const [selectedGenre, setSelectedGenre] = useState(0);
  // const types = ["Movies", "Series"];
  // const genere = ["G1", "G2", "G3"];
  return (
    <div className="text-light">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            {/* <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              width="10"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            /> */}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-light"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link className="text-light" href="/">
                Home
              </Nav.Link>
              <Nav.Link className="text-light" href="/movies">
                Movies
              </Nav.Link>
              <Nav.Link className="text-light" href="/series">
                Series
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

import { React } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search";
import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  FormControl,
  Form,
  Button,
} from "react-bootstrap";
const Header = () => {
  return (
    <div className="text-light">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              width="150"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0 text-light"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Search />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

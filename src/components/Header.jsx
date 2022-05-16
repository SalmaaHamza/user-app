import { React } from "react";
import "bootstrap/dist/css/bootstrap.css";

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
          <Navbar.Brand href="#">
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
            >
              <Nav.Link href="#action1" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link href="#action2" className="text-light">
                Link
              </Nav.Link>
              <NavDropdown
                title={<span className="text-light my-auto">Categories</span>}
                id="navbarScrollingDropdown"
                className="text-light"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="text-light" href="#" disabled>
                Link
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

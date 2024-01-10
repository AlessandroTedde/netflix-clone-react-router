import { Navbar, Container, Nav } from "react-bootstrap";
import TopBarRight from "./TopBarRight";

const TopBar = ({ source }) => {
  return (
    <Navbar expand="lg" className="bg-dark text-light">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={source} alt="" height="60" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className="text-light" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="text-light" href="#link">
              TV Shows
            </Nav.Link>
            <Nav.Link className="text-light" href="#link">
              Movies
            </Nav.Link>
            <Nav.Link className="text-light" href="#link">
              Recently Added
            </Nav.Link>
            <Nav.Link className="text-light" href="#link">
              My List
            </Nav.Link>
          </Nav>
          <span>
            <TopBarRight />
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;

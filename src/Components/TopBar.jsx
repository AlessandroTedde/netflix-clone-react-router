import { Navbar, Container, Nav } from "react-bootstrap";
import TopBarRight from "./TopBarRight";
import { Link } from "react-router-dom";

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
            <Link className="text-light nav-link" to={"/"}>
              Home
            </Link>
            <Link className="text-light nav-link" to={"trending-now"}>
              Trending Now
            </Link>
            <Link className="text-light nav-link" to={"watch-it-again"}>
              Watch It Again
            </Link>
            <Link className="text-light nav-link" to={"new-releases"}>
              New Releases
            </Link>
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

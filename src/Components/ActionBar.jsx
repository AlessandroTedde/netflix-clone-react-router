import { Container, Dropdown } from "react-bootstrap";
import ActionBarRight from "./ActionBarRight";

const ActionBar = () => {
  return (
    <Container fluid className="bg-dark text-light">
      <div className="d-flex justify-content-between align-items-center pt-4">
        <div className="d-flex gap-3 align-items-center">
          <h1>TV Shows</h1>
          <Dropdown>
            <Dropdown.Toggle variant="dark" id="dropdown-basic" className="rounded-0 border border-light">
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark">
              <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <ActionBarRight />
      </div>
    </Container>
  );
};
export default ActionBar;

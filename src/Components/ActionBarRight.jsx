import { Grid, Grid3x3 } from "react-bootstrap-icons";

const ActionBarRight = () => {
  return (
    <div className="d-flex gap-4 align-items-center">
      <a className="text-light" href="#layout">
        <Grid className="fs-4" />
      </a>
      <a className="text-light" href="#layout">
        <Grid3x3 className="fs-4" />
      </a>
    </div>
  );
};
export default ActionBarRight;

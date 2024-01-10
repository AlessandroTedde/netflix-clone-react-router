import { Search, Bell, PersonCircle } from "react-bootstrap-icons";

const TopBarRight = () => {
  return (
    <div className="d-flex gap-2 align-items-center">
      <Search />
      <span className="fw-bold">KIDS</span>
      <Bell />
      <PersonCircle />
    </div>
  );
};
export default TopBarRight;

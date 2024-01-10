import { Col } from "react-bootstrap";
import { Image } from "react-bootstrap";

const SingleCol = ({ imageUrl }) => (
  <Col>
    <Image className="w-100 h-50 object-fit-cover" src={imageUrl} alt="" fluid />
  </Col>
);

export default SingleCol;

import "./BreadСrumbs.scss";
import "../style.scss";
import { Link } from "react-router-dom";

function breadNav() {
  return (
    <>
      <div className="breadNav justify-between d-flex align-center	">
        <div className="d-flex width">
          <h6 className="grey mr-10">Page:</h6>
          <h6 className="mr-10">1</h6>
          <h6 className="mr-10">2</h6>
          <h6 className="green mr-10">3</h6>
          <h6 className=" mr-10">4</h6>
        </div>
        <button className="btn">Show more products</button>
        <h6 className="grey number width products">Products</h6>
      </div>
    </>
  );
}
export default breadNav;

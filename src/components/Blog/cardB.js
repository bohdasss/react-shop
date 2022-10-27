import "./Blog.scss";
import "../style.scss";
import { Link } from "react-router-dom";

function cardA() {
  return (
    <>
      <Link to="BlogDetail">
        <div className="blog__two-box">
          <img className="blog__two-img"></img>
          <div className="blog__two-content">
            <h6 className="blog__two-text green ">Vegetable</h6>
            <h4 className="blog__two-title">
              Which vegetable your family will love and want’s eat each day
            </h4>
            <h6>
              Author
              <span className="ml-15">17. 6. 2020</span>
            </h6>
          </div>
        </div>
      </Link>
    </>
  );
}
export default cardA;

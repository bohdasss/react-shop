import "./Blog.scss";
import "../style.scss";
import { Link } from "react-router-dom";

function cardABig() {
  return (
    <>
      <Link to="BlogDetail">
        <div className="big__one-box pos-r">
          <h6 className="big__one-text green ">Dinner tips</h6>
          <div className="big__bg"></div>
          <div className="big__one-content pos-a ">
            <h3 className="big__one-title">
              This is a space for your blog headline, it can be long don’t worry
              about that
            </h3>
            <div className="big__one-inner d-flex align-center mt-15	">
              <div className="big__one-autor mr-10"></div>
              <h6>
                Author
                <span className="ml-15">17. 6. 2020</span>
              </h6>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
export default cardABig;

import "./Blog.scss";
import "../style.scss";
import { Link, Outlet } from "react-router-dom";

function CardB() {
  return (
    <>
      <Link to="BlogDetail">
        <div className="blog__one-box pos-r">
          <div className="blog__one-content pos-a ">
            <h6 className="blog__one-text green pos-a">Dinner tips</h6>
            <h3 className="blog__one-title">
              Our chef tips for a great and tasty dinner ready in 20 minutes
            </h3>
            <div className="blog__one-inner d-flex align-center mt-15	">
              <div className="blog__one-autor mr-10"></div>
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
export default CardB;

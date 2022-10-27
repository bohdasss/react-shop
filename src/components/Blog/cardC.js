import { Link } from "react-router-dom";

function CardC() {
  return (
    <>
      <div className="blog__tree-box">
        <Link to="BlogDetail">
          <div className="blog__tree mb-30 d-flex justify-between">
            <div className="blog__tree-content 	">
              <p className="blog__tree-title ">
                Which vegetable your family will love and want’s eat each day
              </p>
              <h6>
                Author
                <span className="ml-15">17. 6. 2020</span>
              </h6>
            </div>
            <img className="blog__tree-img" />
          </div>
        </Link>
        <Link to="BlogDetail">
          <div className="blog__tree mb-30 d-flex justify-between">
            <div className="blog__tree-content 	">
              <p className="blog__tree-title ">
                Which vegetable your family will love and want’s eat each day
              </p>
              <h6>
                Author
                <span className="ml-15">17. 6. 2020</span>
              </h6>
            </div>
            <img className="blog__tree-img" />
          </div>
        </Link>
        <Link to="BlogDetail">
          <div className="blog__tree mb-30 d-flex justify-between">
            <div className="blog__tree-content 	">
              <p className="blog__tree-title ">
                Which vegetable your family will love and want’s eat each day
              </p>
              <h6>
                Author
                <span className="ml-15">17. 6. 2020</span>
              </h6>
            </div>
            <img className="blog__tree-img" />
          </div>
        </Link>
      </div>
    </>
  );
}
export default CardC;

import "./Filter.scss";
import "../style.scss";
import { Link } from "react-router-dom";

function Filter(props) {
  return (
    <>
      <div className="filterNav">
        <div className="filterNav-box">
          <h4 className="filterNav__title mb-20">{props.title}</h4>
          <ul className="mb-50">
            <li className="mb-15">
              <a className="green  d-block underline" href="">
                {props.text_one}
              </a>
            </li>
            <li className="mb-15">
              <a className="green d-block underline" href="">
                {props.text_two}
              </a>
            </li>
            <li className="mb-15">
              <a className="green d-block underline" href="">
                {props.text_tree}
              </a>
            </li>
            <li className="mb-15">
              <a className="green d-block underline" href="">
                {props.text_four}
              </a>
            </li>
            <li className="">
              <a className="green d-block underline" href="">
                {props.text_five}
              </a>
            </li>
          </ul>
        </div>
        <Link to="Detail">
          <button className="btnGrey-ar_right">
            More categories
            <img
              className="btn-ar"
              width={10}
              height={10}
              src="/img/ar-bl.svg"
            ></img>
          </button>
        </Link>
      </div>
    </>
  );
}
export default Filter;

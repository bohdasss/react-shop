import "./Filter.scss";
import "../style.scss";
import { Link } from "react-router-dom";

function FilterA(props) {
  return (
    <>
      <div className="filterNav  mt-50">
        <div className="filterNav-box">
          <h4 className="filterNav__title mb-20">{props.title}</h4>
          <ul className="mb-50">
            <li className="mb-15">
              <a className="green d-block" href="">
                {props.text_one}
              </a>
            </li>
            <li className="mb-15">
              <a className="green d-block" href="">
                {props.text_two}
              </a>
            </li>
            <li className="mb-15">
              <a className="green d-block" href="">
                {props.text_tree}
              </a>
            </li>
            <li className="mb-15">
              <a className="green d-block" href="">
                {props.text_four}
              </a>
            </li>
            <li className="">
              <a className="green d-block" href="">
                {props.text_five}
              </a>
            </li>
            <li className="">
              <a className="green d-block" href="">
                {props.text_six}
              </a>
            </li>
            <li className="">
              <a className="green d-block" href="">
                {props.text_seven}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default FilterA;

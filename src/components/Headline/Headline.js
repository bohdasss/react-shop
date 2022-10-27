import "./Headline.scss";
import "../style.scss";
import { Link } from "react-router-dom";

function Headline() {
  return (
    <>
      <div className="customers__block d-flex justify-between align-center pb-30 pt-50">
        <h4 className="customers__title ">Our customers says</h4>
        <button className="btnTran_Right ">
          Product Detail
          <img
            className="btn-ar"
            width={10}
            height={10}
            src="/img/ar-bl.svg"
          ></img>
        </button>
      </div>
    </>
  );
}
export default Headline;

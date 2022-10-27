import "./Banner.scss";
import "../style.scss";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="pos-r">
        <img src="/img/bg-fon.png" />
        <div className="category pos-a">
          <h6 className="category__block-two-sub ">Banner subfocus</h6>
          <h3 className="category__block-two-title">Space for heading</h3>
          <button className="category__btn btnTranBorGreen_right">
            Product Detail
            <img
              className="btn-ar"
              width={10}
              height={10}
              src="/img/ar-bl.svg"
            ></img>
          </button>
        </div>
      </div>
    </>
  );
}
export default Banner;

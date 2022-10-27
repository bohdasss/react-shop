import "./CardV.scss";
import "../style.scss";
import { Link } from "react-router-dom";
import React from "react";

function CartV(props) {
  const [isAdded, setIsAdded] = React.useState(false);
  const onPlus = () => {
    setIsAdded(!isAdded);
  };
  return (
    <>
      <Link to="Detail">
        <div className="cover">
          <div className="cover__cart-inner">
            <img className="cover__cart-img" src={props.imageUrl} />
            <div className="cover__cart-inner-text">
              <p className="cover__cart-title">{props.name}</p>
              <h5 className="cover__cart-subtitle">{props.subTitle}</h5>
            </div>
            <div className="cover__cart-block">
              <div className="price">
                <div className="cover__cart-price">
                  {props.price} <span>USD</span>
                </div>
              </div>
              <Link to="Checkout">
                <button
                  className={isAdded ? "btn-click" : "btn"}
                  onClick={onPlus}
                >
                  Buy now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
export default CartV;

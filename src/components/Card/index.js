import "./Card.scss";
import "../style.scss";
import { Link } from "react-router-dom";

function Card() {
  return (
    <>
      <section className="component">
        <div className="cart">
          <div className="cart__inner">
            <img
              className="cart__img"
              width={268}
              height={280}
              src="img/1.png"
            />
            <div className="cart__box-one">
              <h4 className="cart__title">Product title</h4>
              <h6 className="cart__text">
                Space for a small product description{" "}
              </h6>
              <div className="cart__star star">
                <img className="star" src="img/vector-3.svg" />
                <img className="star" src="/img/vector-3.svg" />
                <img className="star" src="img/vector-3.svg" />
                <img className="star" src="img/vector-3.svg" />
                <img className="star" src="img/vector-2.svg" />
              </div>
              <div className="cart__description grey">
                <div className="cart__description-one">
                  <div className="cart__description-block">
                    <h6>Fresheness</h6>
                  </div>
                  <div className="cart__description-block">
                    <h6>Farm</h6>
                  </div>
                  <div className="cart__description-block">
                    <h6>Delivery</h6>
                  </div>
                  <div className="cart__description-block">
                    <h6>Stock</h6>
                  </div>
                </div>
                <div className="cart__description-one">
                  <div className="cart__description-block">
                    <h6>
                      <span className="green">New</span> Extra fresh
                    </h6>
                  </div>
                  <div className="cart__description-block">
                    <h6>Grocery Tarm Fields</h6>
                  </div>
                  <div className="cart__description-block">
                    <h6>Europe</h6>
                  </div>
                  <div className="cart__description-block">
                    <h6>
                      <span className="green">320 pcs</span>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="cart__price">
              <div className="cart__block-price">
                <h4 className="price">36.99 USD</h4>
                <h6 className="subprice grey">48.56</h6>
              </div>
              <div className="cart__block-description grey">
                <h6>Free Shipping</h6>
                <h6>Delivery in 1 day</h6>
              </div>
              <div className="cart__block-button">
                <div className="pos-r">
                  <img
                    className="btn-ar"
                    width={10}
                    height={10}
                    src="/img/ar.svg"
                  ></img>
                  <Link to="Detail">
                    <button className="btnGreen">Product Detail</button>
                  </Link>
                </div>
                <div className="pos-r">
                  <img
                    className="btn-love"
                    width={15}
                    height={13}
                    src="/img/love.svg"
                  ></img>
                  <button className="btnGrey">Product Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Card;

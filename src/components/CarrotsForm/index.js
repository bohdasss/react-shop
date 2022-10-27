import "./CarrotsForm.scss";
import "../style.scss";
import { Link } from "react-router-dom";

function CarrotsForm() {
  return (
    <>
      <div className="form d-flex">
        <div className="form__block d-flex flex-column">
          <div className="form__inner mb-30 pos-r">
            <img
              className=""
              src="../img/bg-fon.png"
              width={570}
              height={436}
            ></img>
            <div className="form__content d-flex pos-a">
              <h6 className="green_block mr-10 ">- 36 %</h6>
              <h6 className="green_block ">Free shipping</h6>
            </div>
          </div>
          <img
            className="mb-30"
            src="../img/bg-fon.png"
            width={570}
            height={436}
          ></img>
          <img
            className=""
            src="../img/bg-fon.png"
            width={570}
            height={436}
          ></img>
        </div>
        <div className="form__block  d-flex flex-column ml-30">
          <div className="form__inner mb-40">
            <h1 className="">Carrots from Tomissy Farm</h1>
            <div className=" d-flex align-center mt-10 mb-40">
              <div className="d-flex mr-10 ">
                <img className="star" src="/img/vector-3.svg" alt="" />
                <img className="star" src="/img/vector-3.svg" alt="" />
                <img className="star" src="/img/vector-3.svg" alt="" />
                <img className="star" src="/img/vector-3.svg" alt="" />
                <img className="star" src="/img/vector-3.svg" alt="" />
              </div>
              <a href="#">
                <h6 className="grey">(1 customer review)</h6>
              </a>
            </div>
            <p className="mb-40 mt-10">
              Carrots from Tomissy Farm are one of the best on the market.
              Tomisso and his family are giving a full love to his Bio products.
              Tomisso’s carrots are growing on the fields naturally.
            </p>
            <div className="d-flex">
              <div className="cart__description grey mr-30">
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
          </div>
          <div className="form__price d-flex justify-between">
            <div>
              <h2 className="green">36.23 USD</h2>
              <h6 className="grey subprice">48.56 USD</h6>
            </div>
            <div className=" d-flex align-center	">
              <div className="form__input ">
                <input className="input" type="number"></input>
                <select className="form__select pl-30">
                  <option className="">Pcs</option>
                  <option className="">Pcs</option>
                </select>
              </div>
              <button className="addToCart ml-25">Add to cart</button>
            </div>
          </div>
          <div className="d-flex mt-25 mb-10">
            <a className="form__link-heart mr-30" href="">
              <p className="fw-bold">Add to my wish list</p>
            </a>
            <a className="form__link-option" href="">
              <p className="fw-bold">Compare</p>
            </a>
          </div>
          <div className=" mt-50">
            <div className="form__filter d-flex justify-between pb-20 mb-50">
              <a href="#">
                <h4 className="fw-bold">Description</h4>
              </a>
              <a href="#">
                <h4 className="fw-bold">Reviews</h4>
              </a>
              <a href="#">
                <h4 className="fw-bold">Questions</h4>
              </a>
            </div>
            <div className="form__content">
              <div>
                <div className="mb-35">
                  <p className="mb-10">Origins</p>
                  <p className="form__text">
                    We work hard to ensure that the fruit and vegetables we sell
                    are fresh and high in quality. If we don’t grow them
                    ourselves, we source them from carefully chosen suppliers,
                    preferring to buy locally whenever possible.
                  </p>
                </div>
                <div className="mb-35">
                  <p className="mb-10">Origins</p>
                  <p className="form__text">
                    We work hard to ensure that the fruit and vegetables we sell
                    are fresh and high in quality. If we don’t grow them
                    ourselves, we source them from carefully chosen suppliers,
                    preferring to buy locally whenever possible.
                  </p>
                </div>
              </div>
              <p className="mb-15 mt-35">Full of Vitamins!</p>
              <table className="table">
                <tr className="hr">
                  <th className="fw-bold">Vitamins</th>
                  <th className="fw-bold">Quantity</th>
                  <th className="fw-bold">% DV</th>
                </tr>
                <tr>
                  <td className="greyBg">Vitamin A equiv.</td>
                  <td className="greyBg">735 μg</td>
                  <td className="greyBg">104 %</td>
                </tr>
                <tr>
                  <td>Vitamin A equiv.</td>
                  <td>735 μg</td>
                  <td>104 %</td>
                </tr>
                <tr>
                  <td className="greyBg">Vitamin A equiv.</td>
                  <td className="greyBg">735 μg</td>
                  <td className="greyBg">104 %</td>
                </tr>
                <tr>
                  <td>Vitamin A equiv.</td>
                  <td>735 μg</td>
                  <td>104 %</td>
                </tr>
                <tr>
                  <td className="greyBg">Vitamin A equiv.</td>
                  <td className="greyBg">735 μg</td>
                  <td className="greyBg">104 %</td>
                </tr>
                <tr>
                  <td>Vitamin A equiv.</td>
                  <td>735 μg</td>
                  <td>104 %</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CarrotsForm;

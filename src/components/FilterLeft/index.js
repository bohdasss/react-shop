// import "./FilterBig.scss";
import "../style.scss";
import "../style.scss";
import "./FilterLeft.scss";
import { Link } from "react-router-dom";

import Card from "../Card";
function FilterLeft() {
  return (
    <>
      <div className="leftf">
        <div class="leftf__content">
          <div class="leftf__block-content mr-35">
            <div class="leftf__filter">
              <div class="leftf__filter-inner">
                <div class="leftf__filter-title mb-15">
                  <h4 class="">Categories</h4>
                </div>
                <div class="leftf__filter-text d-flex justify-between align-center mb-10">
                  <a class="" href="#">
                    Vegetables
                  </a>
                  <div class="leftf__filter-text-number">320</div>
                </div>
                <div class="leftf__filter-text d-flex justify-between align-center mb-10">
                  <a class="" href="#">
                    Fruits
                  </a>
                  <div class="leftf__filter-text-number">112</div>
                </div>
                <div class="leftf__filter-text d-flex justify-between align-center mb-10">
                  <a class="" href="#">
                    Kitchen Accessories
                  </a>
                  <div class="leftf__filter-text-number">32</div>
                </div>
                <div class="leftf__filter-text d-flex justify-between align-center">
                  <a class="" href="#">
                    Chefs Tips
                  </a>
                  <div class="leftf__filter-text-number">48</div>
                </div>
              </div>

              <div class="leftf__filter-inner">
                <div class="leftf__filter-title filter-title">
                  <h4 class="mb-15">Brands</h4>
                </div>

                <label class="custom-checkbox d-flex align-center	 mb-10">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h5>Filtre by brand item</h5>
                </label>

                <label class="custom-checkbox d-flex align-center	 mb-10">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h5>Filtre by brand item</h5>
                </label>

                <label class="custom-checkbox d-flex align-center	 mb-10">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h5>Filtre by brand item</h5>
                </label>

                <label class="custom-checkbox d-flex align-center	 mb-10">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <h5>Filtre by brand item</h5>
                </label>
              </div>

              <div class="leftf__filter-inner">
                <div class="leftf__filter-title filter-title">
                  <h4 class="mb-15">Rating</h4>
                </div>

                <label class="custom-checkbox d-flex mb-10">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="d-flex align-center	 mr-15">
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-3.svg" alt="" />
                  </div>
                </label>

                <label class="custom-checkbox d-flex mb-10">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="d-flex align-center	 mr-15">
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-2.svg" alt="" />
                  </div>
                </label>

                <label class="custom-checkbox d-flex mb-10">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="d-flex align-center	 mr-15">
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-2.svg" alt="" />
                    <img className="star" src="/img/vector-2.svg" alt="" />
                  </div>
                </label>

                <label class="custom-checkbox d-flex mb-10">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="d-flex align-center	 mr-15">
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-2.svg" alt="" />
                    <img className="star" src="/img/vector-2.svg" alt="" />
                    <img className="star" src="/img/vector-2.svg" alt="" />
                  </div>
                </label>

                <label class="custom-checkbox d-flex mb-10">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>

                  <div className="d-flex align-center	 mr-15">
                    <img className="star" src="/img/vector-3.svg" alt="" />
                    <img className="star" src="/img/vector-2.svg" alt="" />
                    <img className="star" src="/img/vector-2.svg" alt="" />
                    <img className="star" src="/img/vector-2.svg" alt="" />
                    <img className="star" src="/img/vector-2.svg" alt="" />
                  </div>
                </label>
              </div>

              <div class="leftf__filter-four">
                <div class="leftf__filter-title filter-title">
                  <h4 class="mb-15">Price</h4>
                  <div></div>
                  <div class="leftf__filter-four-block">
                    <div class="leftf__filter-four-min">
                      <span class="leftf__filter-four-text">Min</span>
                      <input
                        class="leftf__filter-four-input"
                        type="number"
                        placeholder="0"
                      />
                    </div>
                    <div class="leftf__filter-four-max">
                      <span class="leftf__filter-four-text">Max</span>
                      <input
                        class="leftf__filter-four-input"
                        type="number"
                        placeholder="000"
                      />
                    </div>
                  </div>
                  <div class="">
                    <button class="leftf__filter-four-btn btn">Apply</button>
                    <button class="btn-text">Reset</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FilterLeft;

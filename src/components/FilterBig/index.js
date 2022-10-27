// import "./FilterBig.scss";
import "../style.scss";
import "./FilterBig.scss";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import React from "react";
import CategoryList from "../../pages/CategoryList";
function FilterA() {
  return (
    <>
      <div className="filter d-flex justify-between align-center	">
        <h1 className="filter__title">Fruit and vegetables</h1>
        <ul className="filter__items d-flex">
          <li className="filter__list mr-25 ">
            <Link
              to="CategoryView"
              className="filter__link gridView green pl-20"
            >
              Grid view
            </Link>
          </li>
          <li className="filter__list mr-25 ">
            <Link
              to="CategoryList"
              className="filter__link grey listView pl-20"
            >
              List view
            </Link>
          </li>
          <li className="filter__list ">
            <a className="filter__link grey number" href="#">
              Products
            </a>
          </li>
        </ul>
      </div>
      <div class="filter__block-two d-flex mt-25">
        <div class="filter__filter-two d-flex align-center mr-15	">
          <label class="custom-checkbox d-flex align-center	">
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
            Filtre
          </label>
        </div>
        <div class="filter__filter-two d-flex align-center mr-15 ">
          <label class="custom-checkbox d-flex align-center	">
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
            Filtre
          </label>
          <h6 className="fw-bold ml-15 num">Nbm</h6>
        </div>
        <div class="filter__filter-two d-flex align-center mr-15">
          <label class="custom-checkbox d-flex align-center	">
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
            Filtre
          </label>
          <h6 className="fw-bold ml-15 num">Nbm</h6>
        </div>
        <div class="filter__filter-two d-flex align-center mr-15">
          <label class="custom-checkbox d-flex align-center	">
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
            Filtre
          </label>
          <h6 className="fw-bold ml-15 num">12</h6>
          <h6 className="fw-bold pl-50 icon pr-15">Select</h6>
        </div>
      </div>
      <div className="filter__wrapper f-flex mt-20 pb-50">
        <h6 className="grey d-ib mr-15">Applied filtres:</h6>
        <a href="">
          <h6 className="green d-ib pl-10 pr-25 cloze mr-15">
            Selected Filtre
          </h6>
        </a>
        <a href="">
          <h6 className="green d-ib pl-10 pr-25 cloze mr-15">
            Selected Filtre
          </h6>
        </a>
      </div>

      <Outlet />
    </>
  );
}
export default FilterA;

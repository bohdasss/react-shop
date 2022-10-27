import { Link } from "react-router-dom";
import input from "../Checkout/input";
const Search = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <div className=" header__search d-flex align-center">
        <div className="pos-r">
          <Link to="CategoryView" href="" className="header__search-title">
            All categories
          </Link>
          <svg
            width="10"
            height="10"
            viewBox="0 0 8 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.61035 1.40001L3.66535 3.45501C3.75903 3.54814 3.88576 3.60041 4.01785 3.60041C4.14994 3.60041 4.27667 3.54814 4.37035 3.45501L6.37035 1.45501"
              stroke="#6A983C"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
          </svg>
        </div>
        <div className="header__width"></div>
        <img
          className="header__search-btn"
          height={12}
          width={12}
          src="/img/search.svg"
        ></img>
        <input
          value={searchValue}
          className="header__input-search"
          type="text"
          placeholder="Search Products, categories ..."
          onChange={(e) => setSearchValue(e.target.value)}
        ></input>
        {searchValue && (
          <svg
            onClick={() => setSearchValue("")}
            className="cloze-bl"
            width="13"
            height="13"
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 12L1 1M12 1L1 12"
              stroke="#151515"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="bevel"
            />
          </svg>
        )}
      </div>
    </>
  );
};
export default Search;

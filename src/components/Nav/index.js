import "./Nav.scss";
import "../style.scss";
import Search from "./Search";
import SubNav from "./SubNav";
import { Link, NavLink } from "react-router-dom";
function Nav({ searchValue, setSearchValue }) {
  return (
    <>
      <div className="container">
        <div className="header d-flex flex-column">
          <div className="header__one d-flex justify-between">
            <div className="">
              <a className="green pr-30" href="">
                Chat with us
              </a>
              <a className="pr-30" href="">
                +420 336 775 664
              </a>
              <a className="" href="">
                info@freshnesecom.com
              </a>
            </div>
            <div>
              <NavLink to="Blog" className="green mr-35">
                Blog
              </NavLink>
              <NavLink to="Blog" className="green About Us mr-35">
                About Us
              </NavLink>
              <NavLink to="Blog" className="green Careers">
                Careers
              </NavLink>
            </div>
          </div>
          <div className="header__two d-flex justify-between align-center">
            <Link to="/">
              <img className="logo" src="/img/logo.svg"></img>
            </Link>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <div className="d-flex align-center">
              <a className="prof mr-45" href="">
                <img height={22} width={20} src="/img/prof.svg" />
              </a>
              <a className="header__basket" href="">
                <img height={22} width={20} src="/img/basket.svg" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <SubNav />
    </>
  );
}
export default Nav;

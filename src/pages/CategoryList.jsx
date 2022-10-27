import Bread from "../components/BreadСrumbs/breadNav.js";
import Tags from "../components/Tags";
import FilterLeft from "../components/FilterLeft";
import Card from "../components/Card";
import { Outlet } from "react-router-dom";
function CategoryList() {
  const arr = [
    {
      name: "Product Title",
      subTitle: "Space for a small product description ",
      price: "36.99 USD",
      imageUrl: "./img/bg-fon.png",
    },
    {
      name: "Product Title",
      subTitle: "Space for a small product description ",
      price: "26.44 USD",
      imageUrl: "./img/bg-fon.png",
    },
    {
      name: "Title",
      subTitle: "Space for a small",
      price: "6.9 USD",
      imageUrl: "./img/bg-fon.png",
    },
    {
      name: "Title",
      subTitle: "Space for a small",
      price: "6.9 USD",
      imageUrl: "./img/bg-fon.png",
    },
  ];
  return (
    <>
      <div className="d-flex justify-between">
        <FilterLeft />
        <div className="">
          <div className="mb-30">
            <Card />
          </div>
          <div className="mb-30">
            <Card />
          </div>
          <div className="mb-30">
            <Card />
          </div>
          <div className="mb-30">
            <Card />
          </div>
          <div className="mb-30">
            <Card />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
export default CategoryList;

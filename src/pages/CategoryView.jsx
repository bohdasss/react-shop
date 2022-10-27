import React from "react";
import FilterBig from "../components/FilterBig";
import BreadСrumbs from "../components/BreadСrumbs";
import Bread from "../components/BreadСrumbs/breadNav.js";
import Tags from "../components/Tags";
import FilterLeft from "../components/FilterLeft";
import CartV from "../components/CardV";

import "../index.scss";

function CategoryView(searchValue) {
  const [items, setItems] = React.useState([]);
  // const arr = [
  //   {
  //     name: "Product Title",
  //     subTitle: "Space for a small product description ",
  //     price: "36.99",
  //     imageUrl: "./img/bg-fon.png",
  //   },
  //   {
  //     name: "Product Title",
  //     subTitle: "Space for a small product description ",
  //     price: "26.44",
  //     imageUrl: "./img/bg-fon.png",
  //   },
  //   {
  //     name: "Title",
  //     subTitle: "Space for a small",
  //     price: "6.9",
  //     imageUrl: "./img/bg-fon.png",
  //   },
  //   {
  //     name: "Title",
  //     subTitle: "Space for a small",
  //     price: "6.9",
  //     imageUrl: "./img/bg-fon.png",
  //   },
  // ];

  React.useEffect(() => {
    fetch("https://634dca31f34e1ed8267e6b3d.mockapi.io/items?")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
      });
  }, []);
  return (
    <>
      <div className="container">
        <FilterBig />
        <div className="d-flex justify-between mb-50">
          <FilterLeft />
          <div className="block">
            {items.map((obj) => (
              <CartV key={obj.id} {...obj} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default CategoryView;
//  {
//    {arr.map((obj, index) => (
//             <CardV
//               key={index}
//               title={obj.name}
//               text={obj.subTitle}
//               price={obj.price}
//               imageUrl={obj.imageUrl}
//             />
//           ))}
//  }

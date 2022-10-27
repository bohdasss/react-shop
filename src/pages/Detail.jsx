import Nav from "../components/Nav";
import FilterA from "../components/Filter/filterA.js";
import Tags from "../components/Tags";
import BreadСrumbs from "../components/BreadСrumbs";
import CartV from "../components/CardV";
import Head from "../components/Headline/Headline.js";
import From from "../components/CarrotsForm";

function Detail() {
  const arr = [
    {
      imageUrl: "./img/bg-fon.png",
      subTitle: "Space for a small product description ",
      name: "Product Title",
      price: "36.99",
    },
    {
      name: "Product Title",
      subTitle: "Space for a small product description ",
      price: "26.44",
      imageUrl: "./img/bg-fon.png",
    },
    {
      name: "Title",
      subTitle: "Space for a small",
      price: "6.9",
      imageUrl: "./img/bg-fon.png",
    },
    {
      name: "Title",
      subTitle: "Space for a small",
      price: "6.9",
      imageUrl: "./img/bg-fon.png",
    },
  ];
  return (
    <div className="container">
      <BreadСrumbs />
      <From />
      <Head />
      <div className="justify-between d-flex align-start ">
        {arr.map((obj, index) => (
          <CartV
            key={index}
            title={obj.name}
            text={obj.subTitle}
            price={obj.price}
            imageUrl={obj.imageUrl}
          />
        ))}
      </div>

      <div className="d-flex justify-between">
        <FilterA></FilterA>
        <FilterA></FilterA>
        <FilterA></FilterA>
        <FilterA></FilterA>
      </div>
    </div>
  );
}
export default Detail;

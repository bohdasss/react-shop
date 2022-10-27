import "../index.scss";
import React from "react";
import Banner from "../components/Banner";
import Filter from "../components/Filter";
import CartV from "../components/CardV";
import Headline from "../components/Headline";
import Head from "../components/Headline/Headline.js";
import CardA from "../components/Blog/cardA.js";
import CardB from "../components/Blog/cardB.js";
import CardC from "../components/Blog/cardC.js";
import FilterA from "../components/Filter/filterA.js";
import Tags from "../components/Tags";
import MyLoader from "../pages/skeleton/skeleton.jsx";

function Home({ searchValue }) {
  const [items, setItems] = React.useState([]);
  const arr = [
    {
      name: "Product Title",
      subTitle: "Space for a small product description ",
      price: "36.99",
      imageUrl: "./img/bg-fon.png",
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
  const [isLoading, setIsLoading] = React.useState(true);
  const card = arr
    .filter((obj) => {
      if (
        obj.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
      ) {
        return true;
      }
      return false;
    })
    .map((obj) => <CartV key={obj.id} {...obj} />);
  const skeleton = [...new Array(4)].map((_, index) => (
    <MyLoader key={index} />
  ));

  React.useEffect(() => {
    const search = searchValue ? `&search${searchValue}` : "";
    fetch(`https://634dca31f34e1ed8267e6b3d.mockapi.io/items?${search}`)
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [searchValue]);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-between flex-wrap	mb-50 pt-50">
          <Filter
            title="Category menu"
            text_one="Bakery"
            text_two="Fruit and vegetables"
            text_tree="Meat and fish"
            text_four="Drinks"
            text_five="Kitchen"
          />
          <Banner />
          <Banner />
        </div>
        <div className="d-flex justify-between flex-wrap	mb-50 pt-50">
          <Filter
            title="Best selling products"
            text_one="Kitchen"
            text_two="Meat and fish"
            text_tree="Special nutrition"
            text_four="Pharmacy"
            text_five="Bady"
          />
          <CartV />
          <CartV />
          <CartV />
        </div>
        <div className="d-flex justify-between flex-wrap	mb-50 pt-50">
          <Filter
            title="Best from Farmers"
            text_one="Carrots"
            text_two="Tomatoes"
            text_tree="Potatoes"
            text_four="Chicken"
            text_five="Pork"
          />
          <CartV />
          <CartV />
          <CartV />
        </div>
        <Head />
        <Headline />
        <Head />
        <div className="justify-between	d-flex align-start">
          {isLoading ? skeleton : card}
        </div>
        <Head />
        <div className="d-flex justify-between mb-50 mt-50">
          <CardA />
          <CardB />
          <CardC />
        </div>
        <div className="d-flex justify-between mb-50 mt-50">
          <FilterA
            title="Get in touch"
            text_one="About Us"
            text_two="Careers"
            text_tree="Press Releases"
            text_four="Blog"
          />
          <FilterA
            title="Connections"
            text_one="Facebook"
            text_two="Twitter"
            text_tree="Instagram"
            text_four="Youtube"
            text_five="LinkedIn"
          />
          <FilterA
            title="Earnings"
            text_one="Become an Affiliate"
            text_two="Advertise your product"
            text_tree="Sell on Market"
          />
          <FilterA
            title="Account"
            text_one="Your account"
            text_two="Returns Centre"
            text_tree="100 % purchase protection"
            text_four="Chat with us"
            text_five="Help"
          />
        </div>
      </div>
    </>
  );
}
export default Home;

import Nav from "./components/Nav";
import Tags from "./components/Tags";
import Home from "../src/pages/Home";
import Detail from "../src/pages/Detail";
import Checkout from "../src/pages/Checkout";
import BlogDetail from "../src/pages/BlogDetail";
import Blog from "../src/pages/Blog";
import CategoryList from "./pages/CategoryList";
import CategoryView from "./pages/CategoryView";
import { Route, Routes } from "react-router-dom";

import React from "react";
function App() {
  const [searchValue, setSearchValue] = React.useState("");

  console.log(searchValue);

  return (
    <>
      <Nav searchValue={searchValue} setSearchValue={setSearchValue} />

      <Routes>
        <Route path="/" element={<Home searchValue={searchValue} />}></Route>
        <Route path="CategoryView/*" element={<CategoryView />}>
          <Route path="CategoryList" element={<CategoryList />} />
        </Route>
        <Route path="detail" element={<Detail />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="blogDetail" element={<BlogDetail />} />
        <Route path="blog" element={<Blog />}>
          <Route path="blogDetail" element={<BlogDetail />} />
        </Route>
      </Routes>
      <div className="container">
        <Tags />
      </div>
    </>
  );
}
export default App;

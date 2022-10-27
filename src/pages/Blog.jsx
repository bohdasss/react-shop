import Nav from "../components/Nav";
import BreadСrumbs from "../components/BreadСrumbs";
import CardB from "../components/Blog/cardB.js";
import BreadNav from "../components/BreadСrumbs/breadNav.js";
import FilterA from "../components/Filter/filterA.js";
import Tags from "../components/Tags";
import BannerBig from "../components/Blog/cardABig.js";
import "../index.scss";
function Blog() {
  return (
    <>
      <div className="container">
        <BreadСrumbs />
        <div className="d-flex justify-between">
          <BannerBig />
          <BannerBig />
        </div>
        <BreadNav />
        <div className="d-flex justify-between">
          <div className="d-flex flex-column	">
            <FilterA />
            <FilterA />
          </div>
          <div className="block">
            <CardB />
            <CardB />
            <CardB />
            <CardB />
            <CardB />
            <CardB />
            <CardB />
            <CardB />
            <CardB />
          </div>
        </div>
        <div className="d-flex justify-between">
          <FilterA />
          <FilterA />
          <FilterA />
          <FilterA />
        </div>
      </div>
    </>
  );
}
export default Blog;

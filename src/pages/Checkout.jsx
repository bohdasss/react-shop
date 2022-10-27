import Nav from "../components/Nav";
import BreadСrumbs from "../components/BreadСrumbs";
import Checkout from "../components/Checkout/index";
function checkout() {
  return (
    <>
      <div className="container">
        <BreadСrumbs />
        <Checkout />
      </div>
    </>
  );
}
export default checkout;

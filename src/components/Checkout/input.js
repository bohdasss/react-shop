function input() {
  return (
    <>
      <div>
        <div className="mt-30 d-flex ">
          <div>
            <img
              className="mb-15"
              src="../img/bg-fon.png"
              width={100}
              height={67}
            ></img>
            <div className="d-flex flex-column">
              <a className="grey pl-25 mb-10 wishlist" href="">
                <h6 className="grey">Wishlist</h6>
              </a>
              <a className="grey pl-25 mb-10 compare" href="">
                <h6 className="grey">Compare</h6>
              </a>
              <a className="grey pl-25 mb-10 remove" href="">
                <h6 className="grey">Remove</h6>
              </a>
            </div>
          </div>
          <div className=" ml-20">
            <div className="checkout__cart">
              <p className="mb-10">Product title</p>
              <div className="d-flex  mb-10 ">
                <h6 className="grey">Farm:</h6>
                <h6 className=" ml-15">Tharamis Farm</h6>
              </div>
              <div className="d-flex mb-10">
                <h6 className="grey">Farm:</h6>
                <h6 className=" ml-15">Tharamis Farm</h6>
              </div>
              <div className="d-flex mr-15 mb-20">
                <img className="star" src="/img/vector-3.svg" alt="" />
                <img className="star" src="/img/vector-3.svg" alt="" />
                <img className="star" src="/img/vector-3.svg" alt="" />
                <img className="star" src="/img/vector-3.svg" alt="" />
                <img className="star" src="/img/vector-3.svg" alt="" />
              </div>
              <div className="price d-flex justify-between align-center pb-20	">
                <div className="checkout__price ">
                  <h4 className="green">36.99 USD</h4>
                  <h6 className="subprice">48.56 USD</h6>
                </div>
                <div className="checkout__input  ">
                  <input
                    className="input"
                    type="number"
                    placeholder="1pcs "
                  ></input>
                  <select className="checkout__select ">
                    <option className="">Pcs</option>
                    <option className="">cs</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default input;

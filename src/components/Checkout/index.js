import "../style.scss";
import "./Checkout.scss";
import "../CarrotsForm/CarrotsForm.scss";
import OrderSummary from "./input";
function Checkout() {
  return (
    <>
      <div className="checkout d-flex justify-between">
        <div className="form__inputt ">
          <div>
            <div className="form__title mb-30">
              <h3 className="fw-bold">Billing info</h3>
              <div className="d-flex justify-between mt-10">
                <h6 className="grey">Please enter your billing info</h6>
                <h6 className="grey">Step 1 of 5</h6>
              </div>
            </div>
            <div className="form__billing d-flex justify-between">
              <div className="">
                <div className="mb-35">
                  <h6 className="fw-bold">First name</h6>
                  <div>
                    <input
                      className="input-v"
                      type="text"
                      placeholder="First name"
                    ></input>
                  </div>
                </div>
                <div className="mb-35">
                  <h6 className="fw-bold">First name</h6>
                  <div>
                    <input
                      className="input-v"
                      type="text"
                      placeholder="First name"
                    ></input>
                  </div>
                </div>
                <div className="mb-35">
                  <h6 className="fw-bold">First name</h6>
                  <div>
                    <input
                      className="input-v"
                      type="text"
                      placeholder="First name"
                    ></input>
                  </div>
                </div>
                <div className="mb-35">
                  <h6 className="fw-bold">First name</h6>
                  <div>
                    <input
                      className="input-v"
                      type="text"
                      placeholder="First name"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="mb-35">
                  <h6 className="fw-bold">First name</h6>
                  <div>
                    <input
                      className="input-v"
                      type="text"
                      placeholder="First name"
                    ></input>
                  </div>
                </div>
                <div className="mb-35">
                  <h6 className="fw-bold">First name</h6>
                  <div>
                    <input
                      className="input-v"
                      type="text"
                      placeholder="First name"
                    ></input>
                  </div>
                </div>
                <div className="mb-35">
                  <h6 className="fw-bold">First name</h6>
                  <div>
                    <input
                      className="input-v"
                      type="text"
                      placeholder="First name"
                    ></input>
                  </div>
                </div>
                <div className="mb-35">
                  <h6 className="fw-bold">First name</h6>
                  <div>
                    <input
                      className="input-v"
                      type="text"
                      placeholder="First name"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="form__check-box d-flex align-center mb-15">
              <label class="custom-checkbox d-flex ">
                <input class="hidden-checkbox" type="checkbox" />
                <div class="checkbox">
                  <svg
                    class="checkmark"
                    width="14"
                    height="10"
                    viewBox="0 0 14 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                      stroke="#FDFDFD"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </label>
              <h6>Ship to a different address?</h6>
            </div>
          </div>

          <div>
            <div className="form__title mb-30 mt-50 ">
              <h3 className="fw-bold">Billing info</h3>
              <div className="d-flex justify-between mt-10">
                <h6 className="grey">Please enter your billing info</h6>
                <h6 className="grey">Step 2 of 5</h6>
              </div>
            </div>
            <div className="form__radio d-flex align-center justify-between mb-15">
              <div className="d-flex align-center">
                <label class="custom-checkbox d-flex ">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </label>
                <h6 className="fw-bold">FedEx</h6>
              </div>
              <div className="d-flex align-center">
                <h6 className="fw-bold green">+32 USD</h6>
                <h6 className="fw-bold ">Additional price</h6>
              </div>
              <div className="">
                <svg
                  width="54"
                  height="16"
                  viewBox="0 0 54 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.9625 5.6377L47.1961 8.01844L49.3464 5.6377H53.9381L49.4507 10.5181L53.9996 15.4385H49.2226L47.0101 13.0389L44.8177 15.4385H40.2051L44.7142 10.5385L40.2051 5.6377H44.9625Z"
                    fill="#F85604"
                  />
                  <path
                    d="M40.2077 5.63776V8.94918H35.1008V11.9878H40.2077V15.4385H31.3477V0H40.2077V3.44127H35.1008V5.63776H40.2077Z"
                    fill="#F85604"
                  />
                  <path
                    d="M27.6092 0V6.31818H27.568C26.74 5.39838 25.7064 5.07848 24.5071 5.07848C22.05 5.07848 20.199 6.69466 19.5494 8.83021C18.8077 6.47704 16.8966 5.03423 14.063 5.03423C11.7619 5.03423 9.9446 6.0331 8.99657 7.66088V5.63776H4.2399V3.44127H9.43084V0H0V15.4385H4.2399V8.94918H8.4663C8.3403 9.42576 8.27279 9.93644 8.27279 10.4754C8.27279 13.6954 10.8169 15.9558 14.063 15.9558C16.7931 15.9558 18.5924 14.7161 19.5434 12.4565H15.9096C15.4183 13.1361 15.0455 13.3371 14.063 13.3371C12.9237 13.3371 11.9412 12.3759 11.9412 11.2363H19.3402C19.6612 13.7941 21.7215 16 24.5484 16C25.7679 16 26.8847 15.4197 27.5672 14.4404H27.6085V15.44H31.3459V0H27.6092ZM12.0597 8.99488C12.2952 8.01415 13.082 7.37362 14.0638 7.37362C15.1445 7.37362 15.8908 7.99456 16.0873 8.99488C16.1698 8.99488 12.0597 8.99488 12.0597 8.99488ZM25.3404 13.0883C23.9626 13.0883 23.1061 11.8464 23.1061 10.5501C23.1061 9.16462 23.8509 7.83207 25.3404 7.83207C26.8847 7.83207 27.4997 9.16462 27.4997 10.5501C27.4997 11.8638 26.848 13.0883 25.3404 13.0883Z"
                    fill="#2B017B"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div>
            <div className="form__title mb-35 mt-50 ">
              <h3 className="fw-bold">Billing info</h3>
              <div className="d-flex justify-between mt-10">
                <h6 className="grey">Please enter your billing info</h6>
                <h6 className="grey">Step 3 of 5</h6>
              </div>
            </div>
            <div className="mb-15">
              <div className="form__card">
                <div className="mb-35">
                  <h6 className="fw-bold">First name</h6>
                  <div>
                    <input
                      className="input-number "
                      type="text"
                      placeholder="First name"
                    ></input>
                  </div>
                </div>
                <div className="d-flex justify-between">
                  <div>
                    <h6 className="fw-bold">First name</h6>
                    <div>
                      <input
                        className="input-holder "
                        type="text"
                        placeholder="First name"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold">First name</h6>
                    <div>
                      <input
                        className="input-cvc "
                        type="text"
                        placeholder="First name"
                      ></input>
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold">First name</h6>
                    <div>
                      <input
                        className="input-cvc "
                        type="text"
                        placeholder="First name"
                      ></input>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="form__radio d-flex align-center justify-between mb-15">
              <div className="d-flex align-center">
                <label class="custom-checkbox d-flex ">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </label>
                <h6 className="fw-bold">FedEx</h6>
              </div>
              <div className="d-flex align-center">
                <h6 className="fw-bold green">+32 USD</h6>
                <h6 className="fw-bold ">Additional price</h6>
              </div>
              <div className="">
                <svg
                  width="54"
                  height="16"
                  viewBox="0 0 54 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.9625 5.6377L47.1961 8.01844L49.3464 5.6377H53.9381L49.4507 10.5181L53.9996 15.4385H49.2226L47.0101 13.0389L44.8177 15.4385H40.2051L44.7142 10.5385L40.2051 5.6377H44.9625Z"
                    fill="#F85604"
                  />
                  <path
                    d="M40.2077 5.63776V8.94918H35.1008V11.9878H40.2077V15.4385H31.3477V0H40.2077V3.44127H35.1008V5.63776H40.2077Z"
                    fill="#F85604"
                  />
                  <path
                    d="M27.6092 0V6.31818H27.568C26.74 5.39838 25.7064 5.07848 24.5071 5.07848C22.05 5.07848 20.199 6.69466 19.5494 8.83021C18.8077 6.47704 16.8966 5.03423 14.063 5.03423C11.7619 5.03423 9.9446 6.0331 8.99657 7.66088V5.63776H4.2399V3.44127H9.43084V0H0V15.4385H4.2399V8.94918H8.4663C8.3403 9.42576 8.27279 9.93644 8.27279 10.4754C8.27279 13.6954 10.8169 15.9558 14.063 15.9558C16.7931 15.9558 18.5924 14.7161 19.5434 12.4565H15.9096C15.4183 13.1361 15.0455 13.3371 14.063 13.3371C12.9237 13.3371 11.9412 12.3759 11.9412 11.2363H19.3402C19.6612 13.7941 21.7215 16 24.5484 16C25.7679 16 26.8847 15.4197 27.5672 14.4404H27.6085V15.44H31.3459V0H27.6092ZM12.0597 8.99488C12.2952 8.01415 13.082 7.37362 14.0638 7.37362C15.1445 7.37362 15.8908 7.99456 16.0873 8.99488C16.1698 8.99488 12.0597 8.99488 12.0597 8.99488ZM25.3404 13.0883C23.9626 13.0883 23.1061 11.8464 23.1061 10.5501C23.1061 9.16462 23.8509 7.83207 25.3404 7.83207C26.8847 7.83207 27.4997 9.16462 27.4997 10.5501C27.4997 11.8638 26.848 13.0883 25.3404 13.0883Z"
                    fill="#2B017B"
                  />
                </svg>
              </div>
            </div>
            <div className="form__radio d-flex align-center justify-between mb-15">
              <div className="d-flex align-center">
                <label class="custom-checkbox d-flex ">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </label>
                <h6 className="fw-bold">FedEx</h6>
              </div>
              <div className="d-flex align-center">
                <h6 className="fw-bold green">+32 USD</h6>
                <h6 className="fw-bold ">Additional price</h6>
              </div>
              <div className="">
                <svg
                  width="54"
                  height="16"
                  viewBox="0 0 54 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M44.9625 5.6377L47.1961 8.01844L49.3464 5.6377H53.9381L49.4507 10.5181L53.9996 15.4385H49.2226L47.0101 13.0389L44.8177 15.4385H40.2051L44.7142 10.5385L40.2051 5.6377H44.9625Z"
                    fill="#F85604"
                  />
                  <path
                    d="M40.2077 5.63776V8.94918H35.1008V11.9878H40.2077V15.4385H31.3477V0H40.2077V3.44127H35.1008V5.63776H40.2077Z"
                    fill="#F85604"
                  />
                  <path
                    d="M27.6092 0V6.31818H27.568C26.74 5.39838 25.7064 5.07848 24.5071 5.07848C22.05 5.07848 20.199 6.69466 19.5494 8.83021C18.8077 6.47704 16.8966 5.03423 14.063 5.03423C11.7619 5.03423 9.9446 6.0331 8.99657 7.66088V5.63776H4.2399V3.44127H9.43084V0H0V15.4385H4.2399V8.94918H8.4663C8.3403 9.42576 8.27279 9.93644 8.27279 10.4754C8.27279 13.6954 10.8169 15.9558 14.063 15.9558C16.7931 15.9558 18.5924 14.7161 19.5434 12.4565H15.9096C15.4183 13.1361 15.0455 13.3371 14.063 13.3371C12.9237 13.3371 11.9412 12.3759 11.9412 11.2363H19.3402C19.6612 13.7941 21.7215 16 24.5484 16C25.7679 16 26.8847 15.4197 27.5672 14.4404H27.6085V15.44H31.3459V0H27.6092ZM12.0597 8.99488C12.2952 8.01415 13.082 7.37362 14.0638 7.37362C15.1445 7.37362 15.8908 7.99456 16.0873 8.99488C16.1698 8.99488 12.0597 8.99488 12.0597 8.99488ZM25.3404 13.0883C23.9626 13.0883 23.1061 11.8464 23.1061 10.5501C23.1061 9.16462 23.8509 7.83207 25.3404 7.83207C26.8847 7.83207 27.4997 9.16462 27.4997 10.5501C27.4997 11.8638 26.848 13.0883 25.3404 13.0883Z"
                    fill="#2B017B"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-50">
            <div className="form__title mb-30">
              <h3 className="fw-bold">Billing info</h3>
              <div className="d-flex justify-between mt-10">
                <h6 className="grey">Please enter your billing info</h6>
                <h6 className="grey">Step 4 of 5</h6>
              </div>
            </div>

            <div>
              <h6 className="fw-bold">Order notes</h6>
              <textarea
                className="area"
                type="text"
                placeholder="Need a specific delivery day? Sending a gitf? Let’s say ..."
              ></textarea>
            </div>
          </div>
          <div className="mt-50">
            <div className="form__title mb-30">
              <h3 className="fw-bold">Billing info</h3>
              <div className="d-flex justify-between mt-10">
                <h6 className="grey">Please enter your billing info</h6>
                <h6 className="grey">Step 5 of 5</h6>
              </div>
            </div>

            <div className="form__radio mb-15">
              <div className="d-flex align-center">
                <label class="custom-checkbox d-flex ">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </label>
                <h6 className="fw-bold">
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </h6>
              </div>
            </div>

            <div className="form__radio mb-35">
              <div className="d-flex align-center">
                <label class="custom-checkbox d-flex ">
                  <input class="hidden-checkbox" type="checkbox" />
                  <div class="checkbox">
                    <svg
                      class="checkmark"
                      width="14"
                      height="10"
                      viewBox="0 0 14 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.55957 5.85009L4.61957 8.91009L12.4396 1.09009"
                        stroke="#FDFDFD"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </label>
                <h6 className="fw-bold">
                  I agree with sending an Marketing and newsletter emails. No
                  spam, promissed!
                </h6>
              </div>
            </div>

            <div>
              <button className="btn">Complete order</button>
              <div className="box mt-35">
                <svg
                  className="mb-5"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.053 5.96007C24.1585 6.01119 23.2612 5.93941 22.3863 5.74674C21.3309 5.38534 20.3438 4.84897 19.4663 4.16007C18.7156 3.62793 18.0028 3.0443 17.333 2.41341C17.049 2.14815 16.6749 2.00061 16.2863 2.00061C15.8977 2.00061 15.5236 2.14815 15.2396 2.41341C14.5876 3.02435 13.9021 3.59857 13.1863 4.13341C12.3034 4.83136 11.3126 5.38079 10.253 5.76007C9.25634 5.98526 8.23255 6.06608 7.21295 6.00007C6.37809 5.9655 5.54574 5.88538 4.71962 5.76007C4.51775 5.73015 4.31191 5.74118 4.1144 5.79251C3.91688 5.84384 3.73172 5.93442 3.56996 6.05885C3.40821 6.18328 3.27316 6.33901 3.17288 6.51675C3.0726 6.6945 3.00914 6.89061 2.98629 7.09341C2.91962 7.73341 2.74629 9.40007 2.66629 11.2534C2.55417 13.1051 2.67061 14.9635 3.01295 16.7867C3.97834 19.8074 5.75388 22.5053 8.14629 24.5867C10.0479 26.3804 12.1098 27.9961 14.3063 29.4134C14.8949 29.8176 15.5922 30.0339 16.3063 30.0339C17.0203 30.0339 17.7176 29.8176 18.3063 29.4134C20.3863 27.9591 22.3318 26.3215 24.1196 24.5201C26.372 22.4234 28.04 19.7766 28.9596 16.8401"
                    stroke="#151515"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.666 14.6667L18.4793 18.48C18.5031 18.5059 18.5319 18.5265 18.5641 18.5406C18.5962 18.5548 18.6309 18.5621 18.666 18.5621C18.7011 18.5621 18.7358 18.5548 18.768 18.5406C18.8001 18.5265 18.829 18.5059 18.8527 18.48L29.3327 8"
                    stroke="#6A983C"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h6 className="mb-5">All your data are safe</h6>
                <h6 className="grey">
                  We are using the most advanced security to provide you the
                  best experience ever.
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="checkout__block-two">
          <div className="mb-10">
            <h3>Order Summary</h3>
            <h6 className="grey mt-10">
              Price can change depending on shipping method and taxes of your
              state.
            </h6>
          </div>
          <OrderSummary />
          <OrderSummary />
          <OrderSummary />
          <div className="">
            <div className="d-flex justify-between mb-15">
              <h6 className="fw-bold">Subtotal</h6>
              <h6 className="fw-bold">73.98 USD</h6>
            </div>
            <div className="d-flex justify-between mb-15">
              <h6 className="fw-bold">Subtotal</h6>
              <h6 className="fw-bold">73.98 USD</h6>
            </div>
            <div className="d-flex justify-between mb-35">
              <h6 className="fw-bold">Subtotal</h6>
              <h6 className="fw-bold">73.98 USD</h6>
            </div>
            <div className="checkout__input-content d-flex justify-between mb-35">
              <input
                className="checkout__input-f"
                type="text"
                placeholder="Apply promo code"
              ></input>
              <a className="" href="">
                <p className="fw-bold">Apply now</p>
              </a>
            </div>
          </div>
          <div className="d-flex justify-between align-center	">
            <div>
              <h6 className="fw-bold">Total Order</h6>
              <h6 className="green">Guaranteed delivery day: June 12, 2020</h6>
            </div>
            <h2 className="green">89.84 USD</h2>
          </div>
        </div>
      </div>
    </>
  );
}
export default Checkout;

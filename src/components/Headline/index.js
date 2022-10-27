import "./Headline.scss";
import "../style.scss";
import { Link } from "react-router-dom";

function Headline() {
  return (
    <>
      <div className="customers__slider d-flex justify-center">
        <div className="customers__cart">
          <div className="customers__content text-center">
            <p className="customers__text mb-25">
              “ This is an super space for your customers qoute. Don’t worry it
              works smooth as pie. You will get all what you need by writiing a
              text here “
            </p>
            <h6 className="customers__subtext grey">Name and Surname</h6>
          </div>
        </div>
        <div className="customers__cart">
          <div className="customers__content text-center">
            <p className="customers__text mb-25">
              “ This is an super space for your customers qoute. Don’t worry it
              works smooth as pie. You will get all what you need by writiing a
              text here “
            </p>
            <h6 className="customers__subtext grey">Name and Surname</h6>
          </div>
        </div>
      </div>
    </>
  );
}
export default Headline;

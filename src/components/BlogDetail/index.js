import "./BlogDetail.scss";
import "../style.scss";
import { Link } from "react-router-dom";

function BlogDetail() {
  return (
    <>
      <div className="d-flex justify-center">
        <div className="tags mr-30">
          <h4 className="mb-15">Tags</h4>
          <div className="d-flex mb-10">
            <h6 className="mr-10 bg">Food</h6>
            <h6 className="bg">Recepies</h6>
          </div>
          <div className="d-flex mb-50">
            <h6 className="mr-10 bg">Food</h6>
            <h6 className="bg">Recepies</h6>
          </div>
          <a className="fw-bold" href="">
            <svg
              className="mr-5"
              width="12"
              height="16"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.9477 6L2.04103 4.06C2.0281 4.04813 2.01777 4.03371 2.01071 4.01764C2.00365 4.00158 2 3.98422 2 3.96667C2 3.94912 2.00365 3.93176 2.01071 3.91569C2.01777 3.89962 2.0281 3.8852 2.04103 3.87333L3.9477 2M2.61523 4H9.2819C9.63552 4 9.97466 4.14048 10.2247 4.39052C10.4748 4.64057 10.6152 4.97971 10.6152 5.33333V14"
                stroke="#151515"
                stroke-width="2.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Back to Blog
          </a>
        </div>
        <div className="blog__text">
          <p>
            There’s nothing like a warm cup of tea to start your morning—or
            maybe you’re all about an iced hibiscus on a sunny Saturday
            afternoon. Whether you’re just craving chamomile or are looking to
            ditch your coffee dependency, here’s our go-to guide on
            incorporating a few new teas into your daily routine!
          </p>
          <div className="mb-50">
            <h4 className="mb-15">Morning Ritual // 9:00 AM</h4>
            <p>
              Want that extra morning energy without the caffeine jitters?
              Switch out your morning mug of coffee for a warm, energizing cup
              of earl grey. Serve as is or stir in some milk and honey for extra
              coziness. If you want to spice things up, try chai tea instead!
              The combination of cinnamon, cardamom, and ginger smells amazing
              and gives you that nice little flavor kick to start your day off
              right.
            </p>
          </div>
          <div className="mb-50">
            <h4 className="mb-15">Mid-day Boost // 2:00 PM</h4>
            <p className="mb-30">
              If you’re feeling a little sluggish post-lunch, beat the afternoon
              slump with some lemon ginger green tea. Green tea can be a great
              alternative to coffee in the afternoon when you want that little
              boost of energy. An added benefit: lemon and ginger work together
              to aid digestion which is especially helpful after lunch.
            </p>
            <p>
              If you’re not into hot drinks, opt-in for a fruity iced green tea
              instead. Steep some honeydew or peach green tea in hot water for a
              few minutes and then pour over ice until it’s nice and cool. Enjoy
              with a slice of lemon, and you’ll feel refreshed and ready to
              tackle any task.
            </p>
          </div>
          <div className="mb-50">
            <h4 className="mb-15">Evening Calm // 8:00 PM</h4>
            <p>
              Slip on some fuzzy socks, light your favorite candles, and fire up
              the kettle—it’s time to wind down after a long day. Grab yourself
              a soothing cup of lavender chamomile tea and indulge in some
              well-deserved self-love.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default BlogDetail;

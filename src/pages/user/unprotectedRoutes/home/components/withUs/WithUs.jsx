import "./withUs.scss";

//Assets
import withUsImg from "@/assets/withUsImg.jpg";

const WithUs = () => {
  return (
    <section className="with-us">
      <div className="content">
        <div className="top">
          <p className="title">Discover</p>
          <h2>
            Plan Your Dream Vacation <span>with Us Today</span>
          </h2>
          <p>
            At our travel website, we offer personalized travel itineraries and{" "}
            <br />
            experienced local guides to make your trip to <br /> Bali and Phuket
            unforgettable.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <h2>50 %</h2>
            <p>
              Customized itineraries tailored to your preferences and interests
            </p>
          </div>
          <div className="card">
            <h2>50 %</h2>
            <p>Expert local guides to show you the hidden gems </p>
          </div>
        </div>
        <div className="buttons">
          <button className="button-style">Learn More</button>
        </div>
      </div>
      <div className="image">
        <img src={withUsImg} alt="" />
      </div>
    </section>
  );
};

export default WithUs;

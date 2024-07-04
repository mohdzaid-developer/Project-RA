import "./whyUs.scss";

//Assets
import video1 from "@/assets/video1.mp4";
import video2 from "@/assets/video2.mp4";
import video3 from "@/assets/video3.mp4";
import video4 from "@/assets/video4.mp4";

const WhyUs = () => {
  return (
    <section className="why-us">
      <div className="content">
        <p className="title">Unforgettable</p>
        <h2>
          Why choose <span>Us</span>
        </h2>
      </div>

      <div className="cards">
        <div className="left-container">
          <div className="top">
            <div className="video">
              <video autoPlay loop muted preload="auto">
                <source src={video1} type="video/mp4" />
              </video>
            </div>
            <div className="text">
              <div>
                <p className="subHeading">Experienced</p>
                <h3>Skills and Expertise</h3>
              </div>
              <div>
                <p>
                  I have worked on various projects, creating stunning websites
                  and applications.
                </p>
                <p>
                  I have worked on various projects, creating stunning websites
                  and applications.
                </p>
              </div>
              <button className="button-style">Know More!</button>
            </div>
          </div>
          <div className="bottom">
            <div className="video">
              <video autoPlay loop muted preload="auto">
                <source src={video2} type="video/mp4" />
              </video>
            </div>
            <div className="text">
              <div>
                <p className="subHeading">Experienced</p>
                <h3>Skills and Expertise</h3>
              </div>
              <p>
                I have worked on various projects, creating stunning websites
                and applications.
              </p>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="bottom">
            <div className="text">
              <div>
                <p className="sub-heading">Experienced</p>
                <h3>Skills and Expertise</h3>
              </div>
              <p>
                I have worked on various projects, creating stunning websites
                and applications.
              </p>
            </div>
            <div className="video">
              <video autoPlay loop muted preload="auto">
                <source src={video3} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="top">
            <div className="video">
              <video autoPlay loop muted preload="auto">
                <source src={video4} type="video/mp4" />
              </video>
            </div>
            <div className="text">
              <div>
                <p className="subHeading">Experienced</p>
                <h3>Skills and Expertise</h3>
              </div>
              <div>
                <p>
                  I have worked on various projects, creating stunning websites
                  and applications.
                </p>
                <p>
                  I have worked on various projects, creating stunning websites
                  and applications.
                </p>
              </div>
              <button className="button-style">Know More!</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;

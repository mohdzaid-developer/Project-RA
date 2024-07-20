import "./hero.scss";

//Assets
import heroVideo from "@/assets/heroVideo.mp4";
import heroArrow from "@/assets/heroArrow.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <video src={heroVideo} autoPlay loop muted></video>

      <div className="content">
        <div className="left">
          <h2>Welcome to</h2>
          <h1>Come fly with me</h1>
        </div>

        <div className="right">
          <p>Scroll to explore</p>
          <img src={heroArrow} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

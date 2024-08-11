import "./hero.scss";

import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animations/animations";

//Assets
import heroVideo from "@/assets/heroVideo.mp4";
import heroArrow from "@/assets/heroArrow.webp";

const Hero = () => {
  return (
    <section className="hero">
      <div className="overlay"></div>
      <video src={heroVideo} autoPlay loop muted></video>

      <motion.div
        className="content"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
      >
        <div className="left">
          <h2>Welcome to</h2>
          <h1>Come fly with me</h1>
        </div>

        <div className="right">
          <p>Scroll to explore</p>
          <img src={heroArrow} alt="" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

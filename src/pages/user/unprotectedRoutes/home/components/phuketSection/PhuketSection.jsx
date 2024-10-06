import "./phuketSection.scss";

//Routing
import { useNavigate } from "react-router-dom";

//Animation
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animations/animations";

//Assets
import rightArrow from "@/assets/colorRightArrow.webp";

const PhuketSection = () => {
  const navigate = useNavigate();

  return (
    <section className="phuketSection" onClick={() => navigate("/phuket")}>
      <motion.div
        className="container"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="phuketSection-left" variants={fadeInAnimation}>
          <h2>
            Enchanted <span>Phuket</span>
          </h2>
          <p>
            Unwind on Phuket’s stunning beaches, explore vibrant markets, or
            <br />
            venture into lush rainforests. From thrilling water sports to quiet
            <br />
            moments by the sea, Book with "Come Fly With Me" for a
            <br />
            journey filled with sun, sea, and unforgettable experiences.
          </p>
        </motion.div>

        <motion.div className="phuketSection-right" variants={fadeInAnimation}>
          <button>
            Know More <img src={rightArrow} alt="" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PhuketSection;

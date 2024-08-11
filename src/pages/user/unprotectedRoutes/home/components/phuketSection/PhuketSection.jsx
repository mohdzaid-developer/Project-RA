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
    <section className="phuketSection">
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
            Escape to Paradise Phuket, a tropical haven where the turquoise
            <br />
            waters meet golden sands. Dive into thrilling activities, explore
            bustling markets, <br /> and relax in luxury as you embrace the
            charm and allure of this stunning island.
          </p>
        </motion.div>

        <motion.div className="phuketSection-right" variants={fadeInAnimation}>
          <button onClick={() => navigate("/phuket")}>
            Know More <img src={rightArrow} alt="" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PhuketSection;

import "./baliSection.scss";

//Routing
import { useNavigate } from "react-router-dom";

//Animations
import { motion } from "framer-motion";
import { fadeInAnimation } from "@/utils/animations/animations";

//Assets
import rightArrow from "@/assets/colorRightArrow.webp";

const BaliSection = () => {
  const navigate = useNavigate();
  return (
    <section className="baliSection" onClick={() => navigate("/bali")}>
      <motion.div
        className="container"
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="baliSection-left" variants={fadeInAnimation}>
          <h2>
            Enchanted <span>Bali</span>
          </h2>
          <motion.p variants={fadeInAnimation}>
            There is no other place like Bali. A magical blend of a colorful
            <br />
            culture, friendly people, stunning nature, countless activities,
            <br />
            tropical weather, culinary delights, vibrant nightlife, and
            beautiful accommodation. <br />
            “Come Fly With Me" and uncover the secrets of this island of Gods.
          </motion.p>
        </motion.div>

        <motion.div className="baliSection-right" variants={fadeInAnimation}>
          <button>
            Know More <img src={rightArrow} alt="" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BaliSection;

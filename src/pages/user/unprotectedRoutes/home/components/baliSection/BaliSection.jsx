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
    <section className="baliSection">
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
            Experience the magic of Enchanted Bali, where every corner reveals a
            new adventure. <br /> From the tranquil beaches to the spiritual
            heart of Ubud, let the island's <br /> natural beauty and vibrant
            culture captivate your senses.
          </motion.p>
        </motion.div>

        <motion.div className="baliSection-right" variants={fadeInAnimation}>
          <button onClick={() => navigate("/bali")}>
            Know More <img src={rightArrow} alt="" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default BaliSection;

import { useState } from "react";
import "./footer.scss";

import { AnimatePresence, motion } from "framer-motion";
import { footerFadeInAnimation } from "@/utils/animations/animations";

//Routing
import { Link } from "react-router-dom";

//Assets
import facebookImg from "@/assets/facebookImg.svg";
import twitterImg from "@/assets/instagramImg.svg";
import instagramImg from "@/assets/twitterImg.svg";
import linkendInImg from "@/assets/linkedInImg.svg";
import buttonArrowImg from "@/assets/rightArrow.svg";
import closeImg from "@/assets/error.png";

const Footer = () => {
  const [open, setOpen] = useState(false);

  return (
    <footer>
      <h2 className="heading">
        Journey Beyond Boundaries, Discover the <br /> World with Us
      </h2>
      <AnimatePresence>
        {open && (
          <motion.div
            className="form"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={footerFadeInAnimation}
          >
            <div className="content">
              <h2>Get in touch</h2>
              <img src={closeImg} alt="" onClick={() => setOpen(false)} />
            </div>
            <div className="form-container">
              <div className="form-container-left">
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Phone" />
                <input type="text" placeholder="Email" />
              </div>
              <div className="form-container-right">
                <div className="input">
                  <p>Tell us how can we help</p>
                  <input type="text"></input>
                </div>
                <button>
                  Submit <img src={buttonArrowImg} alt="" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="links">
        <div className="links-left">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
          <div className="socials">
            <a href="#">
              <img src={facebookImg} alt="" />
            </a>
            <a href="#">
              <img src={instagramImg} alt="" />
            </a>
            <a href="#">
              <img src={twitterImg} alt="" />
            </a>
            <a href="#">
              <img src={linkendInImg} alt="" />
            </a>
          </div>
        </div>
        <div className="links-right">
          <button onClick={() => setOpen(true)}>
            Reach out <img src={buttonArrowImg} alt="" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

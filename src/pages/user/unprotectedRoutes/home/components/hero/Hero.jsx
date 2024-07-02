import { useRef } from "react";
import "./hero.scss";

//Animation
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);
  return (
    <>
      <section className="hero" ref={ref}>
        <motion.h1 style={{ y: textY }}>Project RA</motion.h1>
        <motion.div
          className="heroImg1"
          style={{
            y: backgroundY,
          }}
        />
        <div className="heroImg2" />
      </section>
    </>
  );
};

export default Hero;

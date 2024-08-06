import { useRef, useState, useEffect } from "react";
import "./hero.scss";

import { useScroll, useTransform, motion } from "framer-motion";
import ScrollText from "./scrollText/ScrollText";

const Hero = ({ data }) => {
  const targetRef = useRef();

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const [transformValues, setTransformValues] = useState({
    yRange: ["0%", "40%"],
    xRange: ["0%", "-30%"],
  });

  useEffect(() => {
    const updateTransformValues = () => {
      if (window.innerWidth > 1700) {
        setTransformValues({
          yRange: ["0%", "35%"],
          xRange: data.xRange1,
        });
      } else if (window.innerWidth > 1500 && window.innerWidth < 1700) {
        setTransformValues({
          yRange: ["0%", "32%"],
          xRange: data.xRange2,
        });
      } else {
        setTransformValues({
          yRange: ["0%", "40%"],
          xRange: ["0%", "-30%"],
          scaleRange: ["100%", "80%"],
        });
      }
    };

    updateTransformValues();
    window.addEventListener("resize", updateTransformValues);

    return () => {
      window.removeEventListener("resize", updateTransformValues);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 0.4], transformValues.yRange);
  const x = useTransform(scrollYProgress, [0, 0.4], transformValues.xRange);
  const scale = useTransform(scrollYProgress, [0, 0.4], ["100%", "80%"]);

  return (
    <section
      className="levelOneHero"
      style={{ backgroundImage: `url(${data.heroImg})` }}
    >
      <motion.div className="container" ref={targetRef} style={{ y, x, scale }}>
        <h2>{data.title}</h2>
      </motion.div>

      <div className="text">
        <ScrollText content={data.content} />
      </div>
    </section>
  );
};

export default Hero;

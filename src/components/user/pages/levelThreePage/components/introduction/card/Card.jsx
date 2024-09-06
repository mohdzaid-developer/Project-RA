import { useRef } from "react";
import "./card.scss";

//Animation
import { useTransform, motion, useScroll } from "framer-motion";

const Card = ({
  i,
  title,
  description,
  src,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="cardContainer">
      <motion.div
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="card"
      >
        <h2>{title}</h2>
        <div className="body">
          <div className="description">
            <p>{description}</p>
          </div>

          <div className="imageContainer">
            <motion.div className="inner" style={{ scale: imageScale }}>
              <img src={src} alt={title} className="cardImage" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;

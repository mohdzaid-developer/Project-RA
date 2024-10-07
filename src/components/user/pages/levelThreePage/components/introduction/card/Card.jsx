import { useRef } from "react";
import "./card.scss";

//Animation
import { useTransform, motion, useScroll } from "framer-motion";

const Card = ({ i, activity, progress, range, targetScale, image }) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div ref={container} className="intro-cardContainer">
      <motion.div
        style={{
          backgroundColor: `#${activity.color}`,
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className="intro-card"
      >
        <div className="intro-title">
          <h2>Day {activity.day}</h2>
          <h2>:</h2>
          <h2>{activity.title}</h2>
        </div>
        <div className="intro-body">
          <div className="intro-description">
            {activity.plans.map((item, index1) => (
              <div className="intro-plans" key={index1}>
                <h3>{item.title} -</h3>
                {item.data.map((content, index2) => (
                  <p key={index2}>
                    {index2 + 1}. {content}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="intro-imageContainer">
            <motion.div className="intro-inner" style={{ scale: imageScale }}>
              <img src={image} className="cardImage" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;

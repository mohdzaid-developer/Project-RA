import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import "./scrollText.scss";

const ScrollText = ({ content }) => {
  return (
    <div className="introduction-scroll-outer">
      <div className="introduction-scroll-inner">
        <p>
          {content.map((item, index) => (
            <ContentLine key={index} content={item} />
          ))}
        </p>
      </div>
    </div>
  );
};

const ContentLine = ({ content }) => {
  const contentRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["end center", "start start"],
  });

  const scrollValue = useTransform(scrollYProgress, [0, 0.15], ["100%", "0%"]);
  const clipPathVal = useMotionTemplate`inset(0% ${scrollValue} 0% 0%)`;

  return (
    <span className="introduction-text-container" ref={contentRef}>
      <motion.span
        style={{ clipPath: clipPathVal }}
        className="introduction-highlighted-text"
        data-text={content}
      />
      <span className="introduction-static-text">{content}</span>
    </span>
  );
};

export default ScrollText;

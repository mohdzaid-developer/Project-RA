import { useEffect, useRef } from "react";
import "./introduction.scss";

//Animation
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

//Components
import Card from "./card/Card";

//Assets

const Introduction = ({ activities }) => {
  console.log(activities);
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <main ref={container} className="activities-introduction">
      {activities.map((activity, i) => {
        const targetScale = 1 - (activities.length - i) * 0.05;
        return (
          <Card
            activity={activity}
            key={`p_${i}`}
            i={i}
            progress={scrollYProgress}
            range={[i / (activities.length - 1), 1]}
            targetScale={targetScale}
            image={activity.image}
          />
        );
      })}
    </main>
  );
};

export default Introduction;

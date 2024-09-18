import { useEffect, useRef } from "react";
import "./introduction.scss";

//Animation
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";

//Components
import Card from "./card/Card";
import { projects } from "./data";

const Introduction = () => {
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
    <main ref={container} className="main">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i / (projects.length - 1), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
};

export default Introduction;

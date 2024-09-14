//Components
import Hero from "./components/hero/Hero";
import Freedom from "./components/freedom/Freedom";
import Mission from "./components/mission/Mission";
import Story from "./components/story/Story";
import Filler from "./components/filler/Filler";

const About = () => {
  return (
    <section className="about">
      <Hero />
      <Filler />
      <Freedom />
      <Story />
      <Mission />
    </section>
  );
};

export default About;

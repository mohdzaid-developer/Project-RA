//Components
import Hero from "../levelOnePage/components/hero/Hero";
import Filler from "./components/filler/Filler";
import Plans from "./components/plans/Plans";

const LevelTwoPage = ({ data }) => {
  return (
    <section className="levelTwoPage">
      <Hero data={data} />
      <Filler />
      <Plans data={data} />
    </section>
  );
};

export default LevelTwoPage;

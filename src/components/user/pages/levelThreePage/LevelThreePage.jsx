//Components
import Hero from "../levelOnePage/components/hero/Hero";
import Activities from "./components/activities/Activities";
import Description from "./components/description/Description";
import Introduction from "./components/introduction/Introduction";

const LevelThreePage = ({ data }) => {
  return (
    <section className="levelThreePage">
      <Hero data={data} />
      <Introduction />
      <Activities />
      <Description />
    </section>
  );
};

export default LevelThreePage;
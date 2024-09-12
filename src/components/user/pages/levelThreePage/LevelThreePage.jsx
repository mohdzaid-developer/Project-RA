//Components
import Hero from "../levelOnePage/components/hero/Hero";
import Introduction from "./components/introduction/Introduction";
import Activities from "./components/activities/Activities";
import Description from "./components/description/Description";
import Payment from "./components/payment/Payment";

const LevelThreePage = ({ data }) => {
  return (
    <section className="levelThreePage">
      <Hero data={data} />
      <Introduction />
      <Activities data={data} />
      <Description />
      <Payment data={data} />
    </section>
  );
};

export default LevelThreePage;

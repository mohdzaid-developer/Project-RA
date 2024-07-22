import "./levelOnePage.scss";
import Hero from "./components/hero/Hero";

const LevelOnePage = ({ data }) => {
  return (
    <section className="levelOnePage">
      <Hero data={data} />
    </section>
  );
};

export default LevelOnePage;

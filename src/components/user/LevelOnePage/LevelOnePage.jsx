import "./levelOnePage.scss";
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallery/Gallery";

const LevelOnePage = ({ data }) => {
  return (
    <section className="levelOnePage">
      <Hero data={data} />
      <Gallery />
    </section>
  );
};

export default LevelOnePage;

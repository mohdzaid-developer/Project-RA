//Components
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallery/Gallery";
import Packages from "./components/packages/Packages";
import Test from "./components/Test/Test";

const LevelOnePage = ({ data }) => {
  return (
    <section className="levelOnePage">
      <Hero data={data} />
      <Gallery data={data} />
      <Packages data={data} />
    </section>
  );
};

export default LevelOnePage;

import "./home.scss";

//Components
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Introduction from "./components/introduction/Introduction";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Introduction />
      <Gallery />
    </section>
  );
};

export default Home;

//Components
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Introduction from "./components/introduction/Introduction";
import Testimonial from "./components/testimonial/Testimonial";
import Faq from "./components/faq/Faq";
import BaliSection from "./components/baliSection/BaliSection";
import PhuketSection from "./components/phuketSection/PhuketSection";
import Why from "./components/why/Why";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Introduction />
      <BaliSection />
      <PhuketSection />
      <Gallery />
      <Why />
      <Faq />
      <Testimonial />
    </section>
  );
};

export default Home;

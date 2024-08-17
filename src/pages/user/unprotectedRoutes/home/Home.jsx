//Components
import Hero from "./components/hero/Hero";
import Introduction from "./components/introduction/Introduction";
import Gallery from "./components/gallery/Gallery";
import Testimonial from "./components/testimonial/Testimonial";
import Faq from "./components/faq/Faq";
import BaliSection from "./components/baliSection/BaliSection";
import PhuketSection from "./components/phuketSection/PhuketSection";
import Why from "./components/why/Why";
import Contact from "@/components/user/contact/Contact";

const Home = () => {
  return (
    <section className="home">
      <Hero />
      <Introduction />
      <Contact />
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

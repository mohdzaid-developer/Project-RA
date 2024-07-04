import "./home.scss";

//Components
import Hero from "./components/hero/Hero";
import WhyUs from "./components/whyUs/WhyUs";
import WithUs from "./components/withUs/WithUs";
import Experience from "./components/experience/Experience";
import Faq from "./components/faq/Faq";
import Gallery from "./components/gallery/Gallery";
import Testimonial from "./components/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="home">
        <WithUs />
        <Experience />
        <Gallery />
        <WhyUs />
        <Testimonial />
        <Faq />
      </section>
    </>
  );
};

export default Home;

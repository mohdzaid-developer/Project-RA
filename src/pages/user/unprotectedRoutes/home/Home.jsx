import "./home.scss";

//Components
import Hero from "./components/hero/Hero";
import WhyUs from "./components/whyUs/WhyUs";
import WithUs from "./components/withUs/WithUs";
import Experience from "./components/experience/Experience";

const Home = () => {
  return (
    <>
      <Hero />
      <section className="home">
        <WithUs />
        <Experience />
        {/* <WhyUs /> */}
      </section>
    </>
  );
};

export default Home;

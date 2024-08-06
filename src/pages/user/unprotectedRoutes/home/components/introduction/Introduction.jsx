import "./introduction.scss";

//Component
import ScrollText from "./scrollText/ScrollText";

const Introduction = () => {
  const content = [
    "At Project RA, Travel Agency, we believe that travel is not just about reaching a destination, but",
    "about the journey and the memories you create along the way. With over a decade of experience",
    "in the travel industry, we specialize in crafting personalized travel experiences that cater to your",
    "unique preferences and interests.",
  ];
  return (
    <section className="introduction">
      <h2>Introduction</h2>

      <ScrollText content={content} />
    </section>
  );
};

export default Introduction;

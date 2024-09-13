import "./introduction.scss";

//Component
import ScrollText from "./scrollText/ScrollText";

const Introduction = () => {
  const content = [
    `Uncover a world of unforgettable experiences with "Come Fly With Me". We don't just plan trips —`,
    "we create journeys that inspire. Imagine savoring local flavors, forging new friendships, and embracing vibrant cultures.",
    "Let your wanderlust guide you to places beyond your imagination. Don’t just dream—explore, connect, and live the extraordinary. ",
    "Your adventure starts now.",
  ];

  return (
    <section className="introduction">
      <h2>Introduction</h2>

      <ScrollText content={content} />
    </section>
  );
};

export default Introduction;

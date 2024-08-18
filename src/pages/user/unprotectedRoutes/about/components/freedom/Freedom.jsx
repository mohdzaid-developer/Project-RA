import "./freedom.scss";

//Assets
import freedomImg from "@/assets/freedomImg.webp";

const Freedom = () => {
  return (
    <section className="freedom">
      <h2>
        The Freedom to Explore with <br /> “Travel Now, Pay Later”
      </h2>
      <div className="content">
        <p className="first-text">
          At Come Fly with Me, we believe that travel isn’t just about going to
          a new place; it’s about finding a part of yourself that’s been waiting
          to be discovered. We specialize in curating unforgettable travel
          experiences to the stunning destinations of Bali and Phuket, where
          everything you need—flights, accommodations, transfers, activities,
          and even national park fees—is thoughtfully included.
        </p>
        <img src={freedomImg} alt="" />
        <p>
          We know that sometimes the only thing standing between you and your
          dream trip is the ability to afford it right now. That’s why we’re
          proud to offer the Travel Now, Pay Later option. We believe that
          everyone should have the chance to explore the world, regardless of
          their financial situation. With our flexible payment plans, your dream
          vacation is within reach—no need to wait.
        </p>
      </div>
    </section>
  );
};

export default Freedom;

import "./mission.scss";

//Assets
import missionImg from "@/assets/mission.webp";

const Mission = () => {
  return (
    <section className="mission">
      <h2>Our Mission: To Make Your Dreams Take Flight</h2>
      <div className="content">
        <img src={missionImg} alt="" />
        <p>
          We're not just a travel company; we're your partner in crafting
          stories you'll cherish forever. Let us handle the details, so you can
          fully immerse yourself in your adventure.
        </p>
      </div>
      <h2 className="bottom-heading">
        Come Fly with Me—Where Your Next Adventure Awaits!
      </h2>
    </section>
  );
};

export default Mission;

import "./description.scss";

//Assets
import descImg1 from "@/assets/descImg1.webp";
import descImg2 from "@/assets/descImg2.webp";
import descImg3 from "@/assets/descImg3.webp";
import descImg4 from "@/assets/descImg4.webp";

const Description = () => {
  return (
    <section className="description">
      <h2>laboris nisi ut aliquip</h2>

      <div className="images">
        <img src={descImg1} alt="" />
        <img src={descImg2} alt="" />
        <img src={descImg3} alt="" />
        <img src={descImg4} alt="" />
      </div>

      <p>
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum." Deluxe Escape Plan"Lorem ipsum
      </p>
    </section>
  );
};

export default Description;

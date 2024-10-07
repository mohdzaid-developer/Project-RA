import "./description.scss";

//Assets
import descImg1 from "@/assets/descImg1.webp";
import descImg2 from "@/assets/descImg2.webp";
import descImg3 from "@/assets/descImg3.webp";
import descImg4 from "@/assets/descImg4.webp";

const Description = () => {
  return (
    <section className="description">
      <h2>Your Perfect Getaway: Effortless and All-Inclusive</h2>

      <div className="images">
        <img src={descImg1} alt="" />
        <img src={descImg2} alt="" />
        <img src={descImg3} alt="" />
        <img src={descImg4} alt="" />
      </div>

      <p>
        Experience the perfect holiday with us, where we handle everything,
        stay, local commute, activities, and flights. Whether it's Bali or
        Phuket, we've got your dream vacation covered from start to finish. Just
        relax, and leave the rest to us.
      </p>
    </section>
  );
};

export default Description;

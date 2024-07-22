import "./baliSection.scss";

import rightArrow from "@/assets/colorRightArrow.svg";

const BaliSection = () => {
  return (
    <section className="baliSection">
      <div className="container">
        <div className="left">
          <h2>
            Enchanted <span>Bali</span>
          </h2>
          <p>
            Experience the magic of Enchanted Bali, where every corner reveals a
            new adventure. <br /> From the tranquil beaches to the spiritual
            heart of Ubud, let the island's <br /> natural beauty and vibrant
            culture captivate your senses.
          </p>
        </div>

        <div className="right">
          <button>
            Know More <img src={rightArrow} alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default BaliSection;

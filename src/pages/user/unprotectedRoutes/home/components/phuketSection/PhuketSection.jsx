import "./phuketSection.scss";

//Assets
import rightArrow from "@/assets/colorRightArrow.svg";

const PhuketSection = () => {
  return (
    <section className="phuketSection">
      <div className="container">
        <div className="left">
          <h2>
            Enchanted <span>Phuket</span>
          </h2>
          <p>
            Escape to Paradise Phuket, a tropical haven where the turquoise
            <br />
            waters meet golden sands. Dive into thrilling activities, explore
            bustling markets, <br /> and relax in luxury as you embrace the
            charm and allure of this stunning island.
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

export default PhuketSection;

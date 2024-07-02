import "./experience.scss";

//Assets
import experienceImg from "@/assets/experienceImg.jpg";
import experienceIcon from "@/assets/experienceIcon.png";

const Experience = () => {
  return (
    <section className="experience">
      <div className="content">
        <p className="title">Unforgettable</p>
        <h2>
          Experience the Best of <span>Bali and Phuket</span>
        </h2>
        <p>
          From stunning beaches to vibrant culture, Bali and Phuket offer a
          range of unique <br /> attractions and experiences. Whether you're
          seeking relaxation or adventure, these destinations <br /> have
          something for everyone.
        </p>
      </div>
      <div className="cards">
        <div className="section">
          <div className="card">
            <img src={experienceIcon} alt="" />
            <h3>Bali Highlights</h3>
            <p>
              Immerse yourself in the rich Balinese culture and explore ancient
              temples.
            </p>
          </div>
          <div className="card">
            <img src={experienceIcon} alt="" />
            <h3>Bali Highlights</h3>
            <p>
              Immerse yourself in the rich Balinese culture and explore ancient
              temples.
            </p>
          </div>
        </div>
        <div className="image">
          <img src={experienceImg} alt="" />
        </div>
        <div className="section">
          <div className="card">
            <img src={experienceIcon} alt="" />
            <h3>Experience Bali</h3>
            <p>
              Embark on a journey through lush rice terraces and picturesque
              landscapes.
            </p>
          </div>
          <div className="card">
            <img src={experienceIcon} alt="" />
            <h3>Experience Phuket</h3>
            <p>
              Discover the vibrant nightlife and indulge in delicious Thai
              cuisine.
            </p>
          </div>
        </div>
      </div>
      <div className="buttons">
        <button className="button-style">Learn More</button>
      </div>
    </section>
  );
};

export default Experience;

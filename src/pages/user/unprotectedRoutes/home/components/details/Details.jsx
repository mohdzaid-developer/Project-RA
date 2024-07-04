import "./details.scss";

//Assets
import detailsBaliImg from "../../../../../../assets/detailsBaliImg.jpg";
import detailsPhuketImg from "../../../../../../assets/detailsPhuketImg.jpg";

const Details = () => {
  return (
    <section className="details">
      <div className="content">
        <p className="title">Unforgettable</p>
        <h2>
          Trip to <span>Bali and Phuket</span>
        </h2>
        <p>
          From stunning beaches to vibrant culture, Bali and Phuket offer a
          range of unique <br /> attractions and experiences. Whether you're
          seeking relaxation or adventure.
        </p>
      </div>

      <div className="cards">
        <div className="card">
          <img src={detailsBaliImg} alt="" />
          <div className="text">
            <div>
              <p>Test </p>
              <h3>Bali</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <br />
            <button className="button-style">Know More!</button>
          </div>
        </div>
        <div className="card">
          <img src={detailsPhuketImg} alt="" />
          <div className="text">
            <div>
              <p>Test</p>
              <h3>Phuket</h3>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <br />
            <button className="button-style">Know More!</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;

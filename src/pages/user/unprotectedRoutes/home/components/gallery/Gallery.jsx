import "./gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="content">
        <p className="title">Unforgettable</p>
        <h2>
          Gallery <span>Bali and Phuket</span>
        </h2>
      </div>
      <section className="gallery">
        <div className="image1"></div>
        <div className="image2"></div>
        <div className="image3"></div>
        <div className="image4"></div>
        <div className="image5"></div>
        <div className="image6"></div>
        <div className="image7"></div>
      </section>
    </div>
  );
};

export default Gallery;

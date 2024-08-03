import "./activities.scss";

//Slider
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Activities = () => {
  const slides = [
    {
      img: "https://via.placeholder.com/800x400?text=Slide+1",
      title: "Slide 1",
      description: "This is the first slide.",
    },
    {
      img: "https://via.placeholder.com/800x400?text=Slide+2",
      title: "Slide 2",
      description: "This is the second slide.",
    },
    {
      img: "https://via.placeholder.com/800x400?text=Slide+3",
      title: "Slide 3",
      description: "This is the third slide.",
    },
    {
      img: "https://via.placeholder.com/800x400?text=Slide+4",
      title: "Slide 4",
      description: "This is the third slide.",
    },
    {
      img: "https://via.placeholder.com/800x400?text=Slide+5",
      title: "Slide 5",
      description: "This is the third slide.",
    },
    {
      img: "https://via.placeholder.com/800x400?text=Slide+6",
      title: "Slide 6",
      description: "This is the third slide.",
    },
  ];
  return (
    <div className="splide-wrapper">
      <h2>Activities we provide</h2>
      <Splide
        options={{
          type: "loop",
          autoplay: true,
          interval: 3000,
          pauseOnHover: false,
          pagination: false,
          perPage: 3,
          perMove: 1,
          gap: "2rem",
          breakpoints: {
            640: {
              perPage: 2,
              gap: ".7rem",
              height: "6rem",
            },
            480: {
              perPage: 1,
              gap: ".7rem",
              height: "6rem",
            },
          },
        }}
        aria-label="My Splide Slider"
      >
        {slides.map((slide, index) => (
          <SplideSlide key={index}>
            <div style={{ textAlign: "center" }}>
              <img
                src={slide.img}
                alt={slide.title}
                style={{ width: "100%", height: "auto" }}
              />
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Activities;

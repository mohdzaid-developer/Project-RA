import "./activities.scss";

//Slider
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const Activities = ({ data }) => {
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
            900: {
              perPage: 2,
              gap: ".7rem",
              height: "12rem",
            },
            600: {
              perPage: 1,
              gap: ".7rem",
              height: "12rem",
            },
          },
        }}
        aria-label="My Splide Slider"
      >
        {data?.sliderImg.map((slide, index) => (
          <SplideSlide key={index}>
            <div className="images">
              <img src={slide} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default Activities;

import { useState } from "react";
import "./why.scss";

//Mui
import { Box, LinearProgress } from "@mui/material";

//Assets
import whyImg1 from "@/assets/whyImg1.webp";
import whyImg2 from "@/assets/whyImg2.webp";
import whyImg3 from "@/assets/whyImg3.webp";
import whyImg4 from "@/assets/whyImg4.webp";

const Why = () => {
  const data = [
    {
      image: whyImg1,
      content:
        "With over a decade in the travel industry, our team of seasoned professionals has the knowledge and insider insights to curate the perfect travel experience. We ensure every detail is taken care of, so you can travel with confidence and peace of mind.",
    },
    {
      image: whyImg2,
      content:
        "With over a decade in the travel industry, our team of seasoned professionals has the knowledge and insider insights to curate the perfect travel experience. We ensure every detail is taken care of, so you can travel with confidence and peace of mind.",
    },
    {
      image: whyImg3,
      content:
        "With over a decade in the travel industry, our team of seasoned professionals has the knowledge and insider insights to curate the perfect travel experience. We ensure every detail is taken care of, so you can travel with confidence and peace of mind.",
    },
    {
      image: whyImg4,
      content:
        "With over a decade in the travel industry, our team of seasoned professionals has the knowledge and insider insights to curate the perfect travel experience. We ensure every detail is taken care of, so you can travel with confidence and peace of mind.",
    },
  ];

  const [progress, setProgress] = useState(10);
  const [show, setShow] = useState(0);

  const handleProgressClick = (value) => {
    setProgress(value);
    if (value === 10) {
      setShow(0);
    }
    if (value === 35) {
      setShow(1);
    }
    if (value === 66) {
      setShow(2);
    }
    if (value === 100) {
      setShow(3);
    }
  };

  return (
    <section className="why">
      <div className="why-container">
        <h2>Why choose us?</h2>

        <div className="progress">
          <Box className="progress-box">
            <div className="progress-bar">
              <LinearProgress
                variant="determinate"
                value={progress}
                className="progress-bar-content"
              />
            </div>
            <div className="text-container">
              <p
                onClick={() => handleProgressClick(10)}
                className={progress >= 10 ? "active" : ""}
              >
                Expertise and Experience
              </p>
              <p
                onClick={() => handleProgressClick(35)}
                className={progress >= 35 ? "active" : ""}
              >
                Personalized Service
              </p>
              <p
                onClick={() => handleProgressClick(66)}
                className={progress >= 66 ? "active" : ""}
              >
                Comprehensive Support
              </p>
              <p
                onClick={() => handleProgressClick(100)}
                className={progress >= 100 ? "active" : ""}
              >
                Exclusive Offers and Deals
              </p>
            </div>
          </Box>

          <div className="show">
            <img src={data[show].image} alt="" />
            <p>{data[show].content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;

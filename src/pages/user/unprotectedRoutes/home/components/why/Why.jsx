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
        "We don’t believe in overwhelming you with endless choices. Instead, we focus on a select few destinations to ensure every trip is extraordinary. Our handpicked locations promise unique experiences and immersive adventures that you won’t find elsewhere. We’re all about quality and exclusivity, curating each holiday to be an unforgettable adventure.",
    },
    {
      image: whyImg2,
      content:
        "Who says luxury has to come with a hefty price tag? We bring you the best of both worlds—affordable luxury that doesn’t compromise on quality. Our packages are designed to give you a taste of opulence without stretching your wallet. Experience the finer things in life while still getting incredible value for your money.",
    },
    {
      image: whyImg4,
      content:
        "Dreaming of a getaway but worried about the cost? Our “Travel Now, Pay Later” option makes it easier to take the plunge. Enjoy your holiday without financial stress, and pay in a way that suits your budget. It’s all about making travel accessible and enjoyable for everyone, no matter your financial situation.",
    },
    {
      image: whyImg3,
      content:
        "We’re not just a travel agency; we’re your travel partners. From the moment you start planning to the day you return home, we’re here to make your journey smooth and memorable. Our team is dedicated to ensuring every aspect of your holiday exceeds expectations, providing support and care every step of the way.",
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
                Handpicked Destinations
              </p>
              <p
                onClick={() => handleProgressClick(35)}
                className={progress >= 35 ? "active" : ""}
              >
                Luxurious Experiences at Unbeatable Prices
              </p>
              <p
                onClick={() => handleProgressClick(66)}
                className={progress >= 66 ? "active" : ""}
              >
                Travel Now, Pay Later
              </p>
              <p
                onClick={() => handleProgressClick(100)}
                className={progress >= 100 ? "active" : ""}
              >
                Personalized Attention
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

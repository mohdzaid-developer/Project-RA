import { useEffect, useState } from "react";
import "./packages.scss";

//Routing
import { Link } from "react-router-dom";

// Animation
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

//Assets
import buttonArrowImg from "@/assets/rightArrow.svg";

const Packages = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const details = gsap.utils.toArray(".desktopContentSection");
    const photos = gsap.utils.toArray(".desktopPhoto");

    gsap.set(photos.slice(1), { yPercent: 101 });

    let mm = gsap.matchMedia();

    mm.add("(min-width: 600px)", () => {
      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".packages-right",
      });

      details.forEach((detail, index) => {
        let headline = detail.querySelector("h2");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(photos[index], { autoAlpha: 1 });

        ScrollTrigger.create({
          trigger: headline,
          start: "top 50%",
          end: "bottom 50%",
          animation: animation,
          scrub: true,
          onEnter: () => setCurrentIndex(index + 1),
          onEnterBack: () => setCurrentIndex(index + 1),
          onLeaveBack: () => setCurrentIndex(index),
        });
      });

      // Control the visibility of the fixed center div
      ScrollTrigger.create({
        trigger: ".packages",
        start: "top top",
        end: "bottom 50%",
        onEnter: () => setIsVisible(true),
        onLeave: () => setIsVisible(false),
        onEnterBack: () => setIsVisible(true),
        onLeaveBack: () => setIsVisible(false),
      });

      // Make the fixed container disappear when the last section is 50% out of view
      ScrollTrigger.create({
        trigger: details[details.length - 1],
        start: "top 50%",
        end: "bottom bottom",
        onLeave: () => setIsVisible(false),
        onEnterBack: () => setIsVisible(true),
      });
    });

    return () => {
      mm.kill();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <div className="packages">
      <div className="gallery">
        <div className="packages-left">
          <div className="desktopContent">
            {data.packageData.map((item, index) => (
              <div className="desktopContentSection" key={index}>
                {item.test}

                <div className="content">
                  <div className="logo">
                    <img src={item.logo} alt="" />
                  </div>

                  <div className="line"></div>

                  <div className="text">
                    <h2>{item.packageName}</h2>
                    <p>{item.description}</p>
                  </div>

                  <div className="button">
                    <Link to={`${item.url}`}>
                      View Package <img src={buttonArrowImg} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="packages-right">
          <div className="desktopPhotos">
            {data.packageData.map((item, index) => (
              <div
                key={index}
                className="desktopPhoto"
                style={{ backgroundImage: `url(${item.leftImg})` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="fixed-center">
          <div className="number">{`0${currentIndex}`}</div>
          <div className="total">/04</div>
        </div>
      )}
    </div>
  );
};

export default Packages;
import { useEffect, useState } from "react";
import "./gallery.scss";

//Animations
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import imagesLoaded from "imagesloaded";
import { footerFadeInAnimation } from "@/utils/animations/animations";

import img1 from "@/assets/galleryImg1.jpeg";
import img2 from "@/assets/galleryImg2.jpeg";
import img3 from "@/assets/galleryImg3.webp";
import img4 from "@/assets/galleryImg4.jpeg";
import img5 from "@/assets/galleryImg5.webp";
import img6 from "@/assets/galleryImg6.webp";
import img7 from "@/assets/galleryImg7.jpeg";
import img8 from "@/assets/galleryImg8.jpeg";
import img9 from "@/assets/galleryImg9.webp";
import img10 from "@/assets/galleryImg10.jpeg";
import img11 from "@/assets/galleryImg11.webp";
import img12 from "@/assets/galleryImg12.jpeg";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  let lenis;

  const preloadImages = (selector = "img") => {
    return new Promise((resolve) => {
      imagesLoaded(
        document.querySelectorAll(selector),
        { background: true },
        resolve
      );
    });
  };

  const initSmoothScrolling = () => {
    lenis = new Lenis({
      lerp: 0.15,
      smoothWheel: true,
    });

    lenis.on("scroll", () => ScrollTrigger.update());

    const scrollFn = (time) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);
  };

  const scrollAnimations = () => {
    const grid = document.querySelector(".columns");
    const columns = [...grid.querySelectorAll(".column")];
    const items = columns.map((column, pos) =>
      [...column.querySelectorAll(".column__item")].map((item) => ({
        element: item,
        column: pos,
        wrapper: item.querySelector(".column__item-imgwrap"),
        image: item.querySelector(".column__item-img"),
      }))
    );
    const mergedItems = items.flat();

    gsap.to(columns[1], {
      ease: "none",
      scrollTrigger: {
        trigger: grid,
        start: "clamp(top bottom)",
        end: "clamp(bottom top)",
        scrub: true,
      },
      yPercent: -20,
    });

    mergedItems.forEach((item) => {
      if (item.column === 1) return;

      gsap.to(item.wrapper, {
        ease: "none",
        startAt: {
          transformOrigin: item.column === 0 ? "0% 100%" : "100% 100%",
        },
        scrollTrigger: {
          trigger: item.element,
          start: "clamp(top bottom)",
          end: "clamp(bottom top)",
          scrub: true,
        },
        rotation: item.column === 0 ? -6 : 6,
        xPercent: item.column === 0 ? -10 : 10,
      });
    });
  };

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

  useEffect(() => {
    preloadImages(".column__item-img").then(() => {
      initSmoothScrolling();
      scrollAnimations();
      setLoading(false);
    });
  }, []);

  return (
    <>
      <div className="home-gallery">
        <h2>Gallery</h2>
        <p>An Experience filled with love</p>
      </div>
      <div className={`demo-2 ${loading ? "loading" : ""}`}>
        <main className="gallery-slide">
          <div className="columns">
            <div className="column">
              {[img1, img2, img3, img4].map((img, idx) => (
                <figure
                  className="column__item"
                  key={idx}
                  onClick={() => handleImageClick(img)}
                >
                  <div className="column__item-imgwrap">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: `url(${img})` }}
                    ></div>
                  </div>
                </figure>
              ))}
            </div>
            <div className="column">
              {[img9, img10, img11, img12].map((img, idx) => (
                <figure
                  className="column__item"
                  key={idx}
                  onClick={() => handleImageClick(img)}
                >
                  <div className="column__item-imgwrap">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: `url(${img})` }}
                    ></div>
                  </div>
                </figure>
              ))}
            </div>
            <div className="column">
              {[img5, img6, img7, img8].map((img, idx) => (
                <figure
                  className="column__item"
                  key={idx}
                  onClick={() => handleImageClick(img)}
                >
                  <div className="column__item-imgwrap">
                    <div
                      className="column__item-img"
                      style={{ backgroundImage: `url(${img})` }}
                    ></div>
                  </div>
                </figure>
              ))}
            </div>
          </div>
        </main>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="modal"
            onClick={closeModal}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={footerFadeInAnimation}
          >
            <div className="modal-content">
              <img src={currentImage} alt="Modal Content" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Gallery;

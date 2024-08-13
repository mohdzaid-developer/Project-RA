import { useEffect, useState } from "react";
import "./gallery.scss";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "lenis";
import imagesLoaded from "imagesloaded";

import img1 from "@/assets/galleryImg1.webp";
import img2 from "@/assets/galleryImg2.webp";
import img3 from "@/assets/galleryImg3.webp";
import img4 from "@/assets/galleryImg4.webp";
import img5 from "@/assets/galleryImg5.webp";
import img6 from "@/assets/galleryImg6.webp";
import img7 from "@/assets/galleryImg7.webp";
import img8 from "@/assets/galleryImg8.webp";
import img9 from "@/assets/galleryImg9.webp";
import img10 from "@/assets/galleryImg10.webp";
import img11 from "@/assets/galleryImg11.webp";
import img12 from "@/assets/galleryImg12.webp";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const [loading, setLoading] = useState(true);
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
        <main>
          <div className="columns">
            <div className="column">
              <figure className="column__item">
                <div className="column__item-imgwrap">
                  <div
                    className="column__item-img"
                    style={{ backgroundImage: `url(${img1})` }}
                  ></div>
                </div>
              </figure>

              <figure className="column__item">
                <div className="column__item-imgwrap">
                  <div
                    className="column__item-img"
                    style={{ backgroundImage: `url(${img2})` }}
                  ></div>
                </div>
              </figure>

              <figure className="column__item">
                <div className="column__item-imgwrap">
                  <div
                    className="column__item-img"
                    style={{ backgroundImage: `url(${img3})` }}
                  ></div>
                </div>
              </figure>

              <figure className="column__item">
                <div className="column__item-imgwrap">
                  <div
                    className="column__item-img"
                    style={{ backgroundImage: `url(${img4})` }}
                  ></div>
                </div>
              </figure>
            </div>
            <div className="column">
              <figure className="column__item">
                <div className="column__item-imgwrap">
                  <div
                    className="column__item-img"
                    style={{ backgroundImage: `url(${img5})` }}
                  ></div>
                </div>
              </figure>

              <figure className="column__item">
                <div className="column__item-imgwrap">
                  <div
                    className="column__item-img"
                    style={{ backgroundImage: `url(${img6})` }}
                  ></div>
                </div>
              </figure>

              <figure className="column__item">
                <div className="column__item-imgwrap">
                  <div
                    className="column__item-img"
                    style={{ backgroundImage: `url(${img7})` }}
                  ></div>
                </div>
              </figure>

              <figure className="column__item">
                <div className="column__item-imgwrap">
                  <div
                    className="column__item-img"
                    style={{ backgroundImage: `url(${img8})` }}
                  ></div>
                </div>
              </figure>
            </div>
            <div className="column">
              <figure className="column__item">
                <div className="column__item-imgwrap">
                  <div
                    className="column__item-img"
                    style={{ backgroundImage: `url(${img9})` }}
                  ></div>
                </div>
              </figure>

              <figure className="column__item">
                <div className="column__item-imgwrap">
                  <div
                    className="column__item-img"
                    style={{ backgroundImage: `url(${img10})` }}
                  ></div>
                </div>
              </figure>

              <figure className="column__item">
                <div className="column__item-imgwrap">
                  <div
                    className="column__item-img"
                    style={{ backgroundImage: `url(${img11})` }}
                  ></div>
                </div>
              </figure>

              <figure className="column__item">
                <div className="column__item-imgwrap">
                  <div
                    className="column__item-img"
                    style={{ backgroundImage: `url(${img12})` }}
                  ></div>
                </div>
              </figure>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Gallery;

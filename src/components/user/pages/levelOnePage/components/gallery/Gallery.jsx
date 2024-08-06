import { useEffect, useRef } from "react";
import "./gallery.scss";

//Animation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Gallery = ({ data }) => {
  const containerRef = useRef(null);
  const textOverlayRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const images = imagesRef.current;
    const centerIndex = Math.floor(images.length / 2);
    const centerImage = images[centerIndex];

    const animateCenterImage = () => {
      gsap.to(centerImage, {
        width: "100vw",
        height: "100vh",
        scale: 1.5,
        opacity: 0.7,
        objectFit: "cover",
        transformOrigin: "center center",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });
    };

    const animateOtherImages = () => {
      images.forEach((image, index) => {
        if (index !== centerIndex) {
          gsap.to(image, {
            opacity: 0,
            x: (index < centerIndex ? -1 : 1) * 500,
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    };

    const animateTextOverlay = () => {
      gsap.to(textOverlayRef.current, {
        opacity: 1,
        y: -50,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top+=52% center",
          end: "bottom top",
          scrub: true,
          onLeaveBack: () => {
            gsap.to(textOverlayRef.current, {
              opacity: 0,
              y: 50,
              duration: 1,
              ease: "power2.out",
            });
          },
        },
      });
    };

    gsap.set(textOverlayRef.current, { opacity: 0, y: 50 });

    animateCenterImage();
    animateOtherImages();
    animateTextOverlay();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="level-one-gallery">
        <h2>{data.title} | Gallery</h2>
      </div>
      <div className="level-one-gallery-container" ref={containerRef}>
        {data.galleryImg.map((image, i) => (
          <div className="image" key={i}>
            <img
              src={image}
              alt={`Image ${i + 1}`}
              ref={(el) => (imagesRef.current[i] = el)}
            />
          </div>
        ))}
        <div className="text-overlay" ref={textOverlayRef}>
          <p>
            Within this meticulously arranged AI-generated ensemble lies a
            <br />
            tantalizing facade, captivating our gaze. Yet, as we search for the
            <br />
            soul of human expression, we question whether algorithms can truly
            <br />
            embody the essence of authentic art.
          </p>
        </div>
      </div>
    </>
  );
};

export default Gallery;

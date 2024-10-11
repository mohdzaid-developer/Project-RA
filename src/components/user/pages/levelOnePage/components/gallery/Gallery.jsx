import { useEffect, useRef, useState } from "react";
import "./gallery.scss";

//Routing
import { useLocation } from "react-router-dom";

//Animation
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AnimatePresence, motion } from "framer-motion";
import { footerFadeInAnimation } from "@/utils/animations/animations";

gsap.registerPlugin(ScrollTrigger);

const Gallery = ({ data }) => {
  const location = useLocation();

  const [content, setContent] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const containerRef = useRef(null);
  const textOverlayRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    if (location.pathname === "/phuket") {
      setContent({
        line1:
          "Phuket is a slice of paradise where turquoise waters kiss golden sands, and every sunset paints",
        line2:
          "the sky in dreamy hues. Lush greenery, vibrant markets, and hidden coves make this island a",
        line3:
          "treasure trove of natural beauty and cultural charm. Whether you're soaking up the sun or exploring its wonders",
      });
    }
    if (location.pathname === "/bali") {
      setContent({
        line1:
          "It’s a paradise of golden beaches, ancient temples, and endless adventures.",
        line2: "Whether you’re craving peace or thrill, Bali has it all.",
        line3:
          " Once you visit, you’ll never want to leave this magical island.",
      });
    }
  }, []);

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

  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImage(null);
  };

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
              onClick={() => handleImageClick(image)}
            />
          </div>
        ))}
        <div className="text-overlay" ref={textOverlayRef}>
          <p>
            {content.line1}
            <br />
            {content.line2}
            <br />
            {content.line3}
          </p>
        </div>
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

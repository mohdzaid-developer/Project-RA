import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Test() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".photo:not(:first-child)", { opacity: 0, scale: 0.5 });

      const animation = gsap.to(".photo:not(:first-child)", {
        opacity: 1,
        scale: 1,
        duration: 1,
        stagger: 1,
      });

      ScrollTrigger.create({
        trigger: ".gallery",
        start: "top top",
        end: "bottom bottom",
        pin: ".rightblock",
        animation: animation,
        scrub: true,
        markers: true,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="gallery" style={{ display: "flex" }}>
      <div
        className="left"
        style={{
          width: "50%",
          marginLeft: "auto",
        }}
      >
        <div
          className="details"
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "40vw",
            marginLeft: "auto",
            color: "#000",
            fontSize: "3rem",
            fontWeight: 900,
          }}
        >
          BRAND PRODUCT
        </div>
        <div
          className="details"
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "40vw",
            marginLeft: "auto",
            color: "#000",
            fontSize: "3rem",
            fontWeight: 900,
          }}
        >
          PRODUCT DETAILS
        </div>
        <div
          className="details"
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "40vw",
            marginLeft: "auto",
            color: "#000",
            fontSize: "3rem",
            fontWeight: 900,
          }}
        >
          DESIGN AGENCY
        </div>
      </div>
      <div
        className="rightblock"
        style={{
          width: "50%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "40vw",
            height: "40vw",
            position: "relative",
          }}
        >
          <div
            className="photo"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="http://static.showit.co/800/M0IzUCMvQCqlJn1YtNlikw/59514/pexels-yan-5793641-1.jpg"
              alt="img-1"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div
            className="photo"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="http://static.showit.co/800/137NFxuzSxeyjlons2WEzA/59514/pexels-yan-5793643.jpg"
              alt="img-2"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <div
            className="photo"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="http://static.showit.co/800/3kOLYaOCS1SMieN6Y88Fqg/59514/mukuko-studio-mu88mlefcou-unsplash.jpg"
              alt="img-3"
              style={{
                height: "100%",
                width: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test;

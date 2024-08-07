import React, { useState } from "react";
import "./Authentication.scss";

//components
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import { useLocation } from "react-router-dom";

const Authentication = () => {
  const location=useLocation()
  console.log(location)
  const [sliderPosition, setSliderPosition] = useState(1);

  let a = "already have an account";
  let b = "create new account";

  const changeSlider = () => {
    if (sliderPosition) {
      setSliderPosition(false);
    } else {
      setSliderPosition(1);
    }
  };

  return (
    <div className="authContainer">
      <div className="authMiddle">
        <div className={`signUp ${sliderPosition ? "in" : "out"}`}>
          <SignIn
            setSliderPosition={setSliderPosition}
            sliderPosition={sliderPosition}
          />
        </div>
        <div className={`signUp ${sliderPosition ? "out" : "in"}`}>
          <SignUp
            setSliderPosition={setSliderPosition}
            sliderPosition={sliderPosition}
          />
        </div>

        {/* silder */}

        <div
          className="authsilder"
          style={
            !sliderPosition
              ? { left: "0", transition: "2s" }
              : { right: "0", transition: "2s !important" }
          }
        >
          <p>{sliderPosition ? b : a}</p>
          <button onClick={changeSlider}>
            {sliderPosition ? "SignUp" : "SignIn"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

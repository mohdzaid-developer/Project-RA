import React, { useState } from "react";
import "./Authentication.scss";

//components
import SignIn from "../signIn/SignIn";
import SignUp from "../signUp/SignUp";
import { useLocation, Navigate, useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sliderPosition, setSliderPosition] = useState(1);

  const otpData = JSON.parse(sessionStorage.getItem("otpInfo"));
  if (otpData) {
    return <Navigate to="/otp" />;
  }

  let a = "already have an account";
  let b = "create new account";

  const changeSlider = () => {
    if (location?.pathname == "/login") {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="authContainer">
      <div className="authMiddle">
        <div
          className={`signUp ${location?.pathname == "/login" ? "in" : "out"}`}
        >
          <SignIn
            setSliderPosition={setSliderPosition}
            sliderPosition={sliderPosition}
          />
        </div>
        <div
          className={`signUp ${location?.pathname == "/login" ? "out" : "in"}`}
        >
          <SignUp
            setSliderPosition={setSliderPosition}
            sliderPosition={sliderPosition}
          />
        </div>

        <div
          className="authsilder"
          style={
            location?.pathname != "/login"
              ? { left: "0", transition: "2s" }
              : { right: "0", transition: "2s !important" }
          }
        >
          <p>{location?.pathname == "/login" ? b : a}</p>
          <button onClick={changeSlider}>
            {location?.pathname == "/login" ? "SignUp" : "SignIn"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

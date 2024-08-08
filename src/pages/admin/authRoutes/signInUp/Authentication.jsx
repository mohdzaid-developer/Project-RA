import React, { useEffect, useState } from "react";
import "./Authentication.scss";

//Routes
import { useLocation, Navigate, useNavigate } from "react-router-dom";

//components
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";


const Authentication = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [sliderPosition, setSliderPosition] = useState(1);

  let a = "already have an account";
  let b = "create new account";

  const changeSlider = () => {
    if (location?.pathname == "/admin/login") {
      navigate("/admin/register");
    } else {
      navigate("/admin/login");
    }
  };

  useEffect(() => {
    const otpData = JSON.parse(sessionStorage.getItem("adminOtpInfo"));
    if (otpData) {
      navigate("/admin/otp")
    }
  }, []);
  return (
    <div className="authContainer">
      <div className="authMiddle">
        <div
          className={`signUp ${
            location?.pathname == "/admin/login" ? "in" : "out"
          }`}
        >
          <SignIn
            setSliderPosition={setSliderPosition}
            sliderPosition={sliderPosition}
          />
        </div>
        <div
          className={`signUp ${
            location?.pathname == "/admin/login" ? "out" : "in"
          }`}
        >
          <SignUp
            setSliderPosition={setSliderPosition}
            sliderPosition={sliderPosition}
          />
        </div>

        <div
          className="authsilder"
          style={
            location?.pathname != "/admin/login"
              ? { left: "0", transition: "2s" }
              : { right: "0", transition: "2s !important" }
          }
        >
          <p>{location?.pathname == "/admin/login" ? b : a}</p>
          <button onClick={changeSlider}>
            {location?.pathname == "/admin/login" ? "SignUp" : "SignIn"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

import React, { useState } from "react";
import "../signIn/SignIn.css";
// import { useRegisterMutation } from '../../../../../redux/Apis/authSlice'
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
// import { setOtp } from '../../../../../redux/authSlice';
import { useDispatch, useSelector } from "react-redux";
import { useUserSignUpMutation } from "@/redux/slice/user/api/authUserApiSlice";

const SignUp = ({ setSliderPosition, sliderPosition }) => {
  const [register]=useUserSignUpMutation()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeSlider = () => {
    if (sliderPosition) {
      setSliderPosition(false);
    } else {
      setSliderPosition(1);
    }
  };

  // collecting data
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    const fullNameRegex = /^[a-zA-z]{4,}$/;
    const mailFormat =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // Define the password validation criteria using regular expressions
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;

    if (data) {
      console.log(data)
      if (data.fullName == "") {
        return alert("please enter your full name");
      } else if (!data.fullName.match(fullNameRegex)) {
        return alert(
          "A minimum 4 characters name contains a combination only characters"
        );
      }
      // email validation
      else if (!data.email.match(mailFormat)) {
        return alert("Invalid email !");
      }

      //  password validation
      // if (!passwordRegex.test(data.password)) {
      //   return alert(
      //     "Password must be between 8 and 15 characters, & include at least one uppercase letter, one lowercase letter, & one number & special char ."
      //   );
      // }
      let res = await register({ ...data });
      if (res && res.error && res.error.data && res.error.data.message) {
        alert(res.error.data.message);
      }
      if (res && res.data && res.data.data && res.data.data.message) {
        alert(res.data.data.message);

        // dispatch(setOtp(res.data.data));
        sessionStorage.setItem("data", JSON.stringify(res.data.data));
        navigate("/otp");
        setData({
          fullName: "",
          phone: "",
          email: "",
          password: "",
        });
      }
    } else {
      alert("please enter all the fields");
    }
  };

  return (
    <div className="auth">
      <div className="auth-heading">
        <h2>SignUp</h2>
        <p>Create Your Account</p>
      </div>

      <div className="authSlides">
        <div className="authSlide">
          <input
            type="text"
            name="fullName"
            value={data.fullName}
            id=""
            placeholder="Enter your Full Name"
            onChange={onChangeHandler}
          />
        </div>

        <div className="authSlide">
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter Email  "
            onChange={onChangeHandler}
          />
        </div>

        <div className="authSlide">
          <input
            type="phone"
            name="phone"
            value={data.phone}
            placeholder="Enter your phone number  "
            onChange={onChangeHandler}
          />
        </div>

        <div className="authSlide">
          <input
            type="password"
            name="repeatPassword"
            value={data.repeatPassword}
            placeholder="Enter your Password again"
            onChange={onChangeHandler}
          />
        </div>
      </div>

      <button className="authButton" onClick={handleSignUp}>
        Sign Up
      </button>
      <div className="nonee">
        already have an account <span onClick={changeSlider}>Sign in</span>
      </div>
    </div>
  );
};

export default SignUp;

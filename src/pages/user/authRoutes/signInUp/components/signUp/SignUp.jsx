import React, { useEffect, useState } from "react";
import "../signIn/SignIn.css";
// import { useRegisterMutation } from '../../../../../redux/Apis/authSlice'
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
// import { setOtp } from '../../../../../redux/authSlice';
import { useDispatch, useSelector } from "react-redux";
import { useUserSignUpMutation } from "@/redux/slice/user/api/authUserApiSlice";
import { userSignUpSchema } from "@/components/user/validation/validations";

const SignUp = ({ setSliderPosition, sliderPosition }) => {
  const [studentSignUp] = useUserSignUpMutation();
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
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const onChangeHandler = async (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    try {
      await userSignUpSchema.validateAt(name, { [name]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (err) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userSignUpSchema.validate(data, { abortEarly: false });
      const response = await studentSignUp(data);
      if (response && response.data) {
        sessionStorage.setItem(
          "beforeLoginAccessToken",
          JSON.stringify(response.data.data.accessToken)
        );
        sessionStorage.setItem("otpInfo", JSON.stringify(response.data.data));
        toast.success(response.data.data.message);
        navigate("/otp");
        setData({
          fullName: "",
          phone: "",
          email: "",
          password: "",
        });
        setErrors({});
      }

      if (response?.error?.data?.message) {
        toast.error(response.error.data.message);
        setErrors({});
      }
    } catch (err) {
      const newErrors = {};
      console.log(err);
      if (err) {
        err.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
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
          {errors?.fullName && (
            <p style={{ color: "red" }}>{errors?.fullName}</p>
          )}
        </div>

        <div className="authSlide">
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Enter Email  "
            onChange={onChangeHandler}
          />
          {errors?.email && <p style={{ color: "red" }}>{errors?.email}</p>}
        </div>

        <div className="authSlide">
          <input
            type="phone"
            name="phone"
            value={data.phone}
            placeholder="Enter your phone number  "
            onChange={onChangeHandler}
          />
          {errors?.phone && <p style={{ color: "red" }}>{errors?.phone}</p>}
        </div>

        <div className="authSlide">
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Enter your Password again"
            onChange={onChangeHandler}
          />
          {errors?.password && (
            <p style={{ color: "red" }}>{errors?.password}</p>
          )}
        </div>
      </div>

      <button className="authButton" onClick={handleSubmit}>
        Sign Up
      </button>
      <div className="none">
        already have an account <span onClick={()=>navigate("/register")}>Sign in</span>
      </div>
    </div>
  );
};

export default SignUp;

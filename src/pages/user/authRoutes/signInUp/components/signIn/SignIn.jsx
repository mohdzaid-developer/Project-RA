import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { useUserLoginMutation } from "@/redux/slice/user/api/authUserApiSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLoginValidationSchema } from "@/components/user/validation/validations";

const SignIn = ({ setSliderPosition, sliderPosition }) => {
  const [studentLogin] = useUserLoginMutation();
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
    password: "",
    email: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSignIn = async (e) => {
    try {
      await userLoginValidationSchema.validate(data, { abortEarly: false });
      const response = await studentLogin(data);
      if (response?.data?.data) {
        sessionStorage.setItem("user", JSON.stringify(response?.data?.data));
        navigate("/dashboard");
        setData({
          password: "",
          email: "",
        });
      }

      if (response?.error?.data?.message) {
        alert(response?.error?.data?.message);
      }
    } catch (err) {
      if (err && err.inner) {
        const newErrors = {};
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      } else {
        toast.error("Something went wrong !");
      }
    }
  };
  return (
    <div className="auth">
      <div className="auth-heading">
        <h2>SignIn</h2>
        <p>with your account</p>
      </div>

      <div className="authSlides">
        <div className="authSlide">
          <input
            type="email"
            name="email"
            id=""
            placeholder="Enter Email"
            onChange={onChangeHandler}
          />
          {errors?.email && <p style={{ color: "red" }}>{errors?.email}</p>}
        </div>

        <div className="authSlide">
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter your Password  "
            onChange={onChangeHandler}
          />
          {errors?.password && (
            <p style={{ color: "red" }}>{errors?.password}</p>
          )}
          <Link to="/forget-password">
            {" "}
            <h3>Forget Password</h3>
          </Link>
        </div>
      </div>

      <button className="authButton" onClick={handleSignIn}>
        Sign In
      </button>

      <div className="none">
        create new account <span onClick={()=>navigate("/login")}>Sign Up</span>
      </div>
    </div>
  );
};

export default SignIn;

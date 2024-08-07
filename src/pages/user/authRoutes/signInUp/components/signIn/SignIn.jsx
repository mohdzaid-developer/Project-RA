import React, { useState } from "react";
import "./SignIn.css";
import { Link } from "react-router-dom";
import { useUserLoginMutation } from "@/redux/slice/user/api/authUserApiSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SignIn = ({ setSliderPosition, sliderPosition }) => {
  // const [login]=useLoginMutation()
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
    password: "",
    repeatPassword: "",
    email: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    console.log(data);
    const fullnameRegex = /^[a-zA-z]{4,}$/;
    const mailformat =
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    // Define the password validation criteria using regular expressions
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{8,}$/;

    if (data) {
      // email validation
      if (!data.email.match(mailformat)) {
        return alert("Invalid email !");
      }

      //  password validation
      if (!passwordRegex.test(data.password)) {
        return toast.error(
          "Password must be between 8 and 15 characters, & include at least one uppercase letter, one lowercase letter, & one number & special char ."
        );
      }

      let res = await login({ ...data });
      console.log(res);
      if (res && res.error && res.error.data && res.error.data.message) {
        alert(res.error.data.message);
      }
      if (res && res.data) {
        localStorage.setItem("data", JSON.stringify(res.data));
        // dispatch(setUsers(res.data))
        navigate("/dashboard");
        setData({
          fullName: "",
          password: "",
          repeatPassword: "",
          email: "",
        });
      }
    } else {
      alert("please enter all the fields");
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
        </div>

        <div className="authSlide">
          <input
            type="password"
            name="password"
            id=""
            placeholder="Enter your Password  "
            onChange={onChangeHandler}
          />
          <Link to="/forget-password">
            {" "}
            <h3>Forget Password</h3>
          </Link>
        </div>
      </div>

      {/* <Link to="/dashboard"> */}
        <button className="authButton" onClick={handleSignIn}>Sign In</button>
      {/* </Link> */}

      <div className="none">
        create new account <span onClick={changeSlider}>Sign Up</span>
      </div>
    </div>
  );
};

export default SignIn;

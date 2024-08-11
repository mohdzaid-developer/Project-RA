import React, { useState } from "react";
import "../signIn/SignIn.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useAdminSignUpMutation } from "@/redux/slice/admin/api/authAdminApiSlice";
import { adminSignUpValidationSchema } from "@/components/admin/validation/validations";

const SignUp = () => {
  const [adminSignUp] = useAdminSignUpMutation();
  const navigate = useNavigate();

  // collecting data
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    fullName: "",
    email: "",
  });
  const onChangeHandler = async (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    try {
      await adminSignUpValidationSchema.validateAt(name, { [name]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (err) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await adminSignUpValidationSchema.validate(data, { abortEarly: false });
      const response = await adminSignUp(data);
      if (response && response.data) {
        sessionStorage.setItem("adminOtpInfo", JSON.stringify(response.data.data));
        toast.success(response.data.data.message);
        navigate("/admin/otp");
        setData({
          fullName: "",
          email: "",
        });
        setErrors({});
      }

      if (response?.error?.data?.message) {
        toast.error(response.error.data.message);
        setErrors({});
      }
    } catch (err) {
      const newErrors = {};
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
      </div>

      <button className="authButton" onClick={handleSubmit}>
        Sign Up
      </button>
      <div className="none">
        already have an account{" "}
        <span onClick={() => navigate("/admin/register")}>Sign in</span>
      </div>
    </div>
  );
};

export default SignUp;

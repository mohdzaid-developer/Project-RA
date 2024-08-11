import React, { useState } from "react";
import "./SignIn.css";
import { useAdminLoginMutation } from "@/redux/slice/admin/api/authAdminApiSlice";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { adminLoginValidationSchema } from "@/components/admin/validation/validations";

const SignIn = () => {
  const [adminLogin] = useAdminLoginMutation();
  const navigate = useNavigate();

  // collecting data
  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: "",
  });
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSignIn = async (e) => {
    try {
      await adminLoginValidationSchema.validate(data, { abortEarly: false });
      const response = await adminLogin(data);
      if (response?.data?.data) {
        sessionStorage.setItem("adminOtpInfo", JSON.stringify(response?.data?.data));
        navigate("/admin/otp");
        setData({
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
      </div>

      <button className="authButton" onClick={handleSignIn}>
        Sign In
      </button>

      <div className="none">
        create new account <span onClick={()=>navigate("/admin/login")}>Sign Up</span>
      </div>
    </div>
  );
};

export default SignIn;

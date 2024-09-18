import { useState } from "react";
import "./forgetPassword.scss";

//Alert
import { toast } from "react-hot-toast";

//Routing
import { Navigate, useNavigate } from "react-router-dom";

//Validation
import { forgetPasswordValidationSchema } from "@/utils/validation/userValidations";

//Assets
import buttonArrowImg from "@/assets/rightArrow.webp";

//Components
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

//Redux
import { useUserForgetPasswordMutation } from "@/redux/slice/user/api/userApiSlice";

const ForgetPassword = () => {
  const otpData = JSON.parse(sessionStorage.getItem("otpInfo"));
  if (otpData) {
    return <Navigate to="/otp" />;
  }
  const navigate = useNavigate();
  const [studentForgetPassword, { isLoading }] =
    useUserForgetPasswordMutation();
  const [user, setUser] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    try {
      await forgetPasswordValidationSchema.validateAt(name, { [name]: value });
    } catch (err) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await forgetPasswordValidationSchema.validate(user, {
        abortEarly: false,
      });
      const response = await studentForgetPassword(user);
      if (response && response.data) {
        toast.success("Successfully sent otp!");
        setErrors({});
        setUser({
          email: "",
        });
        navigate("/otp");
        sessionStorage.setItem("otpInfo", JSON.stringify(response.data.data));
      }
      if (response && response.error) {
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
    <div className="forgetPassword-container">
      <div className="forgetPassword-content">
        <h2>Forget Password</h2>
      </div>
      <div className="forgetPassword-form">
        <div className="forgetPassword-form-container">
          <div className="forgetPassword-input">
            <label htmlFor="">Email : </label>
            <input type="text" name="email" onChange={handleChange} />
            {errors?.email && <p className="error-text">{errors?.email}</p>}
          </div>

          <button className="authButton" onClick={handleSubmit}>
            {isLoading ? (
              <CircularProgressBar />
            ) : (
              <>
                Submit <img src={buttonArrowImg} alt="" />
              </>
            )}
          </button>

          <div className="forgetPassword-login">
            <p>
              Want to go Login?{" "}
              <span onClick={() => navigate("/login")}>Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

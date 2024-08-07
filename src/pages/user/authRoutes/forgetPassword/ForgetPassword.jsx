import {useState} from "react";
import "./ForgetPassword.css";
import "../../authRoutes/signInUp/components/signIn/SignIn.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useUserForgetPasswordMutation } from "@/redux/slice/user/api/authUserApiSlice";
import { forgetPasswordValidationSchema } from "@/components/user/validation/validations";
import {toast} from "react-hot-toast";

const ForgetPassword = () => {
  const otpData = JSON.parse(sessionStorage.getItem("otpInfo"));
  if (otpData) {
    return <Navigate to="/otp" />;
  }
  const navigate = useNavigate();
  const [studentForgetPassword] = useUserForgetPasswordMutation();
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
        navigate("/otp")
        sessionStorage.setItem(
          "otpInfo",
          JSON.stringify(response.data.data)
        );
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
    <div className="forgetpassword">
      <div className="middleSlide">
        <div className="auth">
          <div className="auth-heading">
            <h2>Forget Password</h2>
          </div>

          <div className="authSlides">
            <div className="authSlide">
              <input
                type="text"
                name="email"
                id=""
                placeholder="Enter Email  "
                onChange={handleChange}
              />
              {errors?.email && <p style={{ color: "red" }}>{errors?.email}</p>}
              <Link to="/login">
                {" "}
                <h3>go to signIn</h3>
              </Link>
            </div>
          </div>

          <button className="authButton" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

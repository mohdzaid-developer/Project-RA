import { useState } from "react";
import "./signUp.scss";

//Routing
import { useNavigate, Navigate } from "react-router-dom";

//Alert
import { toast } from "react-hot-toast";

//Validation
import { userSignUpSchema } from "@/utils/validation/userValidations";

//Assets
import buttonArrowImg from "@/assets/rightArrow.webp";

//Components
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

//Redux
import { useUserSignUpMutation } from "@/redux/slice/user/api/userApiSlice";

const SignUp = () => {
  const otpData = JSON.parse(sessionStorage.getItem("otpInfo"));
  if (otpData) {
    return <Navigate to="/otp" />;
  }
  const navigate = useNavigate();
  const [userSignUp, { isLoading }] = useUserSignUpMutation();

  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = async (e) => {
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
      const response = await userSignUp(data);
      if (response && response.data) {
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
      if (err) {
        err.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className="signUp-container">
      <div className="signUp-content">
        <h2>Signup</h2>
      </div>
      <div className="signUp-form">
        <div className="signUp-form-container">
          <div className="signUp-input">
            <label htmlFor="">Full name : </label>
            <input
              type="text"
              name="fullName"
              value={data.fullName}
              id=""
              onChange={handleChange}
            />
            {errors?.fullName && (
              <p className="error-text">{errors?.fullName}</p>
            )}
          </div>
          <div className="signUp-input">
            <label htmlFor="">Email : </label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            {errors?.email && <p className="error-text">{errors?.email}</p>}
          </div>
          <div className="signUp-input">
            <label htmlFor="">Phone number : </label>
            <input
              type="phone"
              name="phone"
              value={data.phone}
              onChange={handleChange}
            />
            {errors?.phone && <p className="error-text">{errors?.phone}</p>}
          </div>
          <div className="signUp-input">
            <label htmlFor="">Password : </label>
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            {errors?.password && (
              <p className="error-text">{errors?.password}</p>
            )}
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

          <div className="signUp-signIn">
            <p>
              Already have an account!{" "}
              <span onClick={() => navigate("/login")}> login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

import { useState } from "react";
import "./signIn.scss";

//Alert
import { toast } from "react-hot-toast";

//Routing
import { Link, useLocation, useNavigate } from "react-router-dom";

//Validation
import { userLoginValidationSchema } from "@/utils/validation/userValidations";

//Assets
import buttonArrowImg from "@/assets/rightArrow.webp";

//Components
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

//Redux
import { useUserLoginMutation } from "@/redux/slice/user/api/userApiSlice";
import { useDispatch } from "react-redux";
import {
  setLogin,
  setParamsQuery,
} from "@/redux/slice/user/state/authUserSlice";

const SignIn = () => {
  let location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userLogin, { isLoading }] = useUserLoginMutation();

  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    let separatedUrl = location?.search?.split("=")[1]?.replace(/\?/g, "/");
    try {
      await userLoginValidationSchema.validate(data, { abortEarly: false });
      const response = await userLogin(data);
      if (response?.data?.data) {
        sessionStorage.setItem("user", JSON.stringify(response?.data?.data));
        if (separatedUrl) {
          dispatch(setParamsQuery(separatedUrl));
          dispatch(setLogin());
          navigate(`${separatedUrl}`);
        } else {
          dispatch(setLogin());
          navigate("/profile");
        }
        setData({
          password: "",
          email: "",
        });
      }

      if (response?.error?.data?.message) {
        toast.error(response?.error?.data?.message);
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
    <div className="signIn-container">
      <div className="signIn-content">
        <h2>Login</h2>
      </div>
      <div className="signIn-form">
        <div className="signIn-form-container">
          <div className="signIn-input">
            <label htmlFor="">Email : </label>
            <input type="email" name="email" onChange={handleChange} />
            {errors?.email && <p className="error-text">{errors?.email}</p>}
          </div>
          <div className="signIn-input">
            <label htmlFor="">Password : </label>
            <input type="password" name="password" onChange={handleChange} />
            {errors?.password && (
              <p className="error-text">{errors?.password}</p>
            )}

            <div className="signIn-forgetPassword">
              <Link to="/forget-password">Forget Password</Link>
            </div>
          </div>

          <button onClick={handleSubmit} className="authButton">
            {isLoading ? (
              <CircularProgressBar />
            ) : (
              <>
                Submit <img src={buttonArrowImg} alt="" />
              </>
            )}
          </button>

          <div className="signIn-signUp">
            <p>
              Don't have an account!{" "}
              <span onClick={() => navigate("/signup")}> Sign Up</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

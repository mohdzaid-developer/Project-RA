import { useState } from "react";
import "./signIn.scss";

//Alert
import { toast } from "react-hot-toast";

//Routing
import { Link, useNavigate } from "react-router-dom";

//Assets
import buttonArrowImg from "@/assets/rightArrow.webp";

//Redux
import { userLoginValidationSchema } from "@/components/user/validation/validations";
import { useUserLoginMutation } from "@/redux/slice/user/api/authUserApiSlice";

const SignIn = () => {
  const navigate = useNavigate();
  const [userLogin] = useUserLoginMutation();

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
    try {
      await userLoginValidationSchema.validate(data, { abortEarly: false });
      const response = await userLogin(data);
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
    <div className="signIn-container">
      <div className="content">
        <h2>Login</h2>
      </div>
      <div className="form-container">
        <div className="form-container-right">
          <div>
            <label htmlFor="">Email : </label>
            <input type="email" name="email" onChange={handleChange} />
            {errors?.email && <p className="error-text">{errors?.email}</p>}
          </div>
          <div>
            <label htmlFor="">Password : </label>
            <input type="password" name="password" onChange={handleChange} />
            {errors?.password && (
              <p className="error-text">{errors?.password}</p>
            )}

            <div className="forgetPassword">
              <Link to="/forget-password">Forget Password</Link>
            </div>
          </div>

          <button className="authButton" onClick={handleSubmit}>
            Submit <img src={buttonArrowImg} alt="" />
          </button>

          <div className="signUp">
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

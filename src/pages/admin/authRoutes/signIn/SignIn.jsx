import { useState, useEffect } from "react";
import "./signIn.scss";

//Alert
import { toast } from "react-hot-toast";

//Routing
import { useNavigate } from "react-router-dom";

//Validation
import { adminLoginValidationSchema } from "@/utils/validation/adminValidations";

//Assets
import buttonArrowImg from "@/assets/rightArrow.webp";

//Components
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

//Redux
import { useAdminLoginMutation } from "@/redux/slice/admin/api/adminApiSlice";

const SignIn = () => {
  const [adminLogin, { isLoading }] = useAdminLoginMutation();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [data, setData] = useState({
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    try {
      await adminLoginValidationSchema.validate(data, { abortEarly: false });
      const response = await adminLogin(data);
      if (response?.data?.data) {
        sessionStorage.setItem(
          "adminOtpInfo",
          JSON.stringify(response?.data?.data)
        );
        navigate("/admin/otp");
        setData({
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

  useEffect(() => {
    const otpData = JSON.parse(sessionStorage.getItem("adminOtpInfo"));
    if (otpData) {
      navigate("/admin/otp");
    }
  }, []);
  return (
    <div className="signIn-container">
      <div className="content">
        <h2>Admin Login</h2>
      </div>
      <div className="form-container">
        <div className="form-container-right">
          <div>
            <label htmlFor="">Email : </label>
            <input type="email" name="email" onChange={handleChange} />
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
        </div>
      </div>
    </div>
  );
};

export default SignIn;

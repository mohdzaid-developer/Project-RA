import { useEffect, useState } from "react";
import "./changePassword.scss";

//Routing
import { useNavigate } from "react-router-dom";

//Alert
import { toast } from "react-hot-toast";

//Assets
import buttonArrowImg from "@/assets/rightArrow.webp";

//Validation
import { changePasswordValidationSchema } from "@/utils/validation/userValidations";

//Components
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

//Redux
import { useUserChangePasswordMutation } from "@/redux/slice/user/api/userApiSlice";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [studentUpdatePassword, { isLoading }] =
    useUserChangePasswordMutation();
  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setPassword((prevPassword) => ({
      ...prevPassword,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
    try {
      const validationValues =
        name === "confirmPassword"
          ? { [name]: value, password: password.password }
          : { [name]: value };
      await changePasswordValidationSchema.validateAt(name, validationValues);
    } catch (err) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: err.message,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await changePasswordValidationSchema.validate(password, {
        abortEarly: false,
      });
      const data = { ...password };
      delete data.confirmPassword;
      const response = await studentUpdatePassword(data);
      console.log(response);
      if (response?.data?.statusCode == 200) {
        toast.success("Successfully changed password!");
        setErrors({});
        sessionStorage?.removeItem("changePasswordInfo");
        navigate("/login");
        setPassword({
          oldPassword: "",
          newPassword: "",
        });
      }
      if (response?.error) {
        toast.error(response.error.data.errors[0].message);
        setErrors({});
      }
    } catch (err) {
      const newErrors = {};
      if (err) {
        err?.inner?.forEach((err) => {
          newErrors[err?.path] = err?.message;
        });
        setErrors(newErrors);
      }
    }
  };

  useEffect(() => {
    let changePasswordInfo = JSON.parse(
      sessionStorage?.getItem("changePasswordInfo")
    );
    if (!changePasswordInfo) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="changePassword-container">
      <div className="changePassword-content">
        <h2>Change Password</h2>
      </div>
      <div className="changePassword-form">
        <div className="changePassword-form-container">
          <div className="changePassword-input">
            <label htmlFor="">Password : </label>
            <input type="password" name="password" onChange={handleChange} />
            {errors?.password && (
              <p className="error-text">{errors?.password}</p>
            )}
          </div>

          <div className="changePassword-input">
            <label htmlFor="">Confirm Password : </label>
            <input
              type="password"
              name="confirmPassword"
              onChange={handleChange}
            />
            {errors?.confirmPassword && (
              <p className="error-text">{errors?.confirmPassword}</p>
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
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;

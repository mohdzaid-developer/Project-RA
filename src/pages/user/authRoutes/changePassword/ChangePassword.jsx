import React, { useEffect, useState } from "react";
import "./ChangePassword.css";
// import "../signIn/SignIn.css";
import { Link, useNavigate } from "react-router-dom";
import { changePasswordValidationSchema } from "@/components/user/validation/validations";
import { useUserChangePasswordMutation } from "@/redux/slice/user/api/authUserApiSlice";
import { toast } from "react-hot-toast";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [studentUpdatePassword] = useUserChangePasswordMutation();
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
    <div className="forgetpassword">
      <div className="middleSlide">
        <div className="auth">
          <div className="auth-heading">
            <h2>Change Password</h2>
          </div>

          <div className="authSlides">
            <div className="authSlide">
              <input
                type="password"
                name="password"
                id=""
                placeholder="Enter password  "
                onChange={handleChange}
              />
              {errors?.password && (
                <p style={{ color: "red" }}>{errors?.password}</p>
              )}
            </div>

            <div className="authSlide">
              <input
                type="password"
                name="confirmPassword"
                id=""
                placeholder="Enter password again  "
                onChange={handleChange}
              />
              {errors?.confirmPassword && (
                <p style={{ color: "red" }}>{errors?.confirmPassword}</p>
              )}
              <Link to="/login">
                {" "}
                <h3>go back</h3>
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

export default ChangePassword;

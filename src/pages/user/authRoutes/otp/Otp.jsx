import { useState } from "react";
import "./otp.scss";

//Alert
import { toast } from "react-hot-toast";

//Routing
import { useNavigate } from "react-router-dom";

//Assets
import buttonArrowImg from "@/assets/rightArrow.webp";

//Validation
import { otpValidationSchema } from "@/utils/validation/userValidations";

//Components
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

//Redux
import {
  useUserOtpVerifyMutation,
  useUserResendOtpMutation,
} from "@/redux/slice/user/api/userApiSlice";

const Otp = () => {
  const navigate = useNavigate();

  const [userOtpVerify, { isLoading: otpVerifyLoading }] =
    useUserOtpVerifyMutation();
  const [userResendOtp, { isLoading: resendOtpLoading }] =
    useUserResendOtpMutation();

  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState("");

  const handleSubmit = async () => {
    try {
      await otpValidationSchema.validate({ otp: otp }, { abortEarly: false });
      const response = await userOtpVerify(otp);
      if (response?.data?.data?.message) {
        toast.success("Email verification successful!");
        sessionStorage?.removeItem("otpInfo");
        if (response?.data?.data?.changePassword) {
          sessionStorage.setItem(
            "changePasswordInfo",
            JSON.stringify({ ...response?.data?.data })
          );
          navigate("/change-password");
        } else {
          navigate("/login");
        }
      } else {
        if (response?.error) {
          toast.error(response?.error.data.message);
        }
      }
    } catch (err) {
      const newErrors = {};
      err.inner.forEach((err) => {
        newErrors[err.path] = err?.message;
      });
      setErrors(newErrors);
    }
  };

  const handleResendOtp = async () => {
    setOtp("");
    const response = await userResendOtp();
    if (response?.data?.data) {
      toast.success("Successfully Sent Otp!");
      setErrors({});
      sessionStorage.setItem(
        "otpInfo",
        JSON.stringify({ ...response?.data?.data })
      );
    }
    if (response && response.error) {
      toast.error(response.error.data.message);
      setErrors({});
    }
  };

  return (
    <div className="otp-container">
      <div className="otp-content">
        <h2>Verify Otp</h2>
      </div>
      <div className="otp-form">
        <div className="otp-form-container">
          <div className="otp-input">
            <label htmlFor="">Otp : </label>
            <input
              type="text"
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
            {errors?.otp && <p className="error-text">{errors?.otp}</p>}

            <div className="otp-resend">
              <p onClick={handleResendOtp}>
                {resendOtpLoading ? <CircularProgressBar /> : " Resend Otp"}
              </p>
            </div>
          </div>

          <button onClick={handleSubmit} className="authButton">
            {otpVerifyLoading ? (
              <CircularProgressBar color="#ffffff" />
            ) : (
              <>
                Submit <img src={buttonArrowImg} alt="" />
              </>
            )}
          </button>

          <div className="otp-forget-password">
            <p>
              Want to change Email?{" "}
              <span onClick={() => navigate("/forget-password")}>
                Forget Password
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;

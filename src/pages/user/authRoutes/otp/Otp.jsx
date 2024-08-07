import { useState } from "react";
import "../forgetPassword/ForgetPassword.css";
import "../signInUp/components/signIn/SignIn.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  useUserOtpVerifyMutation,
  useUserResendOtpMutation,
} from "@/redux/slice/user/api/authUserApiSlice";
import { otpValidationSchema } from "@/components/user/validation/validations";
import { toast } from "react-hot-toast";

const Otp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        sessionStorage?.removeItem("otpInfo")
        if(response?.data?.data?.changePassword){
          navigate("/change-password")
        }else{
          navigate("/login")
        }

      }else{
        console.log(response)
        if(response?.error?.data?.errors[0]?.message){
          toast.error(response?.error?.data?.errors[0]?.message)
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
    setOtp("")
    // setOtpArray(new Array(6).fill(""));
    // setIsResendDisabled(true);
    // setCount(30);
    const response = await userResendOtp();
    if (response?.data?.data) {
      toast.success("Successfully Sent Otp!");
      setErrors({});
      sessionStorage.setItem("otpInfo",JSON.stringify({...response?.data?.data}))
    }
    if (response && response.error) {
      toast.error(response.error.data.message);
      setErrors({});
    }
    // setTimeout(() => {
    //   setIsResendDisabled(false);
    // }, 30000);
  };
  return (
    <div className="forgetpassword">
      <div className="middleSlide">
        <div className="auth">
          <div className="auth-heading">
            <h2>Verify Otp</h2>
          </div>

          <div className="authSlides">
            <div className="authSlide">
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter otp"
                onChange={(e) => {
                  setOtp(e.target.value);
                }}
              />
              {errors?.otp && (
                <p style={{ color: "red" }}>{errors?.otp}</p>
              )}
              <h3 onClick={handleResendOtp}>resend</h3>
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

export default Otp;

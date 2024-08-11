import { useState } from "react";
import "../../../user/authRoutes/forgetPassword/ForgetPassword.css";
import "../signInUp/components/signIn/SignIn.css";
import { useNavigate } from "react-router-dom";
import {
  useAdminOtpVerifyMutation,
  useAdminResendOtpMutation,
} from "@/redux/slice/admin/api/authAdminApiSlice";
import { otpValidationSchema } from "@/components/user/validation/validations";
import { toast } from "react-hot-toast";

const Otp = () => {
  const navigate = useNavigate();

  const [adminOtpVerify, { isLoading: otpVerifyLoading }] =
  useAdminOtpVerifyMutation();
  const [adminResendOtp, { isLoading: resendOtpLoading }] =
  useAdminResendOtpMutation();

  const [errors, setErrors] = useState({});
  const [otp, setOtp] = useState("");

  const handleSubmit = async () => {
    try {
      await otpValidationSchema.validate({ otp: otp }, { abortEarly: false });
      const response = await adminOtpVerify(otp);
      if (response?.data?.data) {
        if(response?.data?.data?.isLogin==true){
          sessionStorage?.removeItem("adminOtpInfo")
          sessionStorage.setItem("admin",JSON.stringify({...response?.data?.data}))
          navigate("/admin/dashboard")
        }else{
          toast.success("Email verification successful!");
          sessionStorage?.removeItem("adminOtpInfo")
          navigate("/admin/login")
        }
      }else{
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
    const response = await adminResendOtp();
    if (response?.data?.data) {
      toast.success("Successfully Sent Otp!");
      setErrors({});
      sessionStorage.setItem("adminOtpInfo",JSON.stringify({...response?.data?.data}))
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

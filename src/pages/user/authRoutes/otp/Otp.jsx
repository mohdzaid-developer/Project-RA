import React, { useState } from "react";
import "../forgetPassword/ForgetPassword.css";
import "../signInUp/components/signIn/SignIn.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useUserOtpVerifyMutation,useUserResendOtpMutation } from "@/redux/slice/user/api/authUserApiSlice";

const Otp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userOtpVerify,{isLoading:otpVerifyLoading}]=useUserOtpVerifyMutation()
  const [userResendOtp,{isLoading:resendOtpLoading}]=useUserResendOtpMutation()

  const [otp, setOtp] = useState("");

  const handleSubmit = async () => {
    if (!otp || otp.length < 4) {
      return alert("invalid otp");
    }

    const res=await userOtpVerify()

    if (res && res.data && res.data.data && res.data.data.message) {
      alert(res.data.data.message);
      if (res.data.data.message != "invalid otp !.") {
        dispatch(removeOtp());
        sessionStorage.removeItem("data");
        navigate("/dashboard");
      }
    } else {
      console.log(res);
    }
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
              <h3>resend</h3>
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

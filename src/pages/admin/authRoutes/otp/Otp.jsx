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
  useAdminOtpVerifyMutation,
  useAdminResendOtpMutation,
} from "@/redux/slice/admin/api/adminApiSlice";
import { useDispatch } from "react-redux";
import { setLogin } from "@/redux/slice/admin/state/authAdminSlice";

const Otp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      if(response?.error?.data?.data){
        toast.error(response?.error?.data?.data?.message);
      }
      if (response?.data?.data) {
        console.log(response);
        if (response?.data?.data?.isLogin == true) {
          sessionStorage?.removeItem("adminOtpInfo");
          sessionStorage.setItem(
            "admin",
            JSON.stringify({ ...response?.data?.data })
          );
          dispatch(setLogin());
          navigate("/admin/trips");
        } else {
          toast.success("Email verification successful!");
          sessionStorage?.removeItem("adminOtpInfo");
          navigate("/admin/login");
        }
      } else {
        if (response?.error?.data?.errors[0]?.message) {
          toast.error(response?.error?.data?.errors[0]?.message);
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
    const response = await adminResendOtp();
    if (response?.data?.data) {
      toast.success("Successfully Sent Otp!");
      setErrors({});
      sessionStorage.setItem(
        "adminOtpInfo",
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
      <div className="content">
        <h2>Verify Otp</h2>
      </div>
      <div className="form-container">
        <div className="form-container-right">
          <div>
            <label htmlFor="">Otp : </label>
            <input
              type="text"
              onChange={(e) => {
                setOtp(e.target.value);
              }}
            />
            {errors?.otp && <p className="error-text">{errors?.otp}</p>}

            <div className="resend">
              <p onClick={handleResendOtp}>Resend Otp</p>
            </div>
          </div>

          <button className="authButton" onClick={handleSubmit}>
            {otpVerifyLoading ? (
              <CircularProgressBar />
            ) : (
              <>
                Submit <img src={buttonArrowImg} alt="" />
              </>
            )}
          </button>

          <div className="forget-password">
            <p>
              Want to change Email?{" "}
              <span onClick={() => navigate("/forget-password")}>Login</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;

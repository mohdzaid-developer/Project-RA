import { useState, useEffect } from "react";
import "./newsLetter.scss";

//Alert
import { toast } from "react-hot-toast";

//Animations
import { motion } from "framer-motion";
import { footerFadeInAnimation } from "@/utils/animations/animations";

//Mui
import { Checkbox } from "@mui/material";

//Assets
import closeImg from "@/assets/error.webp";
import buttonArrowImg from "@/assets/rightArrow.webp";
import tick from "@/assets/checked.png";

//Global Component
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

//Validation
import { userNewsLetterSchema } from "@/utils/validation/userValidations";

//Redux
import { usePostNewsLetterMutation } from "@/redux/slice/user/api/userApiSlice";

const NewsLetter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isComponentClosed = sessionStorage.getItem("isContactClosed");
    if (!isComponentClosed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 8000);

      return () => clearTimeout(timer);
    }
  }, []);

  const [postNewsLetter, { isLoading }] = usePostNewsLetterMutation();

  const [errors, setErrors] = useState({});
  const [details, setDetails] = useState({
    email: "",
    phone: "",
    termsAndCondition: "",
  });
  const handleChange = async (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userNewsLetterSchema.validate(details, { abortEarly: false });
      const response = await postNewsLetter(details);
      if (response.data) {
        toast.success(response?.data.data.message);
        setDetails({
          email: "",
          phone: "",
          termsAndCondition: false,
        });
        setErrors({});
        setIsVisible(false);
        sessionStorage.setItem("isContactClosed", "true");
      }

      if (response?.error?.data?.message) {
        toast.error(response.error.data.message);
        setErrors({});
      }
    } catch (err) {
      const newErrors = {};
      if (err) {
        err?.inner?.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    sessionStorage.setItem("isContactClosed", "true");
  };

  return (
    <motion.div
      className={`form ${isVisible ? "visible" : ""}`}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={footerFadeInAnimation}
    >
      <div className="content">
        <h2>Get an instant call back from our team</h2>
        <img src={closeImg} alt="Close" onClick={handleClose} />
      </div>
      <div className="form-container">
        <div className="form-container-left">
          <div className="input">
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={details?.phone}
              onChange={handleChange}
            />
            {errors?.email && <p className="error-text">{errors?.email}</p>}{" "}
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={details.email}
              onChange={handleChange}
            />
            {errors?.phone && <p className="error-text">{errors?.phone}</p>}
          </div>
          <div className="checkbox-container">
            <div className="checkbox">
              <Checkbox
                required
                checked={details?.termsAndCondition}
                name="termsAndCondition"
                onChange={handleChange}
                className="checkbox-box"
              />
              <p className="checkbox-para">
                By accepting, you agree to subscribe to our newsletter and
                receive updates, exclusive offers, and the latest news directly
              </p>
            </div>
            {errors?.termsAndCondition && (
              <p className="error-text">{errors?.termsAndCondition}</p>
            )}
          </div>
          <button onClick={handleSubmit} className="authButton">
            {isLoading ? (
              <CircularProgressBar />
            ) : (
              <>
                Submit <img src={buttonArrowImg} alt="Arrow" />
              </>
            )}
          </button>
        </div>
        <div className="form-container-right">
          <h3>Don't miss out on our exclusive deals & offers !</h3>
          <div className="list">
            <p>
              <img src={tick} alt="" />
              Rated best travel partner
            </p>
            <p>
              <img src={tick} alt="" />
              Most experienced
            </p>
            <p>
              <img src={tick} alt="" />
              Choose from wide range of packages
            </p>
          </div>
          <div className="help">
            <h3>We are happy to help you</h3>
            <div className="link">
              <a href="#">+91-8989898989</a>
              <a href="#">admin@comeflywithme.co.in</a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default NewsLetter;

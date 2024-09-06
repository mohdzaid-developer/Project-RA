import { useState, useEffect } from "react";
import "./newsLetter.scss";

//Animations
import { motion } from "framer-motion";
import { footerFadeInAnimation } from "@/utils/animations/animations";

//Util
import { userContactUsSchema } from "@/utils/validation/userValidations";

//Assets
import closeImg from "@/assets/error.webp";
import buttonArrowImg from "@/assets/rightArrow.webp";
import tick from "@/assets/checked.png";

//Global Component
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

//Redux
import { usePostContactUsMutation } from "@/redux/slice/user/api/userApiSlice";

const NewsLetter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const isComponentClosed = sessionStorage.getItem("isContactClosed");
    if (!isComponentClosed) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  const [PostContactUs, { isLoading }] = usePostContactUsMutation();

  const [errors, setErrors] = useState({});
  const [details, setDetails] = useState(null);

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setDetails({ ...details, [name]: value });
    try {
      await userContactUsSchema.validateAt(name, { [name]: value });
      setErrors((prevErrors) => ({ ...prevErrors, [name]: "" }));
    } catch (err) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: err.message }));
    }
  };

  const handleSubmit = async () => {
    try {
      await userContactUsSchema.validate({ ...details }, { abortEarly: false });
      const response = await PostContactUs({ ...details });
      if (response && response.data) {
        sessionStorage.setItem("otpInfo", JSON.stringify(response.data.data));
        toast.success(response.data.data.message);
        setIsVisible(false);
        setDetails({
          fullName: "",
          phone: "",
          email: "",
          message: "",
        });
        setErrors({});
      }

      if (response?.error?.data?.message) {
        toast.error(response.error.data.message);
        setErrors({});
      }
    } catch (err) {
      const newErrors = {};
      if (err) {
        err.inner.forEach((err) => {
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
          <div>
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              onChange={handleChange}
            />
            {errors?.phone && <p className="error-text">{errors?.phone}</p>}
          </div>
          <div>
            <input
              type="text"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            {errors?.email && <p className="error-text">{errors?.email}</p>}
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

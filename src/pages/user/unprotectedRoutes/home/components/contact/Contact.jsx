import { useState, useEffect } from "react";
import "./contact.scss";

//Animation
import { motion } from "framer-motion";
import { footerFadeInAnimation } from "@/utils/animations/animations";

//Util
import { userContactUsSchema } from "@/utils/validation/userValidations";

//Assets
import closeImg from "@/assets/error.webp";
import buttonArrowImg from "@/assets/rightArrow.webp";

//Global Component
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

//Redux
import { usePostContactUsMutation } from "@/redux/slice/user/api/userApiSlice";

const Contact = () => {
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
        <h2>Get in touch</h2>
        <img src={closeImg} alt="Close" onClick={handleClose} />
      </div>
      <div className="form-container">
        <div className="form-container-left">
          <div>
            <input
              type="text"
              placeholder="Name"
              name="fullName"
              onChange={handleChange}
            />
            {errors?.fullName && (
              <p className="error-text">{errors?.fullName}</p>
            )}
          </div>
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
        </div>
        <div className="form-container-right">
          <div className="input">
            <p className="title">Tell us how can we help</p>
            <textarea name="message" onChange={handleChange} />
            {errors?.message && <p className="error-text">{errors?.message}</p>}
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
      </div>
    </motion.div>
  );
};

export default Contact;

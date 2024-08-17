import { useState } from "react";
import "./footer.scss";

import { AnimatePresence, motion } from "framer-motion";
import { footerFadeInAnimation } from "@/utils/animations/animations";

//Routing
import { Link } from "react-router-dom";

//Util
import { userContactUsSchema } from "@/utils/validation/userValidations";

///Global Component
import CircularProgressBar from "@/components/global/circularProgressBar/CircularProgressBar";

//Assets
import facebookImg from "@/assets/facebookImg.webp";
import twitterImg from "@/assets/instagramImg.webp";
import instagramImg from "@/assets/twitterImg.webp";
import linkendInImg from "@/assets/linkedInImg.webp";
import buttonArrowImg from "@/assets/rightArrow.webp";
import closeImg from "@/assets/error.webp";

//Redux
import { usePostContactUsMutation } from "@/redux/slice/user/api/userApiSlice";

const Footer = () => {
  const [PostContactUs, { isLoading }] = usePostContactUsMutation();
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState({});
  const [details, setDetails] = useState(null);

  const handleChange =async(e) => {
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
    // e.preventDefault();
    try {
      await userContactUsSchema.validate({...details}, { abortEarly: false });
      const response = await PostContactUs({ ...details });
      if (response && response.data) {
        sessionStorage.setItem("otpInfo", JSON.stringify(response.data.data));
        toast.success(response.data.data.message);
        navigate("/otp");
        setData({
          fullName: "",
          phone: "",
          email: "",
          password: "",
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
          console.log(err)
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };
  return (
    <footer>
      <h2 className="heading">
        Journey Beyond Boundaries, Discover the <br /> World with Us
      </h2>
      <AnimatePresence>
        {open && (
          <motion.div
            className="form"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={footerFadeInAnimation}
          >
            <div className="content">
              <h2>Get in touch</h2>
              <img src={closeImg} alt="" onClick={() => setOpen(false)} />
            </div>
            <div className="form-container">
              <div className="form-container-left">
                <input
                  type="text"
                  placeholder="Name"
                  name="fullName"
                  onChange={handleChange}
                />
                {errors?.fullName && (
                  <p className="error-text">{errors?.fullName}</p>
                )}
                <input
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  onChange={handleChange}
                />
                {errors?.phone && <p className="error-text">{errors?.phone}</p>}
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  onChange={handleChange}
                />
                {errors?.email && <p className="error-text">{errors?.email}</p>}
              </div>
              <div className="form-container-right">
                <div className="input">
                  <p>Tell us how can we help</p>
                  <input
                    type="text"
                    name="message"
                    onChange={handleChange}
                  ></input>
                  {errors?.message && (
                    <p style={{color:"red"}}>{errors?.message}</p>
                  )}
                </div>
                <button onClick={handleSubmit} className="authButton">
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
          </motion.div>
        )}
      </AnimatePresence>

      <div className="links">
        <div className="links-left">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms & Conditions</Link>
          <div className="socials">
            <a href="#">
              <img src={facebookImg} alt="" />
            </a>
            <a href="#">
              <img src={instagramImg} alt="" />
            </a>
            <a href="#">
              <img src={twitterImg} alt="" />
            </a>
            <a href="#">
              <img src={linkendInImg} alt="" />
            </a>
          </div>
        </div>
        <div className="links-right">
          <button onClick={() => setOpen(true)}>
            Reach out <img src={buttonArrowImg} alt="" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React, { useState } from "react";

//Alert
import {toast} from "react-hot-toast";

//Material Ui
import { Checkbox } from "@mui/material";

//Validation
import { userNewsLetterSchema } from "@/utils/validation/userValidations";

//Redux
import { usePostNewsLetterMutation } from "@/redux/slice/user/api/userApiSlice";

const NewsLetter = () => {
  const [postNewsLetter] = usePostNewsLetterMutation();
  const [errors, setErrors] = useState({});
  const [details, setDetails] = useState({
    email: "",
    phone: "",
    termsAndCondition: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details)
    try {
      await userNewsLetterSchema.validate(details, { abortEarly: false });
      const response = await postNewsLetter(details);

      console.log(response);
      if (response?.data?.data) {
        toast.success(response?.data?.data?.message);
        setDetails({
          email: "",
          phone: "",
          termsAndCondition:false,
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
        err?.inner?.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      }
    }
  };
  return (
    <div
      className=""
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "20vh",
      }}
    >
      <div className="slot">
        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          onChange={handleChange}
          value={details.email}
        />
        {errors?.email && <p className="error-text">{errors?.email}</p>}
      </div>

      <div className="slot">
        <input
          type="phone"
          name="phone"
          placeholder="Enter Your Phone Number"
          onChange={handleChange}
          value={details?.phone}
        />
        {errors?.phone && <p className="error-text">{errors?.phone}</p>}
      </div>

      <div className="SigUp-Checkbox">
        <div className="checkbox">
          <Checkbox
            required
            checked={details?.termsAndCondition}
            name="termsAndCondition"
            sx={{ color: "#E2E8F0" }}
            onChange={handleChange}
            className="checkbox-box"
          />
          <p id="Checkbox-Para">
            By creating an account means, you agree to the{" "}
            <span className="Checkbox">Terms & Conditions </span>and our{" "}
            <span className="Checkbox"> Privacy Policy</span>
          </p>
        </div>
        {errors?.termsAndCondition && (
          <p className="error-text">{errors?.termsAndCondition}</p>
        )}
      </div>

      <div className="submit-btn">
        <button className="" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;

//Validation
import * as Yup from "yup";

export const userSignUpSchema = Yup.object({
  fullName: Yup.string()
    .matches(
      /^(?:[a-zA-Z]+ ?){3,256}$/,
      "Full name should contain at least 3 letters!"
    )
    .required("Full name is required!"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Email is required!")
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Please enter your email address in format: example@gmail.com"
    ),
  phone: Yup.string()
    .matches(/^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/, "Invalid mobile number!")
    .required("Mobile number is required!"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z\d@#$%^&*+=_!~`()[\]{}|\\:;"'<,>.?/]{8,15}$/,
      "Password must be between 8 and 15 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character!"
    )
    .required("Password is required!"),
});

export const otpValidationSchema = Yup.object({
  otp: Yup.string()
    .min(4, "Otp has to be at least 4 digits!")
    .required("Otp is required!"),
});

export const userLoginValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter your email address in format: example@gmail.com")
    .required("Email is required!"),
  password: Yup.string().required("Password is required!"),
});

export const forgetPasswordValidationSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter your email address in format: example@gmail.com"
    )
    .required("Email is required!"),
});

export const changePasswordValidationSchema = Yup.object({
  password: Yup.string()
    .matches(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9])[A-Za-z\d@#$%^&*+=_!~`()[\]{}|\\:;"'<,>.?/]{8,15}$/,
      "Password must be between 8 and 15 characters and include at least one uppercase letter, one lowercase letter, one number, and one special character!"
    )
    .required("Password is required!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match!")
    .required("Confirm password is required!"),
});


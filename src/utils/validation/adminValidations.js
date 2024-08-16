//Validation
import * as Yup from "yup";

//ADMIN
export const adminLoginValidationSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter your email address in format: example@gmail.com"
    )
    .required("Email is required!"),
});

export const adminSignUpValidationSchema = Yup.object({
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
});

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

export const createOrderSchema = Yup.object({
  destination: Yup.string().required("Destination is required."),
  package: Yup.string().required("Package is required."),
  plan: Yup.string().required("Plan is required."),
  start_date: Yup.date()
    .required("Start date is required.")
    .typeError("Start date must be a valid date.")
    .min(new Date(), "Start date must be in the future."),
  end_date: Yup.date()
    .required("End date is required.")
    .typeError("End date must be a valid date.")
    .min(Yup.ref("start_date"), "End date must be after start date."),
  no_of_adults: Yup.number()
    .required("Number of adults is required.")
    .integer("Number of adults must be an integer.")
    .positive("Number of adults must be greater than zero.")
    .min(1, "There must be at least 1 adult."),
  no_of_children: Yup.number()
    .required("Number of children is required.")
    .integer("Number of children must be an integer.")
    .min(0, "Number of children cannot be negative."),
  // totalAmount: Yup
  //   .number()
  //   .required('Total amount is required.')
  //   .positive('Total amount must be greater than zero.')
});

export const createOrderSchemaSecond = Yup.object({
  destination: Yup.string().required("Destination is required."),
  package: Yup.string().required("Package is required."),
  plan: Yup.string().required("Plan is required."),
  start_date: Yup.date()
    .required("Start date is required.")
    .typeError("Start date must be a valid date.")
    .min(new Date(), "Start date must be in the future."),
  end_date: Yup.date()
    .required("End date is required.")
    .typeError("End date must be a valid date.")
    .min(Yup.ref("start_date"), "End date must be after start date."),
  no_of_adults: Yup.number()
    .required("Number of adults is required.")
    .integer("Number of adults must be an integer.")
    .positive("Number of adults must be greater than zero.")
    .min(1, "There must be at least 1 adult."),
  termsAndCondition: Yup.boolean().oneOf(
    [true],
    "Please accept terms and conditions!"
  ),
  // totalAmount: Yup
  //   .number()
  //   .required('Total amount is required.')
  //   .positive('Total amount must be greater than zero.')
});

export const userContactUsSchema = Yup.object({
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
  message: Yup.string()
    .min(40, "Message must be at least 40 characters!")
    .max(100, "Message must be at most 100 characters!")
    .required("Message is required!"),
});

export const userNewsLetterSchema = Yup.object({
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
  termsAndCondition: Yup.boolean().oneOf(
    [true],
    "Please accept terms and conditions!"
  ),
});

import { lazy } from "react";

//Auth Routes
export const UserLogin = lazy(() =>
  import("@/pages/user/authRoutes/login/login")
);
export const UserSignup = lazy(() =>
  import("@/pages/user/authRoutes/signup/Signup")
);
export const UserChangePassword = lazy(() =>
  import("@/pages/user/authRoutes/changePassword/ChangePassword")
);
export const UserForgetPassword = lazy(() =>
  import("@/pages/user/authRoutes/forgetPassword/ForgetPassword")
);
export const UserOtp = lazy(() => import("@/pages/user/authRoutes/otp/Otp"));

//Unprotected Routes
export const UserHome = lazy(() =>
  import("@/pages/user/unprotectedRoutes/home/Home")
);
export const UserBali = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/Bali")
);
export const UserPhuket = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/Phuket")
);
export const UserTermsAndCondition = lazy(() =>
  import("@/pages/user/unprotectedRoutes/termsAndConditions/TermsAndConditions")
);

//Protected Routes
export const UserViewProfile = lazy(() =>
  import("@/pages/user/protectedRoutes/profile/viewProfile/ViewProfile")
);
export const UserEditProfile = lazy(() =>
  import("@/pages/user/protectedRoutes/profile/editProfile/EditProfile")
);
export const UserPlanTrip = lazy(() =>
  import("@/pages/user/protectedRoutes/trip/planTrip/PlanTrip")
);
export const UserMyTrips = lazy(() =>
  import("@/pages/user/protectedRoutes/trip/myTrips/MyTrips")
);
export const UserPayment = lazy(() =>
  import("@/pages/user/protectedRoutes/payment/Payment")
);

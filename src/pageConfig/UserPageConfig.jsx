import { lazy } from "react";

//Auth Routes
export const UserLogin = lazy(() =>
  import("@/pages/user/authRoutes/signInUp/Authentication")
);
export const UserSignup = lazy(() =>
  import("@/pages/user/authRoutes/signInUp/Authentication")
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
export const UserBaliFriends = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/friends/Friends")
);
export const UserBaliFriendsStandard = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/bali/pages/friends/pages/standard/Standard"
  )
);
export const UserBaliFriendsDelux = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/friends/pages/delux/Delux")
);
export const UserBaliFriendsPremium = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/bali/pages/friends/pages/premium/Premium"
  )
);
export const UserBaliFamily = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/family/Family")
);
export const UserBaliCouple = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/couple/Couple")
);
export const UserBaliCustom = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/custom/Custom")
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

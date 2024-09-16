import { lazy } from "react";

//Auth Routes
export const UserLogin = lazy(() =>
  import("@/pages/user/authRoutes/signIn/SignIn")
);
export const UserSignup = lazy(() =>
  import("@/pages/user/authRoutes/signUp/SignUp")
);
export const UserChangePassword = lazy(() =>
  import("@/pages/user/authRoutes/changePassword/ChangePassword")
);
export const UserForgetPassword = lazy(() =>
  import("@/pages/user/authRoutes/forgetPassword/ForgetPassword")
);
export const UserOtp = lazy(() => import("@/pages/user/authRoutes/otp/Otp"));

//Protected Routes
export const UserProfile = lazy(() =>
  import("@/pages/user/protectedRoutes/profile/Profile")
);
export const UserMyTrips = lazy(() =>
  import("@/pages/user/protectedRoutes/myTrips/MyTrips")
);

//Unprotected Routes
export const UserHome = lazy(() =>
  import("@/pages/user/unprotectedRoutes/home/Home")
);
export const UserAbout = lazy(() =>
  import("@/pages/user/unprotectedRoutes/about/About")
);
export const UserPrivacyPolicy = lazy(() =>
  import("@/pages/user/unprotectedRoutes/privacyPolicy/PrivacyPolicy")
);
export const UserRefundPolicy = lazy(() =>
  import("@/pages/user/unprotectedRoutes/refundPolicy/RefundPolicy")
);
export const UserTermsAndCondition = lazy(() =>
  import("@/pages/user/unprotectedRoutes/termsAndConditions/TermsAndConditions")
);

//Bali
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
export const UserBaliFamilyStandard = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/bali/pages/family/pages/standard/Standard"
  )
);
export const UserBaliFamilyDelux = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/family/pages/delux/Delux")
);
export const UserBaliFamilyPremium = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/bali/pages/family/pages/premium/Premium"
  )
);
export const UserBaliCouple = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/couple/Couple")
);
export const UserBaliCoupleStandard = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/bali/pages/couple/pages/standard/Standard"
  )
);
export const UserBaliCoupleDelux = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/couple/pages/delux/Delux")
);
export const UserBaliCouplePremium = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/bali/pages/couple/pages/premium/Premium"
  )
);
export const UserBaliCustom = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/custom/Custom")
);
export const UserBaliCustomStandard = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/bali/pages/custom/pages/standard/Standard"
  )
);
export const UserBaliCustomDelux = lazy(() =>
  import("@/pages/user/unprotectedRoutes/bali/pages/custom/pages/delux/Delux")
);
export const UserBaliCustomPremium = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/bali/pages/custom/pages/premium/Premium"
  )
);

//Phuket
export const UserPhuket = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/Phuket")
);
export const UserPhuketFriends = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/pages/friends/Friends")
);
export const UserPhuketFriendsStandard = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/phuket/pages/friends/pages/standard/Standard"
  )
);
export const UserPhuketFriendsDelux = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/phuket/pages/friends/pages/delux/Delux"
  )
);
export const UserPhuketFriendsPremium = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/phuket/pages/friends/pages/premium/Premium"
  )
);
export const UserPhuketCouple = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/pages/couple/Couple")
);
export const UserPhuketCoupleStandard = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/phuket/pages/couple/pages/standard/Standard"
  )
);
export const UserPhuketCoupleDelux = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/pages/couple/pages/delux/Delux")
);
export const UserPhuketCouplePremium = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/phuket/pages/couple/pages/premium/Premium"
  )
);
export const UserPhuketFamily = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/pages/family/Family")
);
export const UserPhuketFamilyStandard = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/phuket/pages/family/pages/standard/Standard"
  )
);
export const UserPhuketFamilyDelux = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/pages/family/pages/delux/Delux")
);
export const UserPhuketFamilyPremium = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/phuket/pages/family/pages/premium/Premium"
  )
);
export const UserPhuketCustom = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/pages/custom/Custom")
);

export const UserPhuketCustomStandard = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/phuket/pages/custom/pages/standard/Standard"
  )
);
export const UserPhuketCustomDelux = lazy(() =>
  import("@/pages/user/unprotectedRoutes/phuket/pages/custom/pages/delux/Delux")
);
export const UserPhuketCustomPremium = lazy(() =>
  import(
    "@/pages/user/unprotectedRoutes/phuket/pages/custom/pages/premium/Premium"
  )
);

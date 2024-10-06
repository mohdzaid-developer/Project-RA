import { Suspense } from "react";

//Routing
import { Routes, Route } from "react-router-dom";

//ALert
import { Toaster } from "react-hot-toast";

//Loader
import Loader from "./utils/loader/Loader";

//Protected Routes
import UserAuthProtectedRoutes from "./protectedRoutes/user/UserAuthProtectedRoutes";
import UserAccountProtectedRoutes from "./protectedRoutes/user/UserAccountProtectedRoutes";
import AdminAuthProtectedRoutes from "./protectedRoutes/admin/AdminAuthProtectedRoutes";
import AdminAccountProtectedRoutes from "./protectedRoutes/admin/AdminAccountProtectedRoutes";

//Layouts
import UserRouteLayout from "./layouts/user/UserRouteLayout";
import AuthRouteLayout from "./layouts/auth/AuthRouteLayout";
import AdminRouteLayout from "./layouts/admin/AdminRouteLayout";

//Pages
import Fallback from "./components/global/fallback/Fallback";
import MobileScreen from "./components/global/mobileScreen/MobileScreen";

//Routes
import {
  UserSignup,
  UserLogin,
  UserChangePassword,
  UserForgetPassword,
  UserOtp,
  UserProfile,
  UserMyTrips,
  UserHome,
  UserAbout,
  UserPrivacyPolicy,
  UserRefundPolicy,
  UserTermsAndCondition,
  UserBali,
  UserBaliFriends,
  UserBaliFriendsStandard,
  UserBaliFriendsDelux,
  UserBaliFriendsPremium,
  UserBaliFamily,
  UserBaliFamilyStandard,
  UserBaliFamilyDelux,
  UserBaliFamilyPremium,
  UserBaliCouple,
  UserBaliCoupleStandard,
  UserBaliCoupleDelux,
  UserBaliCouplePremium,
  UserBaliCustom,
  UserBaliCustomStandard,
  UserBaliCustomDelux,
  UserBaliCustomPremium,
  UserPhuket,
  UserPhuketFriends,
  UserPhuketFriendsStandard,
  UserPhuketFriendsDelux,
  UserPhuketFriendsPremium,
  UserPhuketCouple,
  UserPhuketCoupleStandard,
  UserPhuketCoupleDelux,
  UserPhuketCouplePremium,
  UserPhuketFamily,
  UserPhuketFamilyStandard,
  UserPhuketFamilyDelux,
  UserPhuketFamilyPremium,
  UserPhuketCustom,
  UserPhuketCustomStandard,
  UserPhuketCustomDelux,
  UserPhuketCustomPremium,
} from "./pageConfig/UserPageConfig";
import {
  AdminLogin,
  AdminOtp,
  AdminDashboard,
  AdminUsers,
  AdminTrips,
  AdminSingleTripDetails,
  AdminCustom,
  AdminPayment,
  AdminQueries,
  AdminNewsLetter,
} from "./pageConfig/AdminPageConfig";

// Routes Data
const userAuthRoutesData = [
  {
    path: "/signup",
    element: <UserSignup />,
  },
  {
    path: "/login",
    element: <UserLogin />,
  },
  {
    path: "/change-password",
    element: <UserChangePassword />,
  },
  {
    path: "/forget-password",
    element: <UserForgetPassword />,
  },
  {
    path: "/otp",
    element: <UserOtp />,
  },
];
const userUnprotectedRoutesData = [
  {
    path: "/",
    element: <UserHome />,
  },
  {
    path: "/about-us",
    element: <UserAbout />,
  },
  {
    path: "/bali",
    element: <UserBali />,
  },
  {
    path: "/bali/friends",
    element: <UserBaliFriends />,
  },
  {
    path: "/bali/friends/standard",
    element: <UserBaliFriendsStandard />,
  },
  {
    path: "/bali/friends/delux",
    element: <UserBaliFriendsDelux />,
  },
  {
    path: "/bali/friends/premium",
    element: <UserBaliFriendsPremium />,
  },
  {
    path: "/bali/family",
    element: <UserBaliFamily />,
  },
  {
    path: "/bali/family/standard",
    element: <UserBaliFamilyStandard />,
  },
  {
    path: "/bali/family/delux",
    element: <UserBaliFamilyDelux />,
  },
  {
    path: "/bali/family/premium",
    element: <UserBaliFamilyPremium />,
  },
  {
    path: "/bali/couple",
    element: <UserBaliCouple />,
  },
  {
    path: "/bali/couple/standard",
    element: <UserBaliCoupleStandard />,
  },
  {
    path: "/bali/couple/delux",
    element: <UserBaliCoupleDelux />,
  },
  {
    path: "/bali/couple/premium",
    element: <UserBaliCouplePremium />,
  },
  {
    path: "/bali/custom",
    element: <UserBaliCustom />,
  },
  {
    path: "/bali/custom/standard",
    element: <UserBaliCustomStandard />,
  },
  {
    path: "/bali/custom/delux",
    element: <UserBaliCustomDelux />,
  },
  {
    path: "/bali/custom/premium",
    element: <UserBaliCustomPremium />,
  },
  {
    path: "/phuket",
    element: <UserPhuket />,
  },
  {
    path: "/phuket/friends",
    element: <UserPhuketFriends />,
  },
  {
    path: "/phuket/friends/standard",
    element: <UserPhuketFriendsStandard />,
  },
  {
    path: "/phuket/friends/delux",
    element: <UserPhuketFriendsDelux />,
  },
  {
    path: "/phuket/friends/premium",
    element: <UserPhuketFriendsPremium />,
  },
  {
    path: "/phuket/family",
    element: <UserPhuketFamily />,
  },
  {
    path: "/phuket/family/standard",
    element: <UserPhuketFamilyStandard />,
  },
  {
    path: "/phuket/family/delux",
    element: <UserPhuketFamilyDelux />,
  },
  {
    path: "/phuket/family/premium",
    element: <UserPhuketFamilyPremium />,
  },
  {
    path: "/phuket/couple",
    element: <UserPhuketCouple />,
  },
  {
    path: "/phuket/couple/standard",
    element: <UserPhuketCoupleStandard />,
  },
  {
    path: "/phuket/couple/delux",
    element: <UserPhuketCoupleDelux />,
  },
  {
    path: "/phuket/couple/premium",
    element: <UserPhuketCouplePremium />,
  },
  {
    path: "/phuket/custom",
    element: <UserPhuketCustom />,
  },
  {
    path: "/phuket/custom/standard",
    element: <UserPhuketCustomStandard />,
  },
  {
    path: "/phuket/custom/delux",
    element: <UserPhuketCustomDelux />,
  },
  {
    path: "/phuket/custom/premium",
    element: <UserPhuketCustomPremium />,
  },
  {
    path: "/refund-policy",
    element: <UserRefundPolicy />,
  },
  {
    path: "/privacy-policy",
    element: <UserPrivacyPolicy />,
  },
  {
    path: "/terms-and-conditions",
    element: <UserTermsAndCondition />,
  },
];
const userProtectedRoutesData = [
  {
    path: "/profile",
    element: <UserProfile />,
  },
  {
    path: "/my-trips",
    element: <UserMyTrips />,
  },
];
const adminAuthRoutesData = [
  {
    path: "/admin/login",
    element: <AdminLogin />,
  },
  {
    path: "/admin/otp",
    element: <AdminOtp />,
  },
];
const adminProtectedRoutesData = [
  {
    path: "/admin/dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/users",
    element: <AdminUsers />,
  },
  {
    path: "/admin/trips",
    element: <AdminTrips />,
  },
  {
    path: "/admin/trip/:id",
    element: <AdminSingleTripDetails />,
  },
  {
    path: "/admin/custom",
    element: <AdminCustom />,
  },
  {
    path: "/admin/payment",
    element: <AdminPayment />,
  },
  {
    path: "/admin/queries",
    element: <AdminQueries />,
  },
  {
    path: "/admin/news-letter",
    element: <AdminNewsLetter />,
  },
];

const App = () => {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        {userAuthRoutesData.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense fallback={<Loader />}>
                <UserAuthProtectedRoutes>
                  <AuthRouteLayout> {route.element}</AuthRouteLayout>
                </UserAuthProtectedRoutes>
              </Suspense>
            }
          />
        ))}
        {userUnprotectedRoutesData.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense fallback={<Loader />}>
                <UserRouteLayout>{route.element}</UserRouteLayout>
              </Suspense>
            }
          />
        ))}
        {userProtectedRoutesData.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense fallback={<Loader />}>
                <UserAccountProtectedRoutes>
                  <UserRouteLayout>{route.element}</UserRouteLayout>
                </UserAccountProtectedRoutes>
              </Suspense>
            }
          />
        ))}
        {adminAuthRoutesData.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense fallback={<Loader />}>
                {window.innerWidth > 1000 ? (
                  <AdminAuthProtectedRoutes>
                    {route.element}
                  </AdminAuthProtectedRoutes>
                ) : (
                  <MobileScreen />
                )}
              </Suspense>
            }
          />
        ))}
        {adminProtectedRoutesData.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <Suspense fallback={<Loader />}>
                {window.innerWidth > 1000 ? (
                  <AdminAccountProtectedRoutes>
                    <AdminRouteLayout>{route.element}</AdminRouteLayout>
                  </AdminAccountProtectedRoutes>
                ) : (
                  <MobileScreen />
                )}
              </Suspense>
            }
          />
        ))}
        <Route path="*" element={<Fallback />} />
      </Routes>
    </>
  );
};

export default App;

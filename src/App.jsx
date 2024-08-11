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
import Fallback from "./utils/fallback/Fallback";
import MobileScreen from "./components/admin/mobileScreen/MobileScreen";

//Routes
import {
  UserSignup,
  UserLogin,
  UserChangePassword,
  UserForgetPassword,
  UserOtp,
  UserProfile,
  UserPayment,
  UserHome,
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
} from "./pageConfig/UserPageConfig";
import {
  AdminLogin,
  AdminOtp,
  AdminDashboard,
  AdminAllUsers,
  AdminSingleUser,
  AdminAllTrips,
  AdminSingleTrip,
  AdminPayment,
  AdminQueries,
  AdminAllActivities,
  AdminAddActivity,
  AdminAllLocations,
  AdminAddLocation,
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
    path: "/payment",
    element: <UserPayment />,
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
    element: <AdminAllUsers />,
  },
  {
    path: "/admin/user/:id",
    element: <AdminSingleUser />,
  },
  {
    path: "/admin/trips",
    element: <AdminAllTrips />,
  },
  {
    path: "/admin/trip/:id",
    element: <AdminSingleTrip />,
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
    path: "/admin/activities",
    element: <AdminAllActivities />,
  },
  {
    path: "/admin/activity",
    element: <AdminAddActivity />,
  },
  {
    path: "/admin/locations",
    element: <AdminAllLocations />,
  },
  {
    path: "/admin/location",
    element: <AdminAddLocation />,
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

import { Suspense } from "react";

//Routing
import { Routes, Route } from "react-router-dom";

//ALert
import { Toaster } from "react-hot-toast";

//Utils
import ScrollToTop from "./utils/scrollToTop/ScrollToTop";

//Loader
import Loader from "./utils/loader/Loader";

//Protected Routes
import UserAuthProtectedRoutes from "./protectedRoutes/user/UserAuthProtectedRoutes";
import UserAccountProtectedRoutes from "./protectedRoutes/user/UserAccountProtectedRoutes";
import AdminAuthProtectedRoutes from "./protectedRoutes/admin/AdminAuthProtectedRoutes";
import AdminAccountProtectedRoutes from "./protectedRoutes/admin/AdminAccountProtectedRoutes";

//Layouts
import AuthRouteLayout from "./layouts/auth/AuthRouteLayout";
import UserRouteLayout from "./layouts/user/UserRouteLayout";
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
  UserHome,
  UserAbout,
  UserContact,
  UserTermsAndCondition,
  UserAllTrips,
  UserSingleTripDetails,
  UserPlanTrip,
  UserMyTrips,
  UserViewProfile,
  UserEditProfile,
  UserPayment,
} from "./pageConfig/UserPageConfig";
import {
  AdminLogin,
  AdminForgetPassword,
  AdminChangePassword,
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
    path: "/about",
    element: <UserAbout />,
  },
  {
    path: "/contact-us",
    element: <UserContact />,
  },
  {
    path: "/terms-and-conditions",
    element: <UserTermsAndCondition />,
  },
  {
    path: "/trips",
    element: <UserAllTrips />,
  },
  {
    path: "/trip/:id",
    element: <UserSingleTripDetails />,
  },
];
const userProtectedRoutesData = [
  {
    path: "/plan-trip",
    element: <UserPlanTrip />,
  },
  {
    path: "/my-trips",
    element: <UserMyTrips />,
  },
  {
    path: "/profile",
    element: <UserViewProfile />,
  },
  {
    path: "/edit-profile",
    element: <UserEditProfile />,
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
    path: "/admin/forget-password",
    element: <AdminForgetPassword />,
  },
  {
    path: "/admin/change-password",
    element: <AdminChangePassword />,
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
      <ScrollToTop>
        <Routes>
          {userAuthRoutesData.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={<Loader />}>
                  <UserAuthProtectedRoutes>
                    <AuthRouteLayout>{route.element}</AuthRouteLayout>
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
                      <AuthRouteLayout>{route.element}</AuthRouteLayout>
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
      </ScrollToTop>
    </>
  );
};

export default App;

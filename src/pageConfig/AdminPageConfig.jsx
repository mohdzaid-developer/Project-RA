import { lazy } from "react";

//Auth Routes
export const AdminLogin = lazy(() =>
  import("../pages/admin/authRoutes/signIn/SignIn")
);
export const AdminOtp = lazy(() => import("../pages/admin/authRoutes/otp/Otp"));

//Protected Routes
export const AdminDashboard = lazy(() =>
  import("../pages/admin/protectedRoutes/dashboard/Dashboard")
);
export const AdminUsers = lazy(() =>
  import("../pages/admin/protectedRoutes/users/Users")
);

export const AdminTrips = lazy(() =>
  import("../pages/admin/protectedRoutes/trips/Trips")
);
export const AdminSingleTripDetails = lazy(() =>
  import("../pages/admin/protectedRoutes/singleTripDetails/SingleTripDetails")
);

export const AdminCustom = lazy(() =>
  import("../pages/admin/protectedRoutes/custom/Custom")
);

export const AdminPayment = lazy(() =>
  import("../pages/admin/protectedRoutes/payment/Payment")
);
export const AdminQueries = lazy(() =>
  import("../pages/admin/protectedRoutes/queries/Queries")
);
export const AdminNewsLetter = lazy(() =>
  import("../pages/admin/protectedRoutes/newsLetter/NewsLetter")
);

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
export const AdminAllUsers = lazy(() =>
  import("../pages/admin/protectedRoutes/users/allUsers/AllUsers")
);
export const AdminSingleUser = lazy(() =>
  import("../pages/admin/protectedRoutes/users/singleUser/SingleUser")
);
export const AdminAllTrips = lazy(() =>
  import("../pages/admin/protectedRoutes/trip/allTrips/AllTrips")
);
export const AdminSingleTrip = lazy(() =>
  import("../pages/admin/protectedRoutes/trip/singleTrip/SingleTrip")
);
export const AdminPayment = lazy(() =>
  import("../pages/admin/protectedRoutes/payment/Payment")
);
export const AdminQueries = lazy(() =>
  import("../pages/admin/protectedRoutes/queries/Queries")
);
export const AdminAllActivities = lazy(() =>
  import("../pages/admin/protectedRoutes/activity/allActivities/AllActivities")
);
export const AdminAddActivity = lazy(() =>
  import("../pages/admin/protectedRoutes/activity/addActivity/AddActivity")
);
export const AdminAllLocations = lazy(() =>
  import("../pages/admin/protectedRoutes/location/allLocations/AllLocations")
);
export const AdminAddLocation = lazy(() =>
  import("../pages/admin/protectedRoutes/location/addLocation/AddLocation")
);

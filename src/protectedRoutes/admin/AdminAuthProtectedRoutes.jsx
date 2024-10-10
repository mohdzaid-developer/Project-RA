import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminAuthProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.authAdmin);
  const { isAuthenticated:userIsAuthenticated } = useSelector((state) => state.authUser);
  const otpData = JSON.parse(sessionStorage.getItem("otpInfo"));

  if (!isAuthenticated && !userIsAuthenticated) {
    return children;
  }
  if (userIsAuthenticated==true) {
    return <Navigate to="/profile"/>;
  }
  if (otpData) {
    return <Navigate to="/otp"/>;
  }
  return <Navigate to="/admin/trips" />;
};

export default AdminAuthProtectedRoutes;

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminAccountProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.authAdmin);
  const { isAuthenticated:userIsAuthenticated } = useSelector((state) => state.authUser);
  const otpData = JSON.parse(sessionStorage.getItem("otpInfo"));

  if (isAuthenticated) {
    return children;
  }
  if (userIsAuthenticated) {
    return <Navigate to="/profile" />;
  }
  if (otpData) {
    return <Navigate to="/otp" />;
  }
  return <Navigate to="/admin/login" />;
};

export default AdminAccountProtectedRoutes;

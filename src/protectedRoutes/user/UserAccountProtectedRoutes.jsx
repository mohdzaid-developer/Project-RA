import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserAccountProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.authUser);
  const otpData = JSON.parse(sessionStorage.getItem("otpInfo"));
  const adminOtpInfo = JSON.parse(sessionStorage.getItem("adminOtpInfo"));

  if (isAuthenticated) {
    return children;
  }
  if (otpData) {
    return <Navigate to="/otp" />;
  }
  if (adminOtpInfo) {
    return <Navigate to="/admin/otp" />;
  }
  return <Navigate to="/login" />;
};

export default UserAccountProtectedRoutes;

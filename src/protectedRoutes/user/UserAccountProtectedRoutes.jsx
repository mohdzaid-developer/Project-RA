import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserAccountProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.authUser);
  const otpData = JSON.parse(sessionStorage.getItem("otpInfo"));

  if (isAuthenticated) {
    return children;
  }
  if (otpData) {
    return <Navigate to="/otp" />;
  }
  return <Navigate to="/login" />;
};

export default UserAccountProtectedRoutes;

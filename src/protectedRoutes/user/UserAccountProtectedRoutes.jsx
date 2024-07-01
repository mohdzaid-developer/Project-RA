import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserAccountProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.authUser);

  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default UserAccountProtectedRoutes;

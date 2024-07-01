import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserAuthProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.authUser);

  if (!isAuthenticated) {
    return children;
  }
  return <Navigate to="/profile" />;
};

export default UserAuthProtectedRoutes;

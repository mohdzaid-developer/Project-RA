import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminAuthProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.authAdmin);

  if (!isAuthenticated) {
    return children;
  }
  return <Navigate to="/admin/dashboard" />;
};

export default AdminAuthProtectedRoutes;

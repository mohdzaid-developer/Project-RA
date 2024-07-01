import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminAccountProtectedRoutes = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.authAdmin);

  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/admin/login" />;
};

export default AdminAccountProtectedRoutes;

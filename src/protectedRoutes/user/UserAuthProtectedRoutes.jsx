import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const UserAuthProtectedRoutes = ({ children }) => {
  const { isAuthenticated,paramsQuery } = useSelector((state) => state.authUser);
  const { isAuthenticated:AdminIsAuthenticated } = useSelector((state) => state.authAdmin);

  if (!isAuthenticated && !AdminIsAuthenticated) {
    return children;
  }
  if(AdminIsAuthenticated){
    return <Navigate to="/admin/dashboard" />;
  }
  if(paramsQuery){
    return <Navigate to={paramsQuery} />;
  }if(!paramsQuery){
    return <Navigate to="/profile" />;
  }
};

export default UserAuthProtectedRoutes;

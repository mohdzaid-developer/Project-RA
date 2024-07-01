//GLobal Components
import AuthLeftSide from "../../components/auth/AuthLeftSide";

const AuthRouteLayout = ({ children }) => {
  return (
    <>
      <AuthLeftSide />
      {children}
    </>
  );
};

export default AuthRouteLayout;

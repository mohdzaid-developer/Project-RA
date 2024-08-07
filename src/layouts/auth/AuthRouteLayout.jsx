import "./authRouteLayout.scss";

//GLobal Components
import AuthLeftSide from "@/components/auth/AuthLeftSide";

const AuthRouteLayout = ({ children }) => {
  return (
    <div className="authRouteLayout">
      {/* <AuthLeftSide /> */}
      {children}
    </div>
  );
};

export default AuthRouteLayout;

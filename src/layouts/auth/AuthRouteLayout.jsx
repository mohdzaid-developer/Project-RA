//User Components
import UserNavbar from "@/components/user/userNavbar/UserNavbar";

const AuthRouteLayout = ({ children }) => {
  return (
    <>
      <UserNavbar />
      {children}
    </>
  );
};

export default AuthRouteLayout;

//User Components
import UserNavbar from "../../components/user/userNavbar/UserNavbar";
import Footer from "../../components/user/footer/Footer";

const UserRouteLayout = ({ children }) => {
  return (
    <>
      <UserNavbar />
      <div style={{ marginTop: "100px" }}></div>
      {children}
      <Footer />
    </>
  );
};

export default UserRouteLayout;

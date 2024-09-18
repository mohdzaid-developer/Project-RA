import "./fallback.scss";

//Assets
import pageNotFound from "@/assets/not-found.png";

//Components
import UserNavbar from "@/components/user/userNavbar/UserNavbar";
import Footer from "@/components/user/footer/Footer";

const Fallback = () => {
  return (
    <>
      <UserNavbar />
      <div className="pageNotFound">
        <h2>Page Not Found!</h2>
        <img src={pageNotFound} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Fallback;

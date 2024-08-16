import "./fallback.scss";

//Assets
import pageNotFound from "@/assets/not-found.png";

//Components
import UserNavbar from "@/components/user/userNavbar/UserNavbar";

const Fallback = () => {
  return (
    <>
      <UserNavbar />
      <div className="pageNotFound">
        <h2>Page Not Found!</h2>
        <img src={pageNotFound} alt="" />
      </div>
    </>
  );
};

export default Fallback;

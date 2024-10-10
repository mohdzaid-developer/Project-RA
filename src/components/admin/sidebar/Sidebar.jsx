import "./sidebar.scss";

//Routing
import { Link, useNavigate } from "react-router-dom";

//Assets
import logo from "../../../assets/logo.webp";
import dashboard from "../../../assets/dashboard.png";
import user from "../../../assets/user.png";
import query from "../../../assets/query.png";
import payment from "../../../assets/payment.png";
import trip from "../../../assets/trip.png";
import logout from "../../../assets/logout.webp";
import { useDispatch } from "react-redux";
import { setLogout } from "@/redux/slice/admin/state/authAdminSlice";

const Sidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const logOut=()=>{
    sessionStorage.clear();
    dispatch(setLogout());
    navigate("/admin/login");
  }
  return (
    <>
      <section className="sidebar">
        <div className="top">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
            <h2>Come Fly With Us</h2>
          </div>

          <div className="links">
            {/* <div className="link">
              <img src={dashboard} alt="" />
              <Link to="/admin/dashboard">Dashboard</Link>
            </div> */}
            <div className="link">
              <img src={trip} alt="" />
              <Link to="/admin/trips">Trips</Link>
            </div>
            <div className="link">
              <img src={trip} alt="" />
              <Link to="/admin/custom">Custom Trips</Link>
            </div>
            <div className="link">
              <img src={payment} alt="" />
              <Link to="/admin/payment">Payments</Link>
            </div>
            <div className="link">
              <img src={user} alt="" />
              <Link to="/admin/users">Users</Link>
            </div>
            <div className="link">
              <img src={query} alt="" />
              <Link to="/admin/queries">Queries</Link>
            </div>
            <div className="link">
              <img src={query} alt="" />
              <Link to="/admin/news-letter">News Letter</Link>
            </div>
          </div>
        </div>

        <div
          className="logout"
          onClick={logOut}
        >
          <div className="link">
            <img src={logout} alt="" />
            <button>Logout</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sidebar;

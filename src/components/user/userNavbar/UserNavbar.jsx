import { useState } from "react";
import "./userNavbar.scss";

//Routing
import { Link, useNavigate } from "react-router-dom";

//Assets
import logo from "@/assets/logo.webp";
import logout from "@/assets/navLogout.png";
import login from "@/assets/login.png";
import facebookImg from "@/assets/navFacebook.png";
import twitterImg from "@/assets/navTwitter.png";
import instagramImg from "@/assets/navInstagram.png";
import linkendInImg from "@/assets/navlinkedin.png";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "@/redux/slice/user/state/authUserSlice";

const UserNavbar = () => {
  const user = sessionStorage.getItem("user");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated } = useSelector((state) => state.authUser);

  const navDataFirst = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Bali",
      path: "/bali",
    },
    {
      name: "Phuket",
      path: "/phuket",
    },
  ];

  const navDataSecond = [
    {
      name: "About",
      path: "/about-us",
    },
    {
      name: "Profile",
      path: "/profile",
    },
    {
      name: "Trips",
      path: "/my-trips",
    },
  ];

  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };
  const handleLogin = () => {
    navigate("/login");
    setNavOpen(!navOpen);
  };

  const handleLogout = () => {
    dispatch(setLogout());
    sessionStorage.removeItem("user");
    navigate("/login");
    setNavOpen(!navOpen);
  };

  return (
    <nav>
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <div className="menu-toggle">
            <div
              className={navOpen ? "hamBox hamBoxOpen" : "hamBox"}
              onClick={handleNavClick}
            >
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span
                className={navOpen ? "lineBottom spin" : "lineBottom"}
              ></span>
            </div>
          </div>
        </div>
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <div className="link">
            <ul className="nav-links">
              {navDataFirst.map((item, index) => (
                <li className="nav-item" onClick={handleNavClick} key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <ul className="nav-links">
              {navDataSecond.map((item, index) => (
                <li className="nav-item" onClick={handleNavClick} key={index}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="bottom">
            <div className="auth">
              {isAuthenticated && user ? (
                <button onClick={handleLogout}>
                  <img src={logout} alt="" />
                  Logout
                </button>
              ) : (
                <button onClick={handleLogin}>
                  <img src={login} alt="" />
                  Login
                </button>
              )}
            </div>
            <div className="socials">
              <a href="#">
                <img src={facebookImg} alt="" />
              </a>
              <a href="#">
                <img src={instagramImg} alt="" />
              </a>
              <a href="#">
                <img src={twitterImg} alt="" />
              </a>
              <a href="#">
                <img src={linkendInImg} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;

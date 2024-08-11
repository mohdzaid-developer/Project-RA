import { useState } from "react";
import "./userNavbar.scss";

//Routing
import { Link } from "react-router-dom";

//Assets
import logo from "@/assets/logo.webp";
import logout from "@/assets/logout.webp";
import login from "@/assets/user.webp";
import facebookImg from "@/assets/facebookImg.webp";
import twitterImg from "@/assets/instagramImg.webp";
import instagramImg from "@/assets/twitterImg.webp";
import linkendInImg from "@/assets/linkedInImg.webp";

const UserNavbar = () => {
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
      name: "Profile",
      path: "/",
    },
    {
      name: "Trips",
      path: "/bali",
    },
  ];

  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = () => {
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

          <div className="auth">
            <button>
              <img src={logout} alt="" />
              Logout
            </button>
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
    </nav>
  );
};

export default UserNavbar;

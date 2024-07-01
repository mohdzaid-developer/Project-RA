import "./userNavbar.scss";
import { useState } from "react";

//Routing
import { Link } from "react-router-dom";

//Assets
import profilePic from "../../../assets/profilePic.jpg";

//Redux
import { useSelector } from "react-redux";

const UserNavbar = () => {
  const navDataFirst = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact-us",
    },
  ];

  // const navDataSecond = [
  //   {
  //     name: "Profile",
  //     path: "/",
  //   },
  // ];
  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = () => {
    setNavOpen(!navOpen);
  };
  return (
    <nav>
      <div className="nav-container">
        <div className="navbar">
          <div className="logo">Travel App</div>
          <div className="menu-toggle">
            {/* <div className="profile-pic">
              <img src={profilePic} alt="" />
            </div> */}
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
            {/* <ul className="nav-links">
              {navDataSecond.map((item) => (
                <li className="nav-item" onClick={handleNavClick}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul> */}
          </div>

          {/* <div className="auth">
            <h1>Logout</h1>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default UserNavbar;

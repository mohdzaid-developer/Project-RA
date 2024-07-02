import "./userNavbar.scss";
import { useState, useEffect } from "react";

//Routing
import { Link } from "react-router-dom";

const UserNavbar = () => {
  const navDataFirst = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Bali",
      path: "/about",
    },
    {
      name: "Phuket",
      path: "/contact-us",
    },
  ];

  const [navOpen, setNavOpen] = useState(false);

  const handleNavClick = () => {
    if (!navOpen) {
      setNavbarColor(false);
    }
    setNavOpen(!navOpen);
  };

  const [navbarColor, setNavbarColor] = useState(false);

  const changeNavbarColor = () => {
    if (!navOpen && window.scrollY >= window.innerHeight * 0.8) {
      setNavbarColor(true);
    } else {
      setNavbarColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    return () => {
      window.removeEventListener("scroll", changeNavbarColor);
    };
  }, [navOpen]);

  return (
    <nav>
      <div className="nav-container">
        <div className={navbarColor ? "navbar navbar-colored" : "navbar"}>
          <div className="logo">Project RA</div>
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

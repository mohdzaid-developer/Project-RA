import "./footer.scss";

//Routing
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="logo">
          <h2>Project RA</h2>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Bali</Link>
          <Link to="/">Phuket</Link>
        </div>
      </div>
      <div className="bottom">
        <div className="line"></div>
        <div className="content">
          <div className="left">
            <p>© 2024 Project. All rights reserved.</p>
          </div>
          <div className="right">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

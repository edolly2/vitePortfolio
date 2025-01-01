/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Logo from "../assets/my-logo.png";
import "../styles/SiteBrand.css"; // Assuming external CSS file

const SiteBrand = ({ className }) => {
  return (
    <div className="site-brand-wrapper">
      <Link to="/">
        <img
          className={`site-brand-img ${className || ""}`.trim()}
          src={Logo}
          alt="Logo with the letters E and D"
        />
      </Link>
    </div>
  );
};

export default SiteBrand;

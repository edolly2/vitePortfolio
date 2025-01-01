import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaFacebook, FaTwitter } from "react-icons/fa";
import "../styles/Footer.css"; // Assuming styled-components or CSS modules
import SiteBrand from "./SiteBrand";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: "/", label: "HOME" },
    { to: "/about", label: "ABOUT" },
    { to: "/skills", label: "SKILLS" },
    { to: "/projects", label: "PROJECTS" },
    { to: "/contact", label: "CONTACT" },
    { to: "/blog", label: "BLOG" },
  ];

  const socialLinks = [
    { href: "https://github.com/edolly2", icon: <FaGithub className="icon" /> },
    {
      href: "https://www.linkedin.com/in/eric-dollinger/",
      icon: <FaLinkedinIn className="icon" />,
    },
    {
      href: "https://facebook.com/dev.dollinger/",
      icon: <FaFacebook className="icon" />,
    },
    {
      href: "https://twitter.com/DevDollinger?t=GzpujD8mZUHrLaB_XnVMg&s=01",
      icon: <FaTwitter className="icon" />,
    },
  ];

  const contactItems = ["EMAIL", "ADDRESS", "PHONE"];
  const otherItems = ["FAQ", "SETTINGS", "TERMS"];

  return (
    <header>
      <div>
        <SiteBrand />
        <h4 className="footer-title">
          <span className="primary">&lt;</span> THANKS FOR VISITING{" "}
          <span className="primary">/&gt;</span>
        </h4>
      </div>
      <div className="underline"></div>

      <div className="lists-container">
        <div>
          <h5>
            <span className="primary">{"//"}</span> SITE MAP
          </h5>
          <div className="underline"></div>
          <ul>
            {navLinks.map((link) => (
              <li className="footer-list-item" key={link.to}>
                <NavLink className="footer-link" to={link.to}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5>
            <span className="primary">{"//"}</span> FOLLOW ME
          </h5>
          <div className="underline"></div>
          <ul>
            {socialLinks.map((link, index) => (
              <div className="footer-social-group" key={index}>
                <li className="footer-list-item">
                  <a href={link.href}>{link.icon}</a>
                </li>
              </div>
            ))}
          </ul>
        </div>

        <div>
          <h5>
            <span className="primary">{"//"}</span> GET IN TOUCH
          </h5>
          <div className="underline"></div>
          <ul>
            <li className="footer-list-item">
              <NavLink className="footer-link" to="/contact">
                CONTACT
              </NavLink>
            </li>
            {contactItems.map((item, index) => (
              <li className="footer-list-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h5>
            <span className="primary">{"//"}</span> OTHER
          </h5>
          <div className="underline"></div>
          <ul>
            {otherItems.map((item, index) => (
              <li className="footer-list-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="copy-container">
        <small>
          <span className="secondary">&copy;</span> Copyright {currentYear}{" "}
          <span className="primary">
            <a className="copy-text" href="https://www.ericdolly.com">
              www.EricDolly.com
            </a>
          </span>
        </small>
      </div>
    </header>
  );
};

export default Footer;

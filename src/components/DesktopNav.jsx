/* eslint-disable react/prop-types */
import "../styles/DesktopNav.css";
import { NavLink } from "react-router-dom";
import Button from "./Button";
// import DarkMode from './DarkMode';

// TODO: li nav-list-item in css but has global css nav-link and NavLink is same but changing to nav-link-item in css

const DesktopNav = (props) => {
  return (
    <div className="desk-nav-container" style={props.DesktopNavStyle}>
      <nav className="nav">
        <ul className="nav-list">
          {/* <DarkMode /> */}
          <li className="nav-link">
            <NavLink
              className="nav-link"
              style={{ marginLeft: "2.4rem" }}
              onClick={props.onNavLinkClick}
              to="/"
            >
              HOME
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/about"
            >
              ABOUT
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/skills"
            >
              SKILLS
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/projects"
            >
              PROJECTS
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/contact"
            >
              CONTACT
            </NavLink>
          </li>
          <li className="nav-link">
            <NavLink
              className="nav-link"
              onClick={props.onNavLinkClick}
              to="/blog"
            >
              <Button text="Hire Me" />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DesktopNav;

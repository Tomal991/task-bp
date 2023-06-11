import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <div className="nav">
        <div className="image">
          <img src="https://deshcareer.com/logo/short-logo.png" alt="" />
        </div>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {" "}
          <FontAwesomeIcon icon={faBars} />
        </button>

        <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
          <ul>
            <li>
              <NavLink to="/"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                <a href="#">Home</a>
              </NavLink>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms Condition</a>
            </li>
            <li>
              <NavLink to="/about/us"  className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
                <a href="#">About Us</a>
              </NavLink>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Advertise</a>
            </li>
            <button className="button">Join Now</button>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Navbar;

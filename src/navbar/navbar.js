import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="image">
          <img src="https://deshcareer.com/logo/short-logo.png" alt="" />
        </div>
        <div>
          <ul className="menu">
            <li>Home</li>
            <li>Privacy Policy</li>
            <li>Terms Condition</li>
            {/* <li><Link to="/about/us">About Us</Link></li> */}
            <li>Contact Us</li>
            <li>Advertise</li>
            <button className="button">Join Now</button>
          </ul>
         
        </div>
      </div>
    </>
  );
};
export default Navbar;

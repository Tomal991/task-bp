import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
const Footer = () => {
  return (
    <div className="wrapper">
    <div className="container">
    <div className="flex justify-center gap-2">
        <button className="icon_button">
          <FontAwesomeIcon icon={faFacebook} />
        </button>
        <button className="icon_button">
          <FontAwesomeIcon icon={faYoutube} />
        </button>
        <button className="icon_button">
          <FontAwesomeIcon icon={faLinkedin} />
        </button>
      </div>

      <div className="flex flex-wrap">
        <div className="footer_section">
          <div className="image">
            <img src="https://deshcareer.com/logo/short-logo.png" alt="" />
          </div>
          <p>
            Desh Career is Career based newsletter in Bengali language. This
            newsletter has published weekly. This is published in every Saturday
            at 12.00 PM.
          </p>
        </div>
        <div className="text-center footer_section">
          <h1>Privacy and Terms</h1>
          <a href="">Privacy Policy</a>
          <a href="">Terms Condition</a>
          <a href="">FAQ</a>
        </div>
        <div className="text-right footer_section">
          <h1>Support</h1>
          <a href="">Affiliate Link</a>
          <a href="">Contact us</a>
          <a href="">Advertise with us</a>
        </div>
      </div>
    </div>
      <hr className="divider" ></hr>
      <div className="footer_end">
        <div>© 2023 Newsletter E-mail Service: All Copy right reserved</div>
        <div>
          <a href="">Terms</a>
          <a href="">Cookie Policy</a>
          <a href="">Terms</a>
          <a href="">Privacy</a>
          </div>
      </div>
    </div>
  );
};

export default Footer;

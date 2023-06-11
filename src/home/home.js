import "./home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope as farEnvelope } from "@fortawesome/free-regular-svg-icons";

const Home = () => {
  return (
    <div className="home_wrapper">
      <h1 className="title">
        Get Smarter about your <br />
        career
      </h1>
      <p>
        Get the <strong>5-minute newsletter</strong> keeping about smart career
      </p>

      <div className="section">
        <div className="input_area">
          <FontAwesomeIcon icon={farEnvelope} />
          <input
            type="text"
            className="input"
            placeholder="Your E-mail address"
          />
          <button className="input_area_button">Join Free</button>
        </div>
      </div>

      <div className="section leading-8">
        <p>
          We're committed to your privacy. DashCareer uses the information you
          provide to contact you about our relevant content and services. You
          may unsubscribe from these communications at any time. For more
          information, check out our Privacy Policy.
        </p>
      </div>
    </div>
  );
};
export default Home;

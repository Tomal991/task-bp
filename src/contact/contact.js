import "./contact.css";

const Contact = () => {
  return (
    <div className="about_wrapper">
      <h1 className="title">About Us</h1>
      <div className="about_section">
        <p>
          Desh Career is Career based newsletter in Bengali language. This
          newsletter has published weekly. This is published in every Saturday
          at 12.00 PM.
        </p>
        <p>We focus on Career trend, news, smart job etc. </p>
        <p>
          If you want to contact us: you can send an email to{" "}
          <a href="contact.deshcareer@gmail.com">
            contact.deshcareer@gmail.com
          </a>
        </p>
        <p>
          If you want to meet with us, you can come to our office based on an
          appointment.{" "}
        </p>
        <p>
          Our Office address: <br />
          House: 13/3,
          <br />
          Road: 2,
          <br />
          Shyamoly, Dhaka-1207 <br />
          +8801880811047
        </p>
      </div>
    </div>
  );
};

export default Contact;

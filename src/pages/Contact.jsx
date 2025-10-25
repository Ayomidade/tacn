import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header
        title={"Contact Us"}
        subtitle={"We’d love to hear from you. Reach out to us anytime!"}
        background={"/src/assets/nir-himi-lfXq-zbF-RU-unsplash.jpg"}
      />

      <section className="contact">
        <div className="contact-container">
          {/* <div className="contact-info">
            <ul>
              <li>
                <strong>Church Name:</strong> The Apostolic Church Nigeria –
                Yaba District
              </li>
              <li>
                <strong>Address:</strong> 22 Adebisi street, Alagomeji, Yaba,
                Lagos, Nigeria
              </li>
              <li>
                <strong>Email:</strong> tacnyabaassembly@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> +234 815 420 0609
              </li>
            </ul>
          </div> */}

          <form className="contact-form">
            <h3>Send a Message</h3>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <textarea rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-map">
          <iframe
            title="church-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.7621993088806!2d3.3822608489184427!3d6.4969551807643935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c896fc25089%3A0xb2df4daf1d16a101!2s22%20Adebisi%20St%2C%20Adekunle%2C%20Lagos%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1759669934687!5m2!1sen!2sng"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="contact-socials">
          <h4>Connect With Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/TACNYABADISTRICT"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/tacnyabadistrictpr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://youtube.com/@TACNYabaAssembly"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

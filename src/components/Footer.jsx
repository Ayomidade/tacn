import React from "react";
import "./theme.css";
import "./footer.css";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useScroll } from "../context/ScrollContext";

const Footer = () => {
  const { scrollToTop } = useScroll();

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* Column 1 — Church Info */}
          <div className="footer-about">
            <h3>The Apostolic Church Nigeria – Yaba District</h3>
            <p>
              Transforming lives through the word, worship, and the power of the
              Holy Spirit. Join us every Sunday for an uplifting experience.
            </p>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/" onClick={scrollToTop}>
              Home
            </Link>
            <Link to="/programs" onClick={scrollToTop}>
              Programs
            </Link>
            <Link to="/contact" onClick={scrollToTop}>
              Contact
            </Link>
          </div>

          {/* Column 3 — Contact Info */}
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>22 Adebisi street, Alagomeji, Yaba, Lagos, Nigeria</p>
            <p>Email: tacnyabaassembly@gmail.com</p>
            <p>Phone: +234 815 420 0609</p>
            <div className="footer-socials">
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
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} The Apostolic Church Nigeria –
            Yaba District. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

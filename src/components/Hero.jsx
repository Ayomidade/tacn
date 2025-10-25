import React, { useEffect, useRef, useState } from "react";
import "./hero.css";
import { FaFacebookF, FaYoutube } from "react-icons/fa";

const Hero = () => {
  const [showWorship, setShowWorship] = useState(false);
  const worshipRef = useRef(null);

  const toggleWorship = () => {
    setShowWorship((prev) => !prev);
  };

  useEffect(() => {
    if (!showWorship) return;

    const handleClickOutside = (e) => {
      // if ref exists and click is outside the worship div
      if (worshipRef.current && !worshipRef.current.contains(e.target)) {
        setShowWorship(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showWorship]);

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">The Apostolic Church Nigeria</h1>
        <h2 className="hero-subtitle">Yaba District</h2>
        <p className="hero-motto">
          “Help us o God of our salvation for the glory of your name and deliver
          us.”
        </p>

        <div className="hero-divider"></div>

        <div className="hero-buttons">
          <a href="#about" className="hero-btn primary">
            Learn More
          </a>

          <button onClick={toggleWorship} className="hero-btn secondary">
            Worship With Us
          </button>

          {showWorship && (
            <div className="worship" ref={worshipRef}>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/TACNYABADISTRICT"
                >
                  <FaFacebookF />
                  <br />
                  Join us on Facebook
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/@TACNYabaAssembly"
                >
                  <FaYoutube />
                  <br />
                  Join us on YouTube
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="hero-info">
          <p>
            📍 22 Adebisi Street, Alagomeji, Yaba, Lagos
            <br /> 🕒 Sundays: 8AM | Wednesdays: 6PM
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;

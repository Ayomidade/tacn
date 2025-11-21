import React from "react";
import "./eh.css";
import { Link } from "react-router-dom";
import { useScroll } from "../../context/ScrollContext";

const EventHighlight = () => {
  const { scrollToTop } = useScroll();
  const handleNavClick = () => {
    scrollToTop();
  };

  return (
    <>
      <div className="event-highlight">
        <div className="eh-content">
          <h2>✨ November to Remember Has Started! ✨</h2>
          <p>
            Join us for a time of refreshing, revival, and divine encounters.
          </p>

          <a
            href="https://forms.gle/9rNKdMrkXBhBh99i9"
            target="_blank"
            rel="noopener noreferrer"
            className="eh-btn register"
          >
            Register Now
          </a>
          <Link to={"/programs"} className="eh-btn" onClick={handleNavClick}>
            View Program Schedule
          </Link>
        </div>
      </div>
    </>
  );
};

export default EventHighlight;

import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./theme.css";
import { FaBars } from "react-icons/fa";
import { useScroll } from "../context/ScrollContext";

// import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  // refs for nav and toggle so we can ignore clicks/hover inside them
  const navRef = useRef(null);
  const toggleRef = useRef(null);

  // Close the menu when clicking or hovering outside of the nav or toggle
  useEffect(() => {
    const handleBodyInteraction = (e) => {
      if (!navRef.current || !toggleRef.current) return;

      if (
        navRef.current.contains(e.target) ||
        toggleRef.current.contains(e.target)
      ) {
        return;
      } else setMenuOpen(false);
    };

    document.body.addEventListener("click", handleBodyInteraction);
    // document.body.addEventListener("mouseover", handleBodyInteraction);

    return () => {
      document.body.removeEventListener("click", handleBodyInteraction);
      // document.body.removeEventListener("mouseover", handleBodyInteraction);
    };
  }, []);

    const { scrollToTop } = useScroll();
  const handleNavClick = () => {
scrollToTop()
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <div className="logo-img">
              <img src="src/assets/1000092052.png" alt="church logo" />
            </div>
            {/* <h1 className="logo-name">TACN Yaba District</h1> */}
          </div>

          <nav ref={navRef} className={`nav ${menuOpen ? "open" : ""}`}>
            <Link to="/" onClick={handleNavClick}>
              Home
            </Link>
            <Link to="/programs" onClick={handleNavClick}>
              Programs
            </Link>
            <Link to="/contact" onClick={handleNavClick}>
              Contact Us
            </Link>
          </nav>

          <div className="menu-icon">
            <FaBars
              ref={toggleRef}
              className="menu-toggle"
              onClick={(e) => {
                // stopPropagation is not strictly necessary because handler checks refs,
                // but keeping it prevents the click from bubbling to body listeners in some edge cases
                e.stopPropagation();
                handleToggle();
              }}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;

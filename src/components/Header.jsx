import React from "react";
import "./theme.css";
import "./header.css";

const Header = ({ title, subtitle, background }) => {
  return (
    <div
      className="header"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="overlay">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Header;

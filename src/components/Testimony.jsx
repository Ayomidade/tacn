import React from "react";
import data from "./testimonies.json";
import "./testimonies.css";

const testimonies = data;

const Testimony = () => {
  return (
    <>
      <div className="testimony-wrapper">
        <h2 className="testimony-title">Stories of Transformation</h2>
      <p className="testimony-subtitle">
        Real people. Real faith. Real change.
      </p>
        <div className="testimony-grid">
          {testimonies.map((testimony, index) => (
            <div
              key={index}
              className="testimony-card"
            >
              <img
                src={testimony.image}
                alt={testimony.name}
                className="testimony-image"
              />
              <h3 className="testimony-name">{testimony.name}</h3>
              <p className="testimony-message">{testimony.message}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimony;

import React from "react";
import "./location.css";

const Location = () => {
  return (
    <section className="church-location">
      <h2>Our Location</h2>
      <p>Come worship with us at:</p>
      <address>
        TACN Yaba District
        <br />
        22 Adebisi street, Alagomeji, Lagos, Nigeria
      </address>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.7621993088806!2d3.3822608489184427!3d6.4969551807643935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c896fc25089%3A0xb2df4daf1d16a101!2s22%20Adebisi%20St%2C%20Adekunle%2C%20Lagos%20101245%2C%20Lagos!5e0!3m2!1sen!2sng!4v1759669934687!5m2!1sen!2sng"
          width="100%"
          height="450"
          // style="border:0;"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default Location;

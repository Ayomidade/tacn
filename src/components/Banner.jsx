import React from "react";
import "./banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <>
      <section className="banner-area">
        <div className="banner-img"></div>
        {/* <p>Welcome to TACN Yaba District</p> */}
        <h3>Our Mission is to spread the news of</h3>
        <h1>
          Christ <span>Our Saviour</span>
        </h1>
        <Link to={"/#"} className="banner-btn">
          More Info
        </Link>
      </section>
    </>
  );
};

export default Banner;

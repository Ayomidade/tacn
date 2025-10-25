import React from "react";
import "./about.css";

const About = () => {
  
  return (
    <>
      <section id="about" className="about-container">
        {/* <h1 className="heading">About Us</h1> */}
        <div className="about-section">
          <h2>Who We Are</h2>
          <p>
            Welcome to <strong>The Apostolic Church Nigeria, Yaba District</strong> — a
            place of faith, love, and community. We are a vibrant body of
            believers passionate about spreading the message of Jesus Christ and
            building lives through the Word of God. Our church family is open to
            everyone, regardless of background or experience.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            Our mission is to bring people into a growing relationship with God
            through worship, discipleship, and service. We believe in living out
            the Gospel in our community and beyond, shining the light of Christ
            wherever we go. We are dedicated to sharing God's love and truth
            with all people.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Vision</h2>
          <p>
            To raise a generation of believers who are spiritually strong,
            socially responsible, and committed to the Great Commission.
          </p>
        </div>

        <div className="about-section">
          <h2>Our Leadership</h2>
          <p>
            We are led by dedicated men and women who serve with humility and
            vision. Our leadership team works tirelessly to guide the church in
            faith, integrity, and unity.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;

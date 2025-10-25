import React from "react";
import "./contactUs.css";

const ContactUs = () => {
  return (
    <main className="contact-page">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>
          We’d love to hear from you! Whether you have a question, testimony, or
          prayer request, feel free to reach out.
        </p>
      </section>

      <section className="contact-content">
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default ContactUs;

import React, { useEffect, useState } from "react";
import "./countdown.css";

const Countdown = () => {
  const targetDate = new Date("November 20, 2025 21:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  function getTimeRemaining(target) {
    const now = new Date().getTime();
    const difference = target - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining(targetDate));
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="countdown-section">
      <div className="countdown-container">
        <h2 className="program-name">November To Remember 2025</h2>
        <p className="program-tagline">
          A season of revival, worship, and breakthrough where believers gather
          to seek God’s face and experience the power of the Holy Spirit in new
          dimensions.
        </p>
        <div className="timer">
          <div className="time-box">
            <span className="number">{timeLeft.days}</span>
            <span className="label">Days</span>
          </div>
          <div className="time-box">
            <span className="number">{timeLeft.hours}</span>
            <span className="label">Hours</span>
          </div>
          <div className="time-box">
            <span className="number">{timeLeft.minutes}</span>
            <span className="label">Minutes</span>
          </div>
          <div className="time-box">
            <span className="number">{timeLeft.seconds}</span>
            <span className="label">Seconds</span>
          </div>
        </div>
        <a
          href="https://forms.gle/9rNKdMrkXBhBh99i9"
          target="_blank"
          rel="noopener noreferrer"
          className="register-btn"
        >
          Register Now
        </a>
        <p className="program-tagline bottom">
          Join us as we lift our voices in unity, experience deliverance, and
          receive fresh grace for the next chapter.
        </p>
      </div>
    </section>
  );
};

export default Countdown;

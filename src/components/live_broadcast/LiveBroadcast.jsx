import React, { useState, useEffect } from "react";
import "./live.css";

const LiveBroadcast = () => {
  const [isLive, setIsLive] = useState(false);

  // Set your next session time here
  const nextSessionTime = new Date("November 21, 2025 21:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    if (!isLive) {
      const interval = setInterval(() => {
        const now = new Date().getTime();
        const target = nextSessionTime
        const diff = target - now;

        if (diff <= 0) {
          clearInterval(interval);
          // setIsLive(true)
        } else {
          const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
          const minutes = Math.floor((diff / (1000 * 60)) % 60);
          const seconds = Math.floor((diff / 1000) % 60);

          setTimeLeft({ hours, minutes, seconds });
        }
      }, 1000);

      return () => clearInterval(interval);
    }  
  }, [isLive]);

  // console.log(timeLeft);

  return (
    <section className="broadcast-wrapper">
      {/* Status Section */}
      <div className="broadcast-header">
        {isLive ? (
          <div className="live-status">
            <span className="live-dot"></span>
            <h2>We Are Live Now</h2>
          </div>
        ) : (
          <div className="offline-status">
            <h2>Service Will Resume Shortly</h2>
            <p className="offline-sub">
              Thank you for joining us — stay connected.
            </p>
          </div>
        )}
      </div>

      {/* Main Content */}
      {isLive ? (
        <div className="video-container">
          <iframe
            src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
            title="Live Stream"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <div className="countdown-section">
          <p className="countdown-title">Next Session Begins In</p>

          <div className="countdown-box">
            <div className="count-item">
              <span>{timeLeft.hours}</span>
              <small>Hours</small>
            </div>

            <div className="count-item">
              <span>{timeLeft.minutes}</span>
              <small>Minutes</small>
            </div>

            <div className="count-item">
              <span>{timeLeft.seconds}</span>
              <small>Seconds</small>
            </div>
          </div>

          {/* Replay Section */}
          <div className="replay-box">
            <p>Missed the last session?</p>
            <a
              href="https://www.youtube.com/live/QEnLy4luLdI?si=gHDZOKKPQgW5hStY"
              target="_blank"
              rel="noreferrer"
              className="replay-btn"
            >
              Watch Replay
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default LiveBroadcast;

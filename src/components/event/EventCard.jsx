import React from "react";
import "./event.css";
import data from "./events.json";
import {
  FaCalendar,
  FaClock,
  FaInfo,
  FaLocationArrow,
  FaTimes,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
// import eventImage from "/src/assets/YABA YOUTH.png.jpg";
// import graphic from "/src/assets/IMG_4535.PNG";

const EventCard = () => {
  return (
    <>
      <div className="events">
        {data.map(({ id, image, title, date, location, description, time, replayLink }) => (
          <div className="event-card" key={id}>
            <div className="event-image">
              <img src={image} alt={title} />
            </div>
            <div className="event-details">
              <h3>{title}</h3>
              <div
                style={{
                  display: "flex",
                  // justifyContent: "space-between",
                  alignItems: "center",
                  margin: "0px",
                  gap: "25px",
                }}
              >
                <p>
                  <span>
                    <FaCalendar />
                  </span>
                  {date}
                </p>
                <p>
                  <FaClock /> {time}
                </p>
              </div>
              <p>
                <FaLocationDot />
                {location}
              </p>
              <p style={{ marginTop: "5px" }}>
                {/* <FaInfo /> */}
                {description}
              </p>
            </div>
            <div className="event-replay-box">
              <p>Did you missed the session?</p>
              <a
                href= {replayLink}
                target="_blank"
                rel="noreferrer"
                className="event-replay-btn"
              >
                Watch Replay
              </a>
              {/* <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/1WpaVJaGgq8?si=dcCLRplFx5MhRdpx"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default EventCard;

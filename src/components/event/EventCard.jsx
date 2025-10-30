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
        {data.map(({ id, image, title, date, location, description, time }) => (
          <div className="event-card" key={id}>
            <div className="event-image">
              <img src={image} alt={title} />
            </div>
            <div className="event-details">
              <h3>{title}</h3>
              <div>
                <p>
                  <span>
                    <FaCalendar /> {date}
                  </span>
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
          </div>
        ))}
      </div>
    </>
  );
};

export default EventCard;

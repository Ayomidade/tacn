import React from "react";
import "./eventCard.css";

const EventCard = () => {
  return (
    <>
      <div className="event-card">
        <div className="event-image">
          <img src="" alt="Event" />
        </div>
        <div className="event-details">
          <h3>Event Title</h3>
          <p>Date: MM/DD/YYYY</p>
          <p>Location: Event Location</p>
          <p>
            Description: Brief description of the event goes here. It provides
            an overview of what to expect.
          </p>
        </div>
      </div>
    </>
  );
};

export default EventCard;

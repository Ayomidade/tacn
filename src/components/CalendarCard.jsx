import React from "react";
import "./calendarCard.css";

export const CalendarCard = ({ title, date, detail, image }) => {
  return (
    <>
      <div className="calendar-card">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>Date: {date}</p>
        <p>Detail: {detail}</p>
      </div>
    </>
  );
};

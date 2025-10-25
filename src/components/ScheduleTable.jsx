import React from "react";
import "./ScheduleTable.css";

const ScheduleTable = () => {
  return (
    <div className="schedule-table">
      <h2>Weekly Programs</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Program</th>
            <th>Time</th>
            <th>Venue</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sunday</td>
            <td>Devotional Service</td>
            <td>9:00 AM</td>
            <td>Church Auditorium</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>Hour of Mercy</td>
            <td>11:00 PM</td>
            <td>Online</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>Victory Hour</td>
            <td>8:00 PM</td>
            <td>Online</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>Night of Glory</td>
            <td>6:00 PM</td>
            <td>Church Auditorium</td>
          </tr>
          <tr>
            <td>Every last Friday of the month</td>
            <td>Night of Elevation</td>
            <td>11:00 PM</td>
            <td>Church Auditorium</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>Choir Rehearsals</td>
            <td>4:00 PM</td>
            <td>Church Auditorium</td>
          </tr>
        </tbody>
      </table>
      {/* <p>Church Address: 22 Adebisi street, Alagomeji, sabo-yaba.</p> */}
    </div>
  );
};

export default ScheduleTable;

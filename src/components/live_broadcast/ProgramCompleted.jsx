import React from "react";
import "./ProgramCompleted.css";

const ProgramCompleted = ({ programName, nextProgram }) => {
  return (
    <div className="program-completed-wrapper">
      <div className="program-box">
        <h2 className="program-title">{programName} Has Ended</h2>
        <p className="program-thanks">
          Thank you for joining us! We believe your life has been richly
          blessed.
        </p>

        {nextProgram && (
          <div className="next-program-box">
            <h3 className="next-title">Up Next</h3>
            <p className="next-name">{nextProgram.name}</p>
            <p className="next-date">{nextProgram.date}</p>
          </div>
        )}

        {/* <a href="/programs" className="view-programs-btn">
          View All Programs
        </a> */}
      </div>
    </div>
  );
};

export default ProgramCompleted;

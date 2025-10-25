import React from "react";
import Header from "../components/Header";
import ScheduleTable from "../components/ScheduleTable";
import ScheduleCalendar from "../components/ScheduleCalendar";
import Countdown from "../components/Countdown";
import Testimony from "../components/Testimony";

const Home = () => {
  return (
    <>
      <Countdown />
      <section
        className="program-section"
      >
        {/* <Testimony/> */}
        <ScheduleTable />
      </section>
    </>
  );
};

export default Home;

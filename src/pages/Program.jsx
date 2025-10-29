import React from "react";
import Header from "../components/Header";
import ScheduleTable from "../components/ScheduleTable";
import Countdown from "../components/Countdown";
import EventCard from "../components/event/EventCard";

const Home = () => {
  return (
    <>
      <Countdown />
      <section className="program-section">
        <EventCard />
        {/* <Testimony/> */}
        <ScheduleTable />
      </section>
    </>
  );
};

export default Home;

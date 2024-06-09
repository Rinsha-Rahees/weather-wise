import React from "react";
import Header from "./Header";
import { AuroraBackground } from "../utils/aurora-background";
import HourlyForecast from "./HourlyForecast";
import HeroSection from "./HeroSection";
import WeeklyForecast from "./WeeklyForecast"
import { CalendarDisplay } from "./CalendarDisplay";
import EventList from "./EventList";

function Home({ textColor }) {
  return (
    <>
      <div className={"flex flex-col w-full " + textColor}>
        <AuroraBackground className="w-full bg-transparent">
          <Header textColor={textColor} />
          <HeroSection textColor={textColor} />
          <HourlyForecast textColor={textColor} />
          <WeeklyForecast textColor={textColor}/>
          <div className="flex justify-between w-full max-w-[90%] mt-20 pb-20">
            <CalendarDisplay/>
            <EventList/>
          </div>
        </AuroraBackground>

      </div>
    </>
  );
}

export default Home;

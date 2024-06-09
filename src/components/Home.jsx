import React from "react";
import Header from "./Header";
import { AuroraBackground } from "../utils/aurora-background";
import HourlyForecast from "./HourlyForecast";
import HeroSection from "./HeroSection";
import WeeklyForecast from "./WeeklyForecast";
import LineGraph from "../utils/LineGraph";

function Home({ textColor }) {
  return (
    <>
      <div className={"flex flex-col w-full " + textColor}>
        <AuroraBackground className="w-full bg-transparent">
          <Header textColor={textColor} />
          <HeroSection textColor={textColor} />
          <HourlyForecast textColor={textColor} />
          <WeeklyForecast />
        </AuroraBackground>

      </div>
    </>
  );
}

export default Home;

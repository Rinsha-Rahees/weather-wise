import React from "react";
import LineGraph from "../utils/LineGraph";

function WeeklyForecast({ textColor }) {
  return (
    <div className="flex flex-col w-full max-w-[90%] mt-20">
      <h5 className={"font-semibold text-lg mb-5 "+textColor}>Weekly Forecast</h5>
      <LineGraph />
    </div>
  );
}

export default WeeklyForecast;

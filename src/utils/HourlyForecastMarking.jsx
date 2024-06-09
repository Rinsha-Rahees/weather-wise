import React from "react";

function HourlyForecastMarking({data}) {
  return (
    <div className="flex justify-between h-fit bg-white text-black">
     {data.map((data, idx) => (
        <div key={data+"_"+idx}>{data}</div>
     ))}
    </div>
  );
}

export default HourlyForecastMarking;

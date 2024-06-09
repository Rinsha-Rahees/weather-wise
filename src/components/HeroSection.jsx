import React from "react";
import { HOURLY_EMOJIS } from "../utils/constants";

function HeroSection({textColor}) {
  return (
    <div className={`flex flex-col justify-center items-center mt-24 font-semibold ${textColor}`}>
      <h2 className="flex text-6xl">
        27<span className="text-3xl ml-2">°C</span>
      </h2>
      <h4 className="flex items-end text-2xl">
        Sunny
        <img 
        className="w-6 h-6 ml-2"
        src={HOURLY_EMOJIS[0]?.src} 
        alt="Climate Emoji" />
      </h4>
    </div>
  );
}

export default HeroSection;

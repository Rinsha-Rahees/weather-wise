import HourlyForecastMarking from "../utils/HourlyForecastMarking"
import {HOURS, HOURLY_WEATHER, HOURLY_EMOJIS} from "../utils/constants"

function HourlyForecast({textColor}) {


  return (
    <div className="flex flex-col w-full max-w-[90%] mt-20">
      <h5 className={"font-semibold text-lg mb-5 "+textColor}>Hourly Forecast</h5>
      <div className="flex flex-col justify-between h-32 border border-gray-400 shadow-md rounded-lg bg-white text-black py-2 px-5">
      <HourlyForecastMarking data={HOURS}/>
      <div className="flex justify-between">
      {HOURLY_EMOJIS.map((emoji) => (
        <img 
        className="w-8 h-8"
        src={emoji?.src} 
        alt="Climate Emoji" />
      ))}
      </div>
      <HourlyForecastMarking data={HOURLY_WEATHER}/>
      </div>
    </div>
  );
}

export default HourlyForecast;
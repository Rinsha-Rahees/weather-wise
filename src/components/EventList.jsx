import React from "react";
import EventTile from "../utils/EventTile";
import { EVENTS } from "../utils/constants";
import AlertDialog from "../utils/AlertDialog";

function EventList() {

  return (
    <>
      <AlertDialog/>
      <div className="w-full h-fit border border-gray-400 shadow-md rounded-lg bg-white p-5 ml-10">
        <h5 className="font-semibold text-lg mb-5">Events</h5>
        {EVENTS.map((event, idx) => (
          <EventTile
            key={event + "_" + idx}
            name={event?.name}
            venue={event?.venue}
            date={event?.date}
            weather={event?.expected_weather}
          />
        ))}
      </div>
    </>
  );
}

export default EventList;

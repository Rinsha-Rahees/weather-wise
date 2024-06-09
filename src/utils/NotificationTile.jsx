import React from "react";

function NotificationTile({ name, venue, date, alert, tip, weather }) {
  return (
    <div className="flex flex-col gap-2 text-sm my-2 w-full border border-gray-200 shadow-md rounded-lg p-3">
      <h5 className="font-semibold text-md">{name}</h5>
      <p className="font-semibold">
        {venue} - {date}
      </p>

      <p className="font-semibold">New Weather: {weather}</p>
      <p>{alert}</p>
      <span className="font-bold">Tip:</span>
      <p>{tip}</p>
    </div>
  );
}

export default NotificationTile;

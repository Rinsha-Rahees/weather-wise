import React from "react";
import { XMarkIcon } from "@heroicons/react/16/solid";
import { GPT_SUGGESTION } from "./constants";
import NotificationTile from "./NotificationTile";

function NotificationDisclose({ notificationOpen, setNotificationOpen }) {
  return (
    <>
      {notificationOpen && (
        <div className="flex flex-col w-full max-w-xl max-h-[80%] overflow-y-scroll absolute top-0 right-0 bg-white py-5 px-2 m-2 rounded-bl-2xl shadow-lg z-30">
          <div className="flex justify-end">
            <button className="fixed flex w-full justify-end items-center">
              <XMarkIcon
                className="w-6"
                onClick={() => setNotificationOpen(false)}
              />
            </button>
          </div>
          <div className="flex flex-col py-8 ml-4 mr-8">
            <ul className="flex flex-col gap-5">
              <li className="text-left">
                {GPT_SUGGESTION.map((suggestion, idx) => (
                  <NotificationTile
                    key={suggestion + "_" + idx}
                    name={suggestion?.event}
                    venue={suggestion?.venue}
                    date={suggestion?.date}
                    alert={suggestion?.alert}
                    tip={suggestion?.tip}
                    weather={suggestion?.new_weather}
                  />
                ))}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default NotificationDisclose;

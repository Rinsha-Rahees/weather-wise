import { BellAlertIcon, CogIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import NotificationDisclose from "../utils/NotificationDisclose";

function Header({ textColor }) {
  const [notificationOpen, setNotificationOpen] = useState(false);

  return (
    <>
      <NotificationDisclose
        notificationOpen={notificationOpen}
        setNotificationOpen={setNotificationOpen}
      />
      <div
        className={`fixed flex justify-center items-center backdrop-blur-lg w-full py-3 z-20 ${textColor}`}>
        <div className="flex justify-between items-center w-full max-w-[95%]">
          <h2 className="font-semibold text-2xl">WeatherWise</h2>
          <div className="flex justify-between w-16">
            <div className="relative flex justify-center">
              <button onClick={() => setNotificationOpen(true)}>
                <BellAlertIcon className="w-6 h-6" />
                <div className="absolute top-0 right-0 bg-red-600 w-2.5 h-2.5 rounded-full" />
              </button>
            </div>
            <button>
              <CogIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

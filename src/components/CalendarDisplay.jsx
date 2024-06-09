import React, { useState } from "react";
import Calendar from "react-calendar";

export function CalendarDisplay() {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <Calendar
      className="w-2/3 h-fit border border-gray-400 shadow-md rounded-lg bg-white p-5"
      onChange={onChange}
      value={value}
      
    />
  );
}

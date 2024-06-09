import React, { useEffect, useState } from "react";
import Home from "./components/Home";

function App() {
  const [bgColor, setBgColor] = useState("bg-gradient-to-r from-violet-200 to-pink-100");
  const [textColor, setTextColor] = useState("text-black")

  //Time captured and converted to AM-PM format
  const time = new Date().toLocaleString("en-US", {
    hour: "numeric",
    hour12: true,
  });

  useEffect(() => {
    if (time > "6 AM" || time > "6 PM" ) {
      setBgColor("bg-black");
      setTextColor("text-white")
    }else{
      setBgColor("bg-gradient-to-r from-violet-200 to-pink-100");
      setTextColor("text-black")
    }
  }, []);

  return (
    <div className={`flex flex-col items-center w-full h-screen overflow-x-hidden ${bgColor}`}>
      <Home textColor = {textColor}/>
    </div>
  );
}

export default App;

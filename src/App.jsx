import React from "react";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col items-center w-full h-screen overflow-x-hidden">
      <div className="max-w-[95%] w-full">
        <Header />
      </div>
    </div>
  );
}

export default App;

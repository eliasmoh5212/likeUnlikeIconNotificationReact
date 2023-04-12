import React, { useState } from "react";
import { AiFillCalendar } from "react-icons/ai";
import Like from "./Like";
import { successNotification } from "./notification";

import "./App.css";
function App() {
  //read the status from the child and handle it in handleClick function
  const handleClick = (readStatus: String) => {
    successNotification(readStatus);
  };

  return (
    <div>
      <Like onClick={handleClick} />
    </div>
  );
}

export default App;

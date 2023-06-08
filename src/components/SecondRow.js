import React from "react";
import Activity from "./Activity";
import Weather from "./Weather";

const SecondRow = () => {
  return (
    <div className="flex justify-center items-start">
      <Activity />
      <Weather />
    </div>
  );
};

export default SecondRow;

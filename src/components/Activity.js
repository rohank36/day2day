import React from "react";
import { useState, useEffect } from "react";

const Activity = () => {
  const [activity, setActivity] = useState("");

  const fetchNewActivity = () => {
    fetch("http://www.boredapi.com/api/activity/")
      .then((res) => res.json())
      .then((data) => setActivity(data.activity));
  };

  useEffect(fetchNewActivity, []);

  return (
    <button
      onClick={fetchNewActivity}
      className="transition-all duration-500 ease-in-out transform motion-safe:hover:scale-110 group block w-96 h-72 mx-auto mt-10 ml-auto rounded-lg p-16 bg-white ring-1 ring-slate-900/5 shadow-2xl hover:shadow-blue-500 hover:bg-blue-500 hover:ring-sky-500 overflow-auto"
    >
      <h1 className="text-slate-900 group-hover:text-white text-2xl font-semibold">
        {activity}
      </h1>
    </button>
  );
};

export default Activity;

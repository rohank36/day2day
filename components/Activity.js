import React from "react";
import { useState, useEffect } from "react";

const Activity = () => {
  const [activity, setActivity] = useState("");

  useEffect(() => {
    fetch("http://www.boredapi.com/api/activity/")
      .then((res) => res.json())
      .then((data) => setActivity(data.activity));
  }, []);

  return <h1>{activity}</h1>;
};

export default Activity;

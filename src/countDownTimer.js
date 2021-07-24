import React, { useState, useEffect } from "react";

export const CountDownTimer = () => {
  // This function will calculate difference between current and target times
  const calculateTimeRemaining = () => {
    let currTime = new Date();
    // Placeholder, need to add logic for endTime
    let endTime = new Date("2021-07-25 03:00:00");

    let timeDiff = endTime - currTime;

    return timeDiff;
  };

  // This function will convert the format for our time difference to HH:MM:SS
  const convertTimeFormat = (time) => {
    let timeVar = parseInt(time, 10);

    let hours = Math.floor(timeVar / (1000 * 60 * 60));
    let minutes = Math.floor((timeVar / (1000 * 60)) % 60);
    let seconds = Math.floor(timeVar / 1000) % 60;

    return [hours, minutes, seconds]
      .map((v) => (v < 10 ? "0" + v : v))
      .filter((v, i) => v !== "00" || i > 0)
      .join(":");
  };

  let time = calculateTimeRemaining();

  const [timeRemaining, setTimeRemaining] = useState(time);

  // This function will display the current activity based on day of the week
  const currActivity = () => {
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];

    const activityList = {
      Sunday: "Leaderboard",
      Monday: "Read",
      Tuesday: "Draw",
      Wednesday: "Write",
      Thursday: "Matchups",
      Friday: "Point Allocation",
      Saturday: "Leaderboard"
    };

    let day = daysOfWeek[new Date().getDay()];
    // console.log(day);
    return activityList[day];
  };

  currActivity();

  useEffect(() => {
    const timer =
      timeRemaining > 0 && setTimeout(() => setTimeRemaining(time), 1000);
    return () => timer;
  }, [time, timeRemaining]);

  return (
    <div className="countdown-timer">
      <div>Countdown: {convertTimeFormat(timeRemaining)}</div>
      <div>Current Activity: {currActivity()}</div>
    </div>
  );
};
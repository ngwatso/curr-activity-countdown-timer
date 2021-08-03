import React, { useEffect, useState } from "react";

export const CurrentActivity = () => {
  const [week, setWeek] = useState("weekOne");
  const [day, setDay] = useState(0);

  // This function will toggle current week in cycle
  const toggleWeek = (week) => {
    week === "weekOne" ? setWeek("weekTwo") : setWeek("weekOne");
    return week;
  };

  let today = new Date().getDay();

  // console.log("before", day);
  console.log("today", today);
  useEffect(() => {
    const changeDay = (day) => {
      if (day !== today) {
        console.log("change day");
        setDay(today);
      }
      return day;
    };
    changeDay();
  }, [today]);

  console.log("after", day);

  // This function will look at the current day of the week and current week, and display the current activity
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
      weekOne: {
        Sunday: "Voting Session 1",
        Monday: "Read",
        Tuesday: "Draw",
        Wednesday: "Write",
        Thursday: "Squadding Up",
        Friday: "Point Share",
        Saturday: "Matchup"
      },
      weekTwo: {
        Sunday: "Big Final Reveal",
        Monday: "Matchup",
        Tuesday: "Voting Session 2",
        Wednesday: "Matchup",
        Thursday: "Voting Session 3",
        Friday: "Matchup",
        Saturday: "Big Final Reveal"
      }
    };

    let day = daysOfWeek[today];

    return activityList[week][day];
  };

  // Wrap functions in useEffect to fire on day change
  useEffect(() => {
    currActivity();
    if (today === 1) {
      toggleWeek(week);
    }
  }, [day]);

  console.log(week);

  console.log(currActivity());

  return <div>Current Activity: {currActivity()}</div>;
};

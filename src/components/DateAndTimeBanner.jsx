import React, { useEffect, useState } from "react";
import clearBackground from "../images/clearBackground.jpeg";

function DateAndTimeBanner() {
  const [date, setDate] = useState({});
  const [time, setTime] = useState({});

  
  useEffect(() => {
    // ------for update time after one second------------
    function timeUpdate() {
      const time = new Date();
      const hours = time.getHours();
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
  
      setTime({
        hours: hours,
        minutes: minutes,
        seconds: seconds
      })
  
    }
    setInterval(timeUpdate, 1000);
  }, []);

  //-------------------for date---------------
  useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const currentDate = new Date();
    const options = { weekday: "long" };
    const dayName = currentDate.toLocaleDateString("en-US", options);
    const day = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    setDate({
      day: day,
      dayName: dayName,
      month: month,
      year: year,
    });
  }, []);

  return (
    <div className="max-w-[500px] w-[350px] relative hidden sm:block">
      <img
        className="h-full w-full object-cover object-center"
        src={clearBackground}
        alt=""
      />
      <div className="w-full h-full text-black z-10 absolute left-0 top-0">
        <div className="w-full p-4 bg-black bg-opacity-50 text-white absolute bottom-0 left-0">
          <div className="text-4xl">
            <span>{time.hours < 10 ? "0":""}{time.hours}:</span>
            <span>{time.minutes < 10 ? "0":""}{time.minutes}:</span>
            <span>{time.seconds < 10 ? "0":""}{time.seconds}</span>
          </div>
          <div className="mt-2">
            <span>{date.dayName}, </span>
            <span>
              {date.day} {date.month}{" "}
            </span>
            <span>{date.year}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DateAndTimeBanner;

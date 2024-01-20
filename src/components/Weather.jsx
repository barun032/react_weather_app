import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";

import clear from "../images/clear.png";
import wind from "../images/wind.png";
import humidity from "../images/humidity.png";
import clouds from "../images/clouds.png";
import drizzle from "../images/drizzle.png";
import mist from "../images/mist.png";
import rain from "../images/rain.png";
import snow from "../images/snow.png";

import DateAndTimeBanner from "./DateAndTimeBanner";

function Weather({ data }) {
  const [weather, setWeather] = useState(data);
  const [icon, setIcon] = useState(clouds);

  const weatherInfo = (data) => {
    console.log(data);
    setWeather(data);
  };

  // set icon based on conditions
  useEffect(() => {
    switch (weather.weather) {
      case "Clear":
        setIcon(clear);
        break;

      case "Clouds":
        setIcon(clouds);
        break;

      case "Drizzle":
        setIcon(drizzle);
        break;

      case "Mist":
        setIcon(mist);
        break;

      case "Rain":
        setIcon(rain);
        break;

      case "Snow":
        setIcon(snow);
        break;

      default:
        setIcon(clouds);
        break;
    }

  }, [weather.weather]);

  return (
    <>
      <div className="flex">
        <DateAndTimeBanner />
        <div className="max-w-[500px] w-[350px] mx-auto bg-slate-400 p-5 bg-gradient-to-r from-emerald-500 from-20% to-indigo-500 to-90% text-center text-white">
          <SearchBar weatherInfo={weatherInfo} />

          <div className="mt-5">
            <div className="flex justify-center">
              <img className="w-40" src={icon} alt="image" />
            </div>
            <div className="text-xl -mt-5">{weather.weather}</div>
            <div className="mt-3">
              <div className="text-5xl">{weather.temperature}&deg;C</div>
              <div className="text-4xl">{weather.title}</div>
            </div>
          </div>

          <div className="flex justify-between mt-16 text-md">
            <div className="flex items-center space-x-2">
              <img className="w-10" src={humidity} alt="image" />
              <div className="flex flex-col items-start">
                <div>{weather.humidity}%</div>
                <div>Humidity</div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <img className="w-10" src={wind} alt="image" />
              <div className="flex flex-col items-start">
                <div>{weather.windSpeed} km/h</div>
                <div>wind speed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Weather;

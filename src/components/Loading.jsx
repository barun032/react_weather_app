import React from "react";
import backgroundImage from "../images/defaultBackground.jpeg";
import WeatherIcons from "../images/WeatherIcons.gif";

function Loading() {
  return (
    <div className="relative h-[100vh] w-full">
      <img
        className="w-full h-full object-cover"
        src={backgroundImage}
        alt="image"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="max-w-[750px] w-[650px] mx-auto bg-black bg-opacity-50 text-center text-white p-10">
          <img className="w-60 mx-auto" src={WeatherIcons} alt="image" />
          <h2 className="font-semibold text-xl">Detecting your location</h2>
          <p className="text-sm">
            Your current location will displayed on the App<br/> & used for
            calculating realtime weather
          </p>
        </div>
      </div>
    </div>
  );
}

export default Loading;

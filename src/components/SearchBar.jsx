import React, { useState } from "react";

function SearchBar( {weatherInfo} ) {
  const [city, setCity] = useState("");
  const API_KEY = "a19cbbb24a8091bce3b49c9ac9e5528f";
  const URL = "https://api.openweathermap.org/data/2.5/weather?";

  const getWeatherInfo = async()=>{ 
    let response = await fetch(`${URL}q=${city}&appid=${API_KEY}&units=metric`);
    let jsonResponse = await response.json();
    
    let data = {
        title: jsonResponse.name,
        temperature: Math.floor(jsonResponse.main.temp),
        humidity: jsonResponse.main.humidity,
        weather: jsonResponse.weather[0].main,
        windSpeed: jsonResponse.wind.speed
    }

    return data;
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    setCity("");
    weatherInfo( await getWeatherInfo() ); // send weather info to weather component
  };

  return (
    <>
      <form className="mt-5" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          className="text-slate-600 py-2 px-3 outline-none text-md font-semibold"
          onChange={(e) => setCity(e.target.value)}
          value={city}
        />
        <button className="py-2 px-3 text-md bg-green-400">Search</button>
      </form>
    </>
  );
}

export default SearchBar;

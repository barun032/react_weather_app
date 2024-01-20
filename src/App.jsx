import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import Loading from "./components/Loading";
import "./index.css";


function App() {
  const API_KEY = "a19cbbb24a8091bce3b49c9ac9e5528f";
  const URL = "https://api.openweathermap.org/data/2.5/weather?";

  const [weatherInfo, setWeatherInfo] = useState({});

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }

    function showPosition(position) {
      fetch(
        `${URL}lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${API_KEY}&units=metric`
      )
        .then((res) => res.json())
        .then((res) =>
          setWeatherInfo({
            title: res.name,
            temperature: Math.floor(res.main.temp),
            humidity: res.main.humidity,
            weather: res.weather[0].main,
            windSpeed: res.wind.speed,
          })
        );
    }

    function showError() {}
  }, [weatherInfo]);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-slate-900" style={{ fontFamily: "'Montserrat', sans-serif"}}>
      {Object.keys(weatherInfo).length > 0 ? (
        <Weather data={weatherInfo} />
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default App;

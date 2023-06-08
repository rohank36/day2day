import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const [temp, setTemp] = useState("");
  const [feelsLike, setFeelsLike] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getPosition);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }

  function getPosition(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;
    const APIKEY = "REDACTED"; //Hidden API key for security 
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.weather[0].main);
        setWeatherDescription(data.weather[0].description);
        setTemp(data.main.temp);
        setFeelsLike(data.main.feels_like);
        setCity(data.name);
        setCountry(data.sys.country);
      });
  }

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <div className="transition-all duration-500 ease-in-out transform motion-safe:hover:scale-110 group block w-96 h-72 mx-auto mt-10 ml-0 rounded-lg p-16 bg-white ring-1 ring-slate-900/5 shadow-2xl overflow-auto">
      <h1 className="text-slate-900 text-2xl font-semibold">
        {city}, {country}
      </h1>
      <h2 className="text-slate-900 text-2xl font-semibold">{weather}</h2>
      <p className="text-slate-500 text-xl">{weatherDescription}</p>
      <p className="text-slate-500 text-xl">Temperature: {temp}°C</p>
      <p className="text-slate-500 text-xl">Feels Like: {feelsLike}°C</p>
    </div>
  );
};

export default Weather;

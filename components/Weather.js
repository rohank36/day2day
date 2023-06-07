import React, { useState, useEffect } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  //const [logo, setLogo] = useState("");
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
    const APIKEY = "6b540e48281c3b81655403b7db32e7be";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${APIKEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => {
        setWeather(data.weather[0].main);
        setWeatherDescription(data.weather[0].description);
        //setLogo(data.weather[0].icon);
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
    <div>
      <h1>
        {city}, {country}
      </h1>
      <h2>{weather}</h2>
      <p>{weatherDescription}</p>
      <p>Temperature: {temp}°C</p>
      <p>Feels Like: {feelsLike}°C</p>
    </div>
  );
};

export default Weather;

import React, { useState } from "react";
import Weather from "./Weather";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, changeCity] = useState(props.defaultCity);

  function showTempreture(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: Math.round(response.data.wind.speed),
      city: response.data.name,
    });
    
  }
  function showWeather(city) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8cd9be374c7c96c39a9fe73f4bf2f055&units=metric`;
    axios.get(url).then(showTempreture);
    <Weather city={city} />;
  }
  function updateCity(event) {
    changeCity(event.target.value);
  }
  function Submit(event) {
    event.preventDefault();
    showWeather(city);
  }
  let form = (
    <form className="search-form">
      <input type="search" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" onClick={Submit} />
    </form>
  );
  if (weatherData.ready) {
    return (
      <div className="weather-app">
        {form}
        <WeatherInfo data={weatherData} />
        
      </div>
    );
  } else {
    return form;
  }
}

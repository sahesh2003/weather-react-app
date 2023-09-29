import React, { useState } from "react";
import Weather from "./Weather";
import FormattedDate from "./FormattedDate"
import axios from "axios";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, changeCity] = useState(null);
  let imgUrl = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

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
    // setLoad(true);
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
    console.log(imgUrl);
    return (
      <div className="weather-app">
        {form}
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 id="city">{weatherData.city}</h2>
              <h3 className="date">
                <FormattedDate date={weatherData.date} />
              </h3>
              <h3 className="description">{weatherData.description}</h3>
            </div>
            <div className="col-6">
              <div className="row icon-temp">
                <div className="col-3 weather-icon">
                  <img src={imgUrl} alt={weatherData.description} />
                </div>
                <div className="col-3">
                  <span className="temperature">{weatherData.temperature}</span>
                  <span className="units">°C</span>
                </div>
              </div>
            </div>

            <div className="col-6 humidity">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind} km/h</li>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}

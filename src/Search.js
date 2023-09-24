import React, { useState } from "react";
import Weather from "./Weather";
import axios from "axios";
import "./Search.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Search() {
  let [loaded, setLoad] = useState(false);
  let [city, changeCity] = useState(null);
  let [tempreture, setTempreture] = useState(null);
  let [description, setDescription] = useState(null);
  let [humidity, setHumidity] = useState(null);
  let [wind, setWind] = useState(null);
  let [icon, setIcon] = useState(null);
  let imgUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  function showTempreture(response) {
    setTempreture(Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(response.data.weather[0].icon);
  }
  function showWeather(city) {
    setLoad(true);
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
  if (loaded) {
    return (
      <div className="weather-app">
        {form}
        <div>
          <ul>
            <h2 id="city">{city}</h2>
            <li>Tempreture: {tempreture}°C</li>
            <li>Description: {description}</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind: {wind}km/h</li>
            <li>
              <img src={imgUrl} alt={description} />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return form;
  }
}

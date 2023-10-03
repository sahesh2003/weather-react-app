import React from "react";

export default function WeatherForecastDay(props){
    let maxTemp = Math.round(props.data.temp.max);
    let minTemp = Math.round(props.data.temp.min);
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    const days = [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat",
    ];
    let iconUrl = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

    return (
      <div className="forecast">
        <div className="day">{days[day]}</div>
        <img src={iconUrl} alt={props.data.weather[0].description} className="forecastIcon"/>
        <div className="min-max-temp">
          <span>{maxTemp}°</span>
          <span className="min">{minTemp}°</span>
        </div>
      </div>
    );
}
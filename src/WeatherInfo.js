import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTempreture from "./WeatherTempreture";

export default function WeatherInfo(props){
    let imgUrl = `http://openweathermap.org/img/wn/${props.data.icon}@2x.png`;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 id="city">{props.data.city}</h2>
            <h3 className="date">
              <FormattedDate date={props.data.date} />
            </h3>
            <h3 className="description">{props.data.description}</h3>
          </div>
          <div className="col-7">
            <div className="row icon-temp">
              <div className="col-3 weather-icon">
                <img src={imgUrl} alt={props.data.description} />
              </div>
              <div className="col-3 weatherTempreture">
                <WeatherTempreture celsius={props.data.temperature} />
              </div>
            </div>
          </div>

          <div className="col-5 humidity">
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </div>
        </div>
      </div>
    );
}
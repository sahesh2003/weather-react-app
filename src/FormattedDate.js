import React from "react";

export default function FormattedDate(props){
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[props.date.getDay()];
    let hour = props.date.getHours();
    let minutes = props.date.getMinutes();
    if(minutes <10){
        minutes = `0${minutes}`;
    }
    if(hour<10){
        hour = `0${hour}`
    }
    return (
      <div>
        {day} {hour}:{minutes}
      </div>
    );
}

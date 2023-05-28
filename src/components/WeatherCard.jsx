import React from 'react'
import { Link } from "react-router-dom";

const WeatherCard = ({ weather }) => {
  console.log(weather)
  return (
    <div className="weather-card">
      <h2>{weather.city}</h2>
      <p>Temperature: {weather.temperature}</p>
      <p>Condition: {weather.condition}</p>
      <Link to="/" style={{textDecoration:"none", color:"aqua"}}>Return to Home</Link>
    </div>
  );
};

export default WeatherCard
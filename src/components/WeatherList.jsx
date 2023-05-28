import React from 'react'
import WeatherCard from "./WeatherCard";

const WeatherList = ({ weatherData }) => {
  console.log(weatherData);

  return (
    <div className="weather-list">
      {weatherData.map((weather) => (
        <WeatherCard key={weather.city} weather={weather} />
      ))}
    </div>
  );
};

export default WeatherList
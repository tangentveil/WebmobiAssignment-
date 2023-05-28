import React, { useEffect, useState } from "react";
import WeatherList from "../components/WeatherList";
import NotFound from "./NotFound";
import { useNavigate, useParams } from "react-router";

const WeatherPage = () => {
  const navigate = useNavigate();

  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);

  const { city: city } = useParams();

  // console.log(city);

  const api = {
    key: "de6f0623a447b44f61615b19bf8e3fc9",
    base: "https://api.openweathermap.org/data/2.5/",
  };


  const url = `${api.base}weather?q=${city}&units=metric&APPID=${api.key}`;

  const fetchWeatherData = async () => {
    try {
      const response = await fetch(url);

      // console.log(response);

      const data = await response.json();

      console.log(data);

      const Weather = {
        city: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].description,
      };

      // console.log(Weather);

      setWeatherData([Weather]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      navigate('*');
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <h2>Weather for {city}</h2>
      <WeatherList weatherData={weatherData} />
    </div>
  );
};

export default WeatherPage;

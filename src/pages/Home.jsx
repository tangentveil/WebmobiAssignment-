import React from "react";
import { useNavigate } from "react-router-dom"; 
import CityForm from "../components/CityForm";

const Home = () => {
  const navigate = useNavigate();

  const handleFormSubmit = (city) => {
    navigate(`/weather/${city}`);
  };

  return (
    <div>
        <h1>Weather App</h1>
        <CityForm onSubmit={handleFormSubmit} />
    </div>
  );
};

export default Home;

// /src/components/WeatherCard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/WeatherCard.css';

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [locationAllowed, setLocationAllowed] = useState(true);

  useEffect(() => {
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
const apiKey = '1b80b0f4c05be3256ec39e3523a0a98b'; // (This is only for testing OpenWeatherMap’s sandbox)
            const response = await axios.get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
            );
            setWeather(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching weather:', error);
            setLoading(false);
          }
        },
        () => {
          setLocationAllowed(false);
          setLoading(false);
        }
      );
    } else {
      setLocationAllowed(false);
      setLoading(false);
    }
  }, []);

  if (loading) return <p className="text-center">Loading weather...</p>;

  if (!locationAllowed)
    return <p className="text-center text-red-600">Location access denied.</p>;

  if (!weather) return <p className="text-center text-red-500">Weather data not available.</p>;

  return (
<div className="weather-card">
  <h2 className="text-2xl font-bold mb-3 text-center">{weather.name}</h2>

<div className="weather-main">    
  <img
      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
      alt={weather.weather[0].description}
      className="weather-icon"
    />
    <div className="weather-info">
      <p className="weather-temp">{weather.weather[0].main}</p>
      <p className="weather-detail">{weather.weather[0].description}</p>
    </div>
  </div>

  <div className="text-center">
    <p className="text-4xl font-bold mb-2">{weather.main.temp}°C</p>
    <p className="text-sm">Humidity: <span className="font-medium">{weather.main.humidity}%</span></p>
    <p className="text-sm">Wind: <span className="font-medium">{weather.wind.speed} m/s</span></p>
  </div>
</div>

  );
};

export default WeatherCard;

import React, { useState, useEffect } from 'react'
import './App.css'
import WeatherDisplay from './components/WeatherDisplay'
import WeatherForm from './components/WeatherForm'

const App = () => {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('');

  useEffect(() => {
    if (location) {
      fetchWeather(location);
    }
  }, [location]);

  const fetchWeather = async (location) => {
    const API_KEY = '614006039e2422e0ed63969495ee3868';
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.log('Error fetching weather:', error)
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 rounded-lg p-10 flex flex-col items-center justify-center p-4">
      <h1 className="text-3xl font-bold mb-4">Weather App</h1>
      <WeatherForm setLocation={setLocation} />
      { weather && <WeatherDisplay weather={weather} />}
    </div>
  )
}

export default App
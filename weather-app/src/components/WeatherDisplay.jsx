import React from 'react'

const WeatherDisplay = ({weather}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-2">{weather.name}</h2>
        <p className="text-4xl font-bold mb-4">{Math.round(weather.main.temp)}°C</p>
        <p className="text-gray-600">{weather.weather[0].description}</p>
        <div className="mt-4">
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
    </div>
  )
}

export default WeatherDisplay;
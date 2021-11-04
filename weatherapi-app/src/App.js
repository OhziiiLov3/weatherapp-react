import React, { useState } from 'react'
import './App.css'

const App = () => {

  const apiKey = '233d7e0ca24b8004061ee0c5dab4fa94'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")

  const getWeather = (event) => {
    if(event.key === "Enter") {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}').then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
        }
      )
    }
  }

  return (
    <div className="container">
      <input 
      className="input" 
      placeholder="Enter City.."
      onChange={ e => setCity(e.target.value)}
      value = {city}
      onKeyPress = {getWeather}

      />
    </div>
  )
}

export default App

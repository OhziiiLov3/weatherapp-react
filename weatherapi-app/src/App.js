import React, {useState} from 'react'
import './App.css'

const App = () => {

  const apiKey = '233d7e0ca24b8004061ee0c5dab4fa94'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState("")

  const getWeather = (event) => {
    if(event.key === "Enter") {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}').then(
        response => response.json()
      ).then(
        data => {
          setWeatherData(data)
          setCity("")
        }
      )
    }
  }

  return (
    <div className="container">
      <input 
      className="input" 
      placeholder="Enter City.."
      onChange={e => setCity(e.target.value)}
      value ={city}
      onKeyPress ={getWeather}
      />


      {typeof weatherData.main === 'undefined' ? (
        <div>
          <p>
            Welcome to My Weather App! Enter a city to get the weather of.
          </p>
        </div>
      ):(
        <div>
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.main.temp)}F</p>
          <p>{weatherData.weather[0].main}</p>
        </div>

      )}
    </div>
  )
}

export default App

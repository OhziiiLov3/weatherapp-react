import React, {useState} from 'react'
import './App.css'

const App = () => {

  const apiKey = '233d7e0ca24b8004061ee0c5dab4fa94';
  const [weatherData, setWeatherData] = useState([{}])

  return (
    <div className="container">
      <input className="input" placeholder="Enter City.."/>
    </div>
  )
}

export default App

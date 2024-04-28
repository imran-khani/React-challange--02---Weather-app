import { useState } from 'react'
import './App.css'
import WeatherDetails from './components/WeatherDetails'
import WeatherInput from './components/WeatherInput'

function App() {
  const [weatherData, setWeatherData] = useState({})
  const [inputValue, setInputValue] = useState('')
  const apiKey = import.meta.env.VITE_apiKey

  const fetchWeatherData = async () => {
    if (inputValue.trim() === '') return // Check for empty input value

    try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${inputValue}`)
      const data = await response.json()

      if (response.ok) {
        setWeatherData(data)
      } else {
        console.error('Error fetching weather data:', data)
      }
    } catch (error) {
      console.error('Error fetching weather data:', error)
    }
  }

  const handleInput = (value: string) => {
    setInputValue(value)
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className="flex flex-col gap-y-5">
        <WeatherInput handleInput={handleInput} fetchWeatherData={fetchWeatherData} />
        <WeatherDetails weatherData={weatherData} />
      </div>
    </div>
  )
}

export default App
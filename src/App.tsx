import React, { useState } from 'react';

import './App.css';
import Search from './components/Search';
import Forecast from './components/Forecast/Forecast';
import Current from './components/Weather/current';
import {WEATHER_API_URL, WEATHER_API_KEY} from '../src/app/api'

const App =()=> {
  const [fetchCurrentWeather, setFetchCurrentWeather ]= useState(null)
  const [forecast, setForecast ]= useState(null)


  const handleOnSearchChange=(searchData:any)=>{
    const [lat, lon] = searchData.value.split('')
    const fetchCurrentWeather = fetch(`${WEATHER_API_URL}weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    const fetchForcast= fetch(`${WEATHER_API_URL}forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([fetchCurrentWeather, fetchForcast])
    .then(async (response)=>{
      const weatherResponse = await response[0].json();
      const forecastResponse = await response[1].json();
      setFetchCurrentWeather({city: searchData.label, ...weatherResponse})
      setForecast({city: searchData.label, ...forecastResponse})

    })



    .catch((err)=> console.log(err))

  }
  console.log(fetchCurrentWeather)
  console.log(forecast)


  return (
    <div className="container">
      <Search  onSearchChange={handleOnSearchChange}/>
     {fetchCurrentWeather && <Current data={fetchCurrentWeather}/>}
     {forecast && <Forecast data={forecast}/>}
    </div>
  );
}

export default App;

import React from 'react'
import './current.css'
function Current(props) {
  const {data}=props
  return (
    <div className='weather-container'>
      <div className='side'>
        <div>
        <p className='city'>{data.city}</p>
        <p className='weather-report'> {data.weather[0].description}</p>
        </div>
      
        <img src={`icons/${data.weather[0].icon}.png`} alt='icon' className='icon' width={100}/>
      </div>
      <div className='downside' >
        <p className='degree'>{Math.round(data.main.temp)}°C</p>
        <div className='details'>
        
          <div className='para-row'>
            <span className='p-label'>Feels like</span>
            <span className='p-value'>{Math.round(data.main.feels_like)}°C</span>


          </div>
          <div className='para-row'>
            <span className='p-label'> wind</span>
            <span className='p-value'>{data.wind.speed}</span>


          </div>
          <div className='para-row'>
            <span className='p-label'> Humidity</span>
            <span className='p-value'>{data.main.humidity}%</span>


          </div>

          <div className='para-row'>
            <span className='p-label' > pressure</span>
            <span className='p-value'>{data.main.pressure}%</span>


          </div>


        </div>

      </div>

    </div>
  )
}

export default Current
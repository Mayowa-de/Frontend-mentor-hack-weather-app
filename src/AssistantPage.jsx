import React from 'react'
import WeatherAssistant from "./Hero/WeatherAssistant.jsx";

export default function AssistantPage({ weatherData }) {
  return (
    <div className='flex flex-col bg-primary  min-h-screen w-full overflow-y-hidden'>
          <WeatherAssistant weatherData={weatherData} />
     
    </div>
  )
}

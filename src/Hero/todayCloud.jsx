import React, { useEffect, useState } from "react";
import axios from 'axios'
import Bgicon from "../assets/images/bg-today-large.svg";
import SunIcon from "../assets/images/icon-sunny.webp";
import loadingIcon from "../assets/images/icon-loading.svg"
import "./Hero.css";

const getWeatherIcon = (code) =>{
  if([0,1].includes(code)) return  require('../assets/images/icon-sunny.webp')
  if([2,3].includes(code)) return  require('../assets/images/icon-partly-cloudy.webp')
  if([45,48].includes(code)) return  require('../assets/images/icon-fog.webp')
  if([51,61,63,65].includes(code)) return  require('../assets/images/icon-drizzle.webp')
  if([71,73,75,77].includes(code)) return  require('../assets/images/icon-snow.webp')
  if([95,96,99].includes(code)) return  require('../assets/images/icon-storm.webp')
  if([63].includes(code)) return require('../assets/images/icon-rain.webp')
}
export default function todayCloud() {
  const [weather, setWeather] = useState(null);

  useEffect(() =>{
    const fetchCurrentWeather= async ()=>{
      try{
     const response= await axios.get('https://api.open-meteo.com/v1/forecast?latitude=48.8566&longitude=2.3522&current_weather=true&timezone=auto')
      setWeather(response.data.current_weather)
      console.log(response)

    }catch(error){
       console.error('Failed to fetch weather', error)
    }
     
    }
    fetchCurrentWeather()
    }, []);

    if(!weather) return <img src={loadingIcon} className="w-16 h-16 animate-rotate  justify-center flex items-center ml-96 p-4 pt-6"/>

   const iconFile= getWeatherIcon(weather.weathercode) || require('default.webp');

    const date = new Date()
    const currentYear= date.getFullYear()
    const month = date.toLocaleDateString('en-US', {month: 'long'})
    const dayNumber = date.getDate()
    const day=date.toLocaleDateString('en-US', {weekday: 'long'})
    const time = date.toLocaleTimeString('en-US', {hour: '2-digit',minute:"2-digit"})
  return (
    <div className="justify-center  mt-10 mb-5">
      <img src={Bgicon} alt="" className="h-80" />
      <div className="z-10 top-[460px] justify-between flex px-7 absolute items-center w-3/4">
        <div className="flex flex-col gap-3 text-white/90">
          <h3 className="text-3xl">France</h3>
          <p>{day}, {month} {dayNumber}, {currentYear}</p>
        </div>
        <div className="flex justify-end gap-12 todayCloud mr-52 items-center">
          <img src={iconFile} alt="" className="w-36  -ml-40 -mt-3" />
          <div className="flex gap-5 italic ">
            <h1 className="text-8xl font-DMSans-Italic text-end text-white font-bold">
              {weather.temperature}
            </h1>
            <span className="text-xl mt-2 -ml-3 text-white font-bold flex gap-5">
              o 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

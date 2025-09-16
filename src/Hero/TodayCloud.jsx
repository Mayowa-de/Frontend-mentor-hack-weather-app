import React, { useEffect, useState } from "react";
import axios from 'axios'
import Bgicon from "../assets/images/bg-today-large.svg";
import loadingIcon from "../assets/images/icon-loading.svg"
import "./Hero.css";

const icons = import.meta.glob('../assets/images/*',{
  eager: true,
  import: 'default'
})
const getWeatherIcon = (code) =>{
  if([0,1].includes(code)) return  icons['../assets/images/icon-sunny.webp']
  if([2,3].includes(code)) return  icons['../assets/images/icon-partly-cloudy.webp']
  if([45,48].includes(code)) return  icons['../assets/images/icon-fog.webp']
  if([51,61,63,65].includes(code)) return  icons['../assets/images/icon-drizzle.webp']
  if([71,73,75,77].includes(code)) return  icons['../assets/images/icon-snow.webp']
  if([95,96,99].includes(code)) return  icons['../assets/images/icon-storm.webp']
  if([63].includes(code)) return icons['../assets/images/icon-rain.webp']
}
export default function TodayCloud({data}) {
  // Error handling of the loading state
    if (!data || !data.current_weather) {
    return (
      <div className="bg-secondary text-white/90  md:w-[800px] w-full h-72 justify-center items-center flex flex-col m-12 mx-0 rounded-2xl">
        <img src={loadingIcon} className="w-10 h-20 animate-rotate  justify-center flex items-center"/>
        <p className="-ml-1 ">Loading...</p>
      </div>
    );
  }
  // declare value to fetch 
  const {temperature,country,city, weathercode} = data.current_weather
   const iconFile= getWeatherIcon(weathercode)

   // date,  day and year fetching
    const date = new Date()
    const currentYear= date.getFullYear()
    const month = date.toLocaleDateString('en-US', {month: 'long'})
    const dayNumber = date.getDate()
    const day=date.toLocaleDateString('en-US', {weekday: 'long'})
    const time = date.toLocaleTimeString('en-US', {hour: '2-digit',minute:"2-digit"})
  return (
    <div className="justify-center items-center  mt-10 mb-5 w-full md:w-[790px]">
      <div className='w-full flex h-[300px] relative '>
      <img src={Bgicon} alt="" className=" z-10 w-full absolute h-full object-cover rounded-xl" />
      </div>
      <div className="z-20 md:top-[460px] md:w-[700px] top-[520px] justify-between md:flex grid grid-cols-1 px-7 absolute md:items-center w-full md:w-1/">
        <div className="flex flex-col gap-3  text-white/90 ">
          <h3 className="text-3xl md:">{country}, {city}</h3>
          <p>{day}, {month} {dayNumber}, {currentYear}</p>
        </div>
        <div className="flex justify-end md:gap-12 todayCloud  gap-20 items-center">
          <img src={iconFile} alt="" className="md:w-36 w-24 -ml-40 -mt-3" />
          <div className="flex gap-5 italic ">
            <h1 className="md:text-8xl text-6xl font-DMSans-Italic text-end text-white font-bold">
              {temperature}
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

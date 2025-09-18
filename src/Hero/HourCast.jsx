import React, { useState, useRef, useEffect } from "react";
import dropdown from "../assets/images/icon-dropdown.svg";
import OverCastIcon from "../assets/images/icon-overcast.webp";
import PartlySunnyIcon from "../assets/images/icon-partly-cloudy.webp";
import SunnyIcon from "../assets/images/icon-sunny.webp";
import RainIcon from "../assets/images/icon-rain.webp";
import FogIcon from "../assets/images/icon-fog.webp";

//import weather icons
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

export default function HourCast({ weatherData }) {
  const [showDays, setShowDays] = useState(false);
  const [SelectedDays, setSelectedDays] = useState('');
 const days = weatherData && weatherData.daily && weatherData.daily.time
  ? weatherData.daily.time.map(dateStr =>
      new Date(dateStr).toLocaleDateString('en-US', { weekday: 'long' })
    )
  : [];


  useEffect(() => {
  if (days.length > 0 && !SelectedDays) {
    setSelectedDays(days[0]);
  }
}, [days, SelectedDays]);

// dropdown accesibility
  const dropdownRef = useRef(null);

  // ...handleShowDays and useEffect for outside click/ESC...

  // Find the index of the selected day in the API's daily.time array
let selectedDate = null;
if (weatherData && weatherData.daily && weatherData.daily.time) {
  // Find the index of the selected day in the days array
  const selectedIndex = days.findIndex(
  d => d.toLowerCase() === SelectedDays.toLowerCase()
);
 selectedDate = weatherData?.daily?.time[selectedIndex];
}


  // Filter hourly data for the selected day
  let hourlyForDay = [];
  if (
    weatherData &&
    weatherData.hourly &&
    weatherData.hourly.time &&
    selectedDate
  ) {
    hourlyForDay = weatherData.hourly.time
      .map((time, idx) => ({
        time,
        temperature: weatherData.hourly.temperature_2m[idx],
        weathercode: weatherData.hourly.weathercode[idx],
      }))
      .filter(item => item.time.startsWith(selectedDate));
  }
  

  return (
    <div className="flex mt-12 w-full relative">
      <div className="flex gap-7 bg-card rounded-2xl pt-4 px-4 w-full text-white/90 ">
        <div className="flex flex-col mt-3 gap-4 w-full">
          <div className="flex mb-4 w-full">
            <div className=" flex mt-2 w-full">
              <h2 className=" text-7 font-Inter font-semibold">Hourly forecast</h2>
            </div>
            <div className="flex gap-2 justify-end w-full">
              <button onClick={() => setShowDays(!showDays)} className="btn focus:outline-white focus:outline-2 shadow-none flex gap-2 bg-button1 border-none rounded-md text-white ">
                {SelectedDays} <img src={dropdown} alt="" />
              </button>
            </div>
          </div>
          {hourlyForDay.length === 0 ? (
            <div className="text-white">No hourly data for this day.</div>
          ) : (
            hourlyForDay.map((hour, idx) => {
              const hourNum = new Date(hour.time).getHours();
              const ampm = hourNum >= 12 ? "PM" : "AM";
              const displayHour = hourNum % 12 === 0 ? 12 : hourNum % 12;
              <div key={hour.time} className="bg-secondary rounded-md border-2 text-white/90 card border-borderColor/15 p-4 shadow-none h-14 flex items-center">
                <div className="flex items-center gap-2 justify-start w-full text-white">
                  {/* You can use your getWeatherIcon function here */}
                  <span className="w-5">
                    <img src={getWeatherIcon(hour.weathercode)} alt="" className="w-5 h-5" />
                  </span>
                  <h4 className="flex text-sans">{new Date(hour.time).getHours()}</h4>
                  <span>{ampm}</span>
                  <div className=" flex justify-end w-full">
                    <p>{hour.temperature} </p>
                    <span className="-mt-2 text-[12px] ">o</span>
                  </div>
                </div>
              </div>
})
          )}
        </div>
      </div>
      {showDays && (
        <div className="z-20 absolute flex w-full md:w-[305px] top-20 md:top-[78px] ">
          <div ref={dropdownRef} className="flex justify-center flex-col gap-2 pt-2  bg-secondary ml-28 rounded-xl shadow-xl  p-2 w-56">
            {days.map((day) => (
              <div key={day} onClick={() => {
                setSelectedDays(day);
                setShowDays(false);
              }} className={` ${SelectedDays === day ? 'bg-card' : 'bg-transparent'} rounded-xl  text-white text-5 p-2 px-2 w-full`}>
                <h3>{day}</h3>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

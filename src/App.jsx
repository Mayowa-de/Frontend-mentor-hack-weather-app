import { useEffect, useState } from "react";
import "./index.css";
import Header from "./Hero/Header.jsx";
import Title from "./Hero/title";
import TodayCloud from "./Hero/todayCloud";
import SubCloud from "./Hero/SubCloud.jsx";
import HourCast from "./Hero/HourCast.jsx";
import DailyForeCast from "./Hero/DailyForeCast.jsx";
import { fetchWeatherData } from "./Hero/api.jsx";

function App() {
  const [unit, setUnit] = useState('Celsius (C)');
const [selected, setSelected] = useState({
  temperature: 'Celsius (C)',
  wind: 'Km/h',
  precipitation: 'Millimeters (mm)'
});
const [weatherData, setWeatherData] = useState(null)
const [coordinate, setCoordinate] =  useState({latitude: 0, longitude: 0})

useEffect(()=>{
  navigator.geolocation.getCurrentPosition((position)=>{
    setCoordinate({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    })
  if (coordinate.latitude !== 0 && coordinate.longitude !== 0) {
    fetchWeatherData(coordinate, selected)
      .then(data => setWeatherData(data))
      .catch(err => console.error(err));
  }

  })
}, [coordinate, selected])
// Pass as props

  return (
    <>
      <div className=" items-center flex mb-10 flex-col px-2 md:px-24 ">
        <Header unit={unit} setUnit={setUnit} selected={selected} setSelected={setSelected} />
        <Title  />
        <div className="flex gap-7 flex-col justify-center md:flex">
          <div className="flex flex-col ">
            <TodayCloud  data={weatherData}/>
            <SubCloud />
            <DailyForeCast/>
          </div>
          <HourCast />
        </div>
      </div>
    </>
  );
}

export default App;

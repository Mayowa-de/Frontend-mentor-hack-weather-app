import { useEffect, useState } from "react";
import "./index.css";
import {Routes, Route} from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from "./Hero/Header.jsx";
import { fetchWeatherData } from "./Hero/api.jsx";
import AssistantPage from "./AssistantPage.jsx";
import HomePage from "./HomePage.jsx"


function App() {
  const [error, setError] = useState(null)
  const [unit, setUnit] = useState("Celsius (C)");
  const [selected, setSelected] = useState({
    temperature: "Celsius (C)",
    wind: "Km/h",
    precipitation: "Millimeters (mm)",
  });
  const [weatherData, setWeatherData] = useState(null);
  // Default to Paris, France
  const [coordinate, setCoordinate] = useState({
    latitude: 48.8566,
    longitude: 2.3522,
  });

  // Try to get user's coordinates on mount
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setCoordinate({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        // If denied or error, keep default (France)
        console.log("Geolocation error or denied, using default (France)");
      }
    );
  }, []);
 useEffect(() => {
    if (coordinate.latitude && coordinate.longitude) {
      fetchWeatherData(coordinate, selected)
        .then((data) => setWeatherData(data))
        .catch((error)=>{
          console.error('fetch failed:', error)
          setError('Something Went wrong')
        })
    } 
  }, [coordinate, selected]);
  const handleSearch = (locationInput) => {
    fetchWeatherData(coordinate, selected, locationInput)
      .then((data) => setWeatherData(data))
      .catch((err) => console.error(err));
  };

 
  // Pass as props

  return (
    <>
      <div className=" items-center flex bg-primary min-h-screen w-full flex-col px-4 md:px-24">
        <Header
          unit={unit}
          setUnit={setUnit}
          selected={selected}
          setSelected={setSelected}
        />
        <Routes>
          <Route path="/" element={<HomePage  error={error} handleSearch={handleSearch} weatherData={weatherData} selected={selected} unit={unit}/> } />
           <Route path="/assistant" element={<AssistantPage  weatherData={weatherData}/>}/>
        </Routes>
      </div>
 
    </>
  );
}

export default App;

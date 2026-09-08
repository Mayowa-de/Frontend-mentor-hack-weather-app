import { useCallback, useEffect, useState } from "react";
import axios from "axios"
import "./index.css";
import {Routes, Route} from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Header from "./Hero/Header.jsx";
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

  const fetchWeatherData = useCallback(async () => {
  try{
    setError(null);
    const response= await axios.get("https://weather-app-backend-ozky.onrender.com/api/weather", {
      params: {
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
        units: selected.temperature,
        windUnit: selected.wind,
        precipitationUnit: selected.precipitation,
      },
    });
    setWeatherData(response.data);
  }
    catch(error){
          console.error('fetch failed:', error)
          setError('Something Went wrong')
        }
  }, [coordinate, selected]);

 useEffect(() => {
    fetchWeatherData();
  }, [fetchWeatherData]);

  const handleSearch = async (locationInput) => {
    try{
      setError(null);
      const response = await axios.get("https://weather-app-backend-ozky.onrender.com/api/weather" || "http://localhost:3000/api/weather", {
        params: {
          city: locationInput,
          units: selected.temperature,
          windUnit: selected.wind,
          precipitationUnit: selected.precipitation,
        },
      });
      setWeatherData(response.data);
    }
    catch(error) {
        console.error(error)
         setError('something went wrong')
  };
}

 
  // Pass as props

  return (
    <>
      <div className=" items-center w-full flex bg-primary min-h-screen flex-col px-4 md:px-24 pb-4 ">
        <Header
          unit={unit}
          setUnit={setUnit}
          selected={selected}
          setSelected={setSelected}
        />
        <Routes>
         <Route path="/" element={<HomePage error={error} onRetry={fetchWeatherData} handleSearch={handleSearch} weatherData={weatherData} selected={selected} unit={unit}/> } />
           <Route path="/assistant" element={<AssistantPage weatherData={weatherData}/>}/>
        </Routes>
      </div>
 
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import "./index.css";
import Header from "./Hero/Header.jsx";
import Title from "./Hero/Title.jsx";
import TodayCloud from "./Hero/TodayCloud.jsx";
import SubCloud from "./Hero/SubCloud.jsx";
import HourCast from "./Hero/HourCast.jsx";
import DailyForeCast from "./Hero/DailyForeCast.jsx";
import ErrorIcon from "./assets/images/icon-error.svg"
import loadingIcon from "./assets/images/icon-loading.svg";
import { fetchWeatherData } from "./Hero/api.jsx";

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
      <div className="pb-10 items-center flex bg-primary min-h-screen  mb-10 flex-col px-2 md:px-24 ">
        <Header
          unit={unit}
          setUnit={setUnit}
          selected={selected}
          setSelected={setSelected}
        />
        {error ? (
           <div className="flex justify-center w-full items-center gap-3 flex-col mt-12 ">
        <img src={ErrorIcon} alt="Error icon" className=" w-8 h-8" />
        <h1 className="text-white text-2xl font-bold">Something went wrong</h1>
        <div className="flex justify-center items-center text-center flex-col gap-3 w-80 md:w-96">
        <p className="text-white">We couldn't connect to the server (API error) Please try again in a few moments</p>
        <button  className="flex p-2 focus:outline-2 focus:outline-white rounded-xl bg-secondary gap-2">
          <img src={loadingIcon} alt="loadding icon" className="text-xl"/>
          <p className="text-white text-5">Retry</p>
        </button>
        </div>
        </div> ) : (
          <>
        <Title onSearch={handleSearch} />
        <div className="grid gap-7 grid-cols-1 w-full  md:flex ">
          <div className="flex flex-col ">
            <TodayCloud data={weatherData} />
            <SubCloud weatherData={weatherData} />
            <DailyForeCast weatherData={weatherData} />
          </div>
          <HourCast selected={selected} weatherData={weatherData} />
        </div>
        </>
        )}
      </div>
    </>
  );
}

export default App;

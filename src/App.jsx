import { useEffect, useState } from "react";
import "./index.css";
import Header from "./Hero/Header.jsx";
import Title from "./Hero/Title.jsx";
import TodayCloud from "./Hero/TodayCloud.jsx";
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
  // Default to Paris, France
const [coordinate, setCoordinate] = useState({ latitude: 48.8566, longitude: 2.3522 });

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

const handleSearch = (locationInput) => {
  fetchWeatherData(coordinate, selected, locationInput)
    .then(data => setWeatherData(data))
    .catch(err => console.error(err));
};

// useEffect(() => {
//   navigator.geolocation.getCurrentPosition((position) => {
//     setCoordinate({
//       latitude: position.coords.latitude,
//       longitude: position.coords.longitude,
//     });
//   });
// }, []); // Only run once on mount

useEffect(() => {
  if (coordinate.latitude  && coordinate.longitude) {
    fetchWeatherData(coordinate, selected)
      .then(data => setWeatherData(data))
      .catch(err => console.error(err));
  }
}, [coordinate, selected]);
// Pass as props

  return (
    <>
      <div className="pb-10 items-center flex mb-10 flex-col px-2 md:px-24 ">
        <Header unit={unit} setUnit={setUnit} selected={selected} setSelected={setSelected} />
        <Title onSearch={handleSearch}/>
        <div className="grid gap-7 grid-cols-1 w-full  md:flex ">
          <div className="flex flex-col ">
            <TodayCloud  data={weatherData}/>
            <SubCloud  weatherData={weatherData} />
            <DailyForeCast weatherData={weatherData}/>
          </div>
          <HourCast weatherData={weatherData}/>
        </div>
      </div>
    </>
  );
}

export default App;

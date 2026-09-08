

export default function SubCloud({ weatherData, selected }) {
  const current = weatherData?.current;
  const daily = weatherData?.daily;
  const hourly = weatherData?.hourly;
  const hasWeatherDetails =
    current &&
    current.temperature_2m !== undefined &&
    current.wind_speed_10m !== undefined &&
    Array.isArray(daily?.precipitation_sum) &&
    Array.isArray(hourly?.relative_humidity_2m);

  if (!hasWeatherDetails) {
    return (
      <>
        <div className="text-white/90 gap-5 relative  md:flex grid grid-cols-2 w-full h-32 rounded-xl shadow-xl justify-center mb-32 md:mb-0">
          <div className="bg-secondary flex flex-col gap-5 p-4 w-full h-32 rounded-xl shadow-xl">
            <h5>Feel like</h5>
            <p>....</p>
          </div>
          <div className="bg-secondary flex flex-col p-4 gap-5 w-full h-32 rounded-xl shadow-xl">
            <h5>Humidity</h5>
            <p>....</p>
          </div>
          <div className="bg-secondary flex flex-col gap-5 p-4 w-full h-32 rounded-xl shadow-xl">
            <h5>Wind speed </h5>
            <p>....</p>
          </div>
          <div className="bg-secondary flex flex-col gap-5 p-4 w-full h-32 rounded-xl shadow-xl">
            <h5>Precipitation</h5>
            <p>....</p>
          </div>
        </div>
      </>
    );
  }
  const precipitation = daily.precipitation_sum[0];
  const humidity = hourly.relative_humidity_2m[0];
  const { temperature_2m, wind_speed_10m } = current;
  // Determine the temperatureunits based on the selected options
  const temperatureUnit = selected?.temperature === 'Fahrenheit (F)' ? 'F' : 'C';
  // Determine the wind speed unit based on the selected option
  const windUnit = selected?.wind === 'mph' ? 'mph' : 'Km/h';
  // Determine the precipitation unit based on the selected option
  const precipitationUnit = selected?.precipitation === 'Inches' ? 'in' : 'mm';
  return (
    <div className="md:flex grid grid-cols-2 gap-2 md:justify-start justify-center w-full font-Inter">
      <div className="flex flex-col gap-4 md:w-full  bg-card text-white/90 rounded-xl shadow-xl p-5 ">
        <h5 className="text-base font-semibold text-borderColor">Feels like</h5>
        <div className="flex">
          <h1 className="text-4xl">{temperature_2m}</h1>
          <span className="-mt-2 text-2 flex">°{temperatureUnit}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:w-full  bg-card text-white/90 rounded-xl shadow-xl  p-5 font-Inter">
        <h5 className="text-base font-semibold text-borderColor">Humidity</h5>
        <div className="flex">
          <h1 className="text-4xl">{humidity}</h1>
          <span className="text-2xl flex  ml-2 font-Inter mt-2">%</span>
        </div>
      </div>
      <div className="flex flex-col md:w-full  gap-4 bg-card text-white/90 rounded-xl shadow-xl  p-5  font-Inter">
        <h5 className="text-base font-semibold text-borderColor">Wind</h5>
        <div className="flex">
          <h1 className="text-4xl font-Inter">{wind_speed_10m}</h1>
          <span className="text-2xl flex  ml-2 font-Inter mt-2">{windUnit}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-card text-white/90 rounded-xl shadow-xl p-5 md:w-full  font-Inter">
        <h5 className="text-base font-semibold text-borderColor">
          Precipitation
        </h5>
        <div className="flex">
          <h1 className="text-4xl font-Inter">{precipitation}</h1>
          <span className="text-2xl mt-2 ml-2 flex text-Inter">{precipitationUnit}</span>
        </div>
      </div>
    </div>
  );
}

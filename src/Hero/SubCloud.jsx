

export default function SubCloud({ weatherData, selected, unit }) {
  if (!weatherData || !weatherData.current_weather) {
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
  const precipitation = weatherData?.daily?.precipitation_sum?.[0];
  const humidity = weatherData?.hourly?.relative_humidity_2m?.[0]
  const { temperature, windspeed } =
    weatherData?.current_weather;
  return (
    <div className="md:flex grid grid-cols-2 gap-2 md:justify-start justify-center w-full font-Inter">
      <div className="flex flex-col gap-4 md:w-full  bg-card text-white/90 rounded-xl shadow-xl p-5 ">
        <h5 className="text-base font-semibold text-borderColor">Feels like</h5>
        <div className="flex">
          <h1 className="text-4xl">{temperature}</h1>
          <span className="-mt-2 text-2 flex">o </span>
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
          <h1 className="text-4xl font-Inter">{windspeed}</h1>
          <span className="text-2xl flex  ml-2 font-Inter mt-2">{unit === 'Km/h' ? 'Km/h' : 'mph'}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-card text-white/90 rounded-xl shadow-xl p-5 md:w-full  font-Inter">
        <h5 className="text-base font-semibold text-borderColor">
          Precipitation
        </h5>
        <div className="flex">
          <h1 className="text-4xl font-Inter">{precipitation}</h1>
          <span className="text-2xl mt-2 ml-2 flex text-Inter">{selected === 'mm' ? 'mm' : 'Inches'}</span>
        </div>
      </div>
    </div>
  );
}

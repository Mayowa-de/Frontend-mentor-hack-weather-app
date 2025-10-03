import React from "react";


//import weather icons
const icons = import.meta.glob('../assets/images/*',{
  eager: true,
  import: 'default'
})
const getWeatherIcon2 = (code) =>{
  if([0,1].includes(code)) return  icons['../assets/images/icon-sunny.webp']
  if([2,3].includes(code)) return  icons['../assets/images/icon-partly-cloudy.webp']
  if([45,48].includes(code)) return  icons['../assets/images/icon-fog.webp']
  if([51,61,63,65].includes(code)) return  icons['../assets/images/icon-drizzle.webp']
  if([71,73,75,77].includes(code)) return  icons['../assets/images/icon-snow.webp']
  if([95,96,99].includes(code)) return  icons['../assets/images/icon-storm.webp']
  if([63].includes(code)) return icons['../assets/images/icon-rain.webp']
}

export default function DailyForeCast({weatherData}) {
  if(!weatherData){
    return( 
    <>
     <div className="md:flex grid grid-cols-3 gap-5 mt-32 md:mt-12  ">
      <div className='bg-card card w-full h-48 rounded-xl'></div>
      <div className='bg-card card w-full h-48 rounded-xl'></div>
      <div className='bg-card card w-full h-48 rounded-xl'></div>
      <div className='bg-card card w-full h-48 rounded-xl'></div>
      <div className='bg-card card w-full  rounded-xl h-48'></div>
      <div className='bg-card card w-full h-48 rounded-xl'></div>
      <div className='bg-card card w-full h-48 rounded-xl'></div>
      </div>
    </>
    )
  }
  return (
    <div className="flex flex-col mt-10 text-white/90 gap-4 font-Inter">
      <h3 className="text-2xl font-sans font-semibold">Daily forecast</h3>
      <div className="md:flex  gap-3 grid grid-cols-3 w-full ">
        {weatherData?.daily?.time?.map((date,index)=>(
        <div key={date} className="card flex flex-col gap-5 bg-card items-center w-full justify-center  rounded-xl p-2 shadow-xl">
          <h5>{new Date(date).toLocaleDateString('en-US', {weekday:'short'})}</h5>
          <img src={getWeatherIcon2(weatherData.daily.weathercode[index])} alt="" className="w-16" />
          <div className="flex gap-5 w-full">
            <div className="flex ">
              <p className="text-[15px] flex">{weatherData.daily.temperature_2m_max[index]}</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
            <div className="flex  justify-end w-full">
              <p className="text-[15px] flex">{weatherData.daily.temperature_2m_min[index]}</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}

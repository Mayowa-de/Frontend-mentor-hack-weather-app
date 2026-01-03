import React from 'react'
import { Link } from "react-router-dom";
import ErrorIcon from "./assets/images/icon-error.svg"
import loadingIcon from "./assets/images/icon-loading.svg";
import Title from "./Hero/Title.jsx";
import TodayCloud from "./Hero/TodayCloud.jsx";
import SubCloud from "./Hero/SubCloud.jsx";
import HourCast from "./Hero/HourCast.jsx";
import DailyForeCast from "./Hero/DailyForeCast.jsx";
export default function HomePage({error, handleSearch, weatherData, selected, unit}) {
  return (
    <div className=' flex flex-col'>
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
            <TodayCloud data={weatherData} selected={selected}/>
            <SubCloud weatherData={weatherData} />
            <DailyForeCast weatherData={weatherData} />
          </div>
          <HourCast selected={selected} unit={unit} weatherData={weatherData} />
          </div>
          </>
        )}
        <div className='flex flex-col gap-5 absolute bottom-3 z-50  right-1'>
            <div className='  flex flex-col items-end gap-4 px-4'>
                <div className='bg-white px-4 p-2 rounded-full  text-start items-center flex'>
                    <p>How is the weather today?</p></div>
                <div className='bg-white p-2 px-4 rounded-full  text-start items-center flex'>
                    <p>Need to start your day?</p></div>
            </div>
        <div className=" z-50 relative  rounded-full  right-3 text-center flex  justify-end" aria-label="icon-button"> 
          <Link to='/assistant'><i className="bi bi-chat-dots text-4xl fs-3 text-black bg-white rounded-full p-3 px-4" />
            <div className='bg-red-600 rounded-full p-2 w-5 h-5 items-center flex text-center absolute top-0 right-2 -mt-4'><span className='text-sm text-white'>1</span></div>
          </Link>
        </div>
        </div>
    </div>
  )
}

import React, { useState } from "react";
import dropdown from "../assets/images/icon-dropdown.svg";
import OverCastIcon from "../assets/images/icon-overcast.webp";
import PartlySunnyIcon from "../assets/images/icon-partly-cloudy.webp";
import SunnyIcon from "../assets/images/icon-sunny.webp";
import RainIcon from "../assets/images/icon-rain.webp";
import FogIcon from "../assets/images/icon-fog.webp";

export default function HourCast() {
  const [showDays, setShowDays] = useState(false)

  const handleShowDays = ()=>{
    setShowDays(!showDays)
  }
  return (
    <div className="flex mt-12 w-full relative">
      <div className="flex gap-7   bg-card rounded-2xl pt-4 px-4 w-full  text-white/90 ">
        <div className="flex flex-col  mt-3 gap-4 w-full">
          <div className="flex mb-4 w-full">
            <div className=" flex  mt-2 w-full">
              <h2 className=" text-7 font-Inter font-semibold">Hourly forecast</h2>
            </div>
            <div className="flex gap-2 justify-end w-full">
              <button onClick={handleShowDays} className="btn  focus:outline-white focus:outline-2 shadow-none flex gap-2 bg-button1 border-none rounded-md text-white ">
                Tuesday <img src={dropdown} alt="" />
              </button>
            </div>
          </div>
          <div className="bg-secondary rounded-md border-2 text-white/90 card border-borderColor/15 p-4  shadow-none h-14">
            <div className="flex items-center gap-2 justify-start w-full text-white">
              <img src={OverCastIcon} alt="" className="w-5" />
              <h4 className="flex text-sans">3</h4>
              <span>PM</span>
              <div className=" flex justify-end w-full">
                <p>20 </p>
                <span className="-mt-2 text-[12px] ">o</span>
              </div>
            </div>
          </div>
          <div className="bg-secondary rounded-md border-2 card border-borderColor/15 p-4 items-center shadow-none h-14">
            <div className="flex items-center gap-2 justify-start w-full text-white">
              <img src={PartlySunnyIcon} alt="" className="w-5" />
              <h4 className="flex text-sans">4</h4>
              <span>PM</span>
              <div className=" flex justify-end w-full">
                <p>20 </p>
                <span className="-mt-2 text-[12px] ">o</span>
              </div>
            </div>
          </div>
          <div className="bg-secondary rounded-md border-2 card border-borderColor/15 p-4 items-center shadow-none h-14">
            <div className="flex items-center gap-2 justify-start w-full text-white">
              <img src={SunnyIcon} alt="" className="w-5" />
              <h4 className="flex text-sans">5</h4>
              <span>PM</span>
              <div className=" flex justify-end w-full">
                <p>20 </p>
                <span className="-mt-2 text-[12px] ">o</span>
              </div>
            </div>
          </div>
          <div className="bg-secondary rounded-md border-2 card border-borderColor/15 p-4 flex items-center shadow-none h-14">
            <div className="flex items-center gap-2 justify-start w-full text-white">
              <img src={OverCastIcon} alt="" className="w-5" />
              <h4 className="flex text-sans">6</h4>
              <span>PM</span>
              <div className=" flex justify-end w-full">
                <p>19 </p>
                <span className="-mt-2 text-[12px] ">o</span>
              </div>
            </div>
          </div>
          <div className="bg-secondary rounded-md border-2 card border-borderColor/15 p-4 flex items-center shadow-none h-14">
            <div className="flex items-center gap-2 justify-start w-full text-white">
              <img src={RainIcon} alt="" className="w-5" />
              <h4 className="flex text-sans">7</h4>
              <span>PM</span>
              <div className=" flex justify-end w-full">
                <p>18</p>
                <span className="-mt-2 text-[12px] ">o</span>
              </div>
            </div>
          </div>
          <div className="bg-secondary rounded-md border-2 card border-borderColor/15 p-4 flex items-center shadow-none h-14">
            <div className="flex items-center gap-2 justify-start w-full text-white">
              <img src={FogIcon} alt="" className="w-5" />
              <h4 className="flex text-sans">8</h4>
              <span>PM</span>
              <div className=" flex justify-end w-full">
                <p>18</p>
                <span className="-mt-2 text-[12px] ">o</span>
              </div>
            </div>
          </div>
          <div className="bg-secondary rounded-md border-2 card border-borderColor/15 p-4 flex items-center shadow-none h-14">
            <div className="flex items-center gap-2 justify-start w-full text-white">
              <img src={RainIcon} alt="" className="w-5" />
              <h4 className="flex text-sans">9</h4>
              <span>PM</span>
              <div className=" flex justify-end w-full">
                <p>17 </p>
                <span className="-mt-2 text-[12px] ">o</span>
              </div>
            </div>
          </div>
          <div className="bg-secondary rounded-md border-2 card border-borderColor/15 p-4 flex items-center h-14 shadow-none">
            <div className="flex items-center gap-2 justify-start w-full text-white">
              <img src={RainIcon} alt="" className="w-5" />
              <h4 className="flex text-sans">10</h4>
              <span>PM</span>
              <div className=" flex justify-end w-full">
                <p>17 </p>
                <span className="-mt-2 text-[12px] ">o</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showDays && (
      <div className="absolute flex w-full md:w-[250px] top-20 md:top-[450px] md:ml-16">
        <div className="flex justify-center flex-col gap-2 pt-2 bg-secondary rounded-xl shadow-xl  p-2 w-full">
          <div className="bg-card rounded-xl   text-white text-5 p-2 px-2 w-full">
          <h3>Monday</h3>
          </div>
          <div className="text-5 rounded-xl text-white p-2 px-2 w-full">
          <h3>Tuesday</h3>
          </div>
          <div className="text-5 rounded-xl text-white p-2 px-2 w-full">
          <h3>Wednesday</h3>
          </div>
          <div className=" rounded-xl  text-white  p-2 px-2 w-full text-5">
          <h3>Thursday</h3>
          </div>
          <div className=" rounded-xl text-white p-2 px-2 w-full text-5">
          <h3>Friday</h3>
          </div>
          <div className=" rounded-xl text-white p-2 px-2 w-full text-5">
          <h3>Saturday</h3>
          </div>
          <div className=" rounded-xl text-white text-5 p-2 px-2 w-full" >
          <h3>Sunday</h3>
          </div>
        </div>
      </div>
      )}
    </div>
  );
}

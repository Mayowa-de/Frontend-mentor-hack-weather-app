import React from "react";
import Logo from "../assets/images/logo.svg";
import dropdown from "../assets/images/icon-dropdown.svg";
import UnitIcon from "../assets/images/icon-units.svg";

export default function Hero({unit, setUnit}) {
  return (
    <div className="w-full flex   mt-5">
      <div className="w-full justify-between flex   mt-2">
        <div className="justify-start flex  ">
          <img src={Logo} alt="" className="w-48" />
        </div>
        <div className="flex flex-col w-full justify-end items-end ">
        <div className="btn items-center p-5  border-none shadow-none  flex bg-secondary text-white px-2 h-7 rounded-md ">
         <div className="flex justify-center  gap-2">
          <img src={UnitIcon} className="w-4" alt="" />
          <p className="text-15 font-light">Units</p>
          <img src={dropdown} className="text-3"></img>
          </div>
        </div>
            <div className="bg-secondary w-56 pb-2 rounded-xl  absolute top-20 z-10">
            <div className="flex flex-col gap-3 p-2 text-white/90">
            <h5 className="text-base p-2 ">Switch to imperial</h5>
              <div className="w-full p-4 rounded-xl h-12 bg-card flex items-center">
            <h5 className="text-sm">Temperature</h5>
            </div>
              <div className="w-full p-4 rounded-xl h-12 bg-card flex items-center">
            <h5 className="text-sm">Celsius(  C)<span className=" -ml-5 absolute text-[10px] ">o</span></h5>
            </div>
            <div className="w-full p-4 rounded-xl h-12 bg-card flex items-center">
            <h5 className="text-sm">Fahrenheit(  F)<span className=" -ml-5 absolute text-[10px] ">o</span></h5>
            </div>
            <hr className="text-5 w-full h-2 text-secondary" />
              <div className="w-full p-4 rounded-xl h-12 bg-card flex items-center">
            <h5 className="text-sm">Wind speed</h5>
            </div>
              <div className="w-full p-4 rounded-xl h-12 bg-card flex items-center">
            <h5 className="text-sm">Km/h</h5>
            </div>
              <div className="w-full p-4 rounded-xl h-12 bg-card flex items-center">
            <h5 className="text-sm">mph</h5>
            </div>
            <hr className="text-5 w-full h-2 text-secondary" />
              <div className="w-full p-4 rounded-xl h-12 bg-card flex items-center">
            <h5 className="text-sm">Precipitation</h5>
            </div>
              <div className="w-full p-4 rounded-xl h-12 bg-card flex items-center">
            <h5 className="text-sm">millimeters</h5>
            </div>
              <div className="w-full p-4 rounded-xl h-12 bg-card flex items-center">
            <h5 className="text-sm">metre</h5>
            </div>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}

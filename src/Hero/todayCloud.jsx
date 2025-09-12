import React from "react";
import Bgicon from "../assets/images/bg-today-large.svg";
import SunIcon from "../assets/images/icon-sunny.webp";
import "./Hero.css";

export default function todayCloud() {
  return (
    <div className="justify-center  mt-10 mb-5">
      <img src={Bgicon} alt="" className="h-80" />
      <div className="z-10 top-[460px] justify-between flex px-7 absolute items-center w-3/4">
        <div className="flex flex-col gap-3 text-white/90">
          <h3 className="text-3xl">Berlin, Germany</h3>
          <p>Tuesday, Aug 5, 2025</p>
        </div>
        <div className="flex justify-end gap-12 todayCloud mr-52 items-center">
          <img src={SunIcon} alt="" className="w-36  -ml-40 -mt-3" />
          <div className="flex gap-5 italic ">
            <h1 className="text-8xl font-DMSans-Italic text-end text-white font-bold">
              20
            </h1>
            <span className="text-xl mt-2 -ml-3 text-white font-bold flex gap-5">
              o 
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

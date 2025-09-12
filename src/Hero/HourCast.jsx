import React from "react";
import dropdown from "../assets/images/icon-dropdown.svg";
import OverCastIcon from "../assets/images/icon-overcast.webp";
import PartlySunnyIcon from "../assets/images/icon-partly-cloudy.webp";
import SunnyIcon from "../assets/images/icon-sunny.webp";
import RainIcon from "../assets/images/icon-rain.webp";
import FogIcon from "../assets/images/icon-fog.webp";

export default function HourCast() {
  return (
    <div className="flex mt-12 ">
      <div className="flex gap-7   bg-card rounded-2xl pt-4 px-4 w-80  text-white ">
        <div className="flex flex-col  mt-3 gap-4">
          <div className="flex ">
            <div className=" flex  mt-2">
              <h2 className=" text-7 ">Hourly forecast</h2>
            </div>
            <div className="flex gap-2 ml-11">
              <button className="btn shadow-none flex gap-2 bg-button1 border-none rounded-md text-white ">
                Tuesday <img src={dropdown} alt="" />
              </button>
            </div>
          </div>
          <div className="bg-secondary rounded-md border-2 text-white card border-borderColor p-4 btn shadow-none h-12">
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
          <div className="bg-secondary rounded-md border-2 card border-borderColor p-4 btn shadow-none h-12">
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
          <div className="bg-secondary rounded-md border-2 card border-borderColor p-4 btn shadow-none h-12">
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
          <div className="bg-secondary rounded-md border-2 card border-borderColor p-4 btn shadow-none h-12">
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
          <div className="bg-secondary rounded-md border-2 card border-borderColor p-4 btn shadow-none h-12">
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
          <div className="bg-secondary rounded-md border-2 card border-borderColor p-4 btn shadow-none h-12">
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
          <div className="bg-secondary rounded-md border-2 card border-borderColor p-4 btn shadow-none h-12">
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
          <div className="bg-secondary rounded-md border-solid card border-borderColor p-4 btn h-12 shadow-none">
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
    </div>
  );
}

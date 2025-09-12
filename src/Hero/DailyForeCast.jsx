import React from "react";
import RainIcon from "../assets/images/icon-rain.webp";
import FogIcon from "../assets/images/icon-fog.webp";
import SnowIcon from "../assets/images/icon-snow.webp";
import partlyCloudyIcon from "../assets/images/icon-partly-cloudy.webp";
import StormIcon from "../assets/images/icon-storm.webp";
import SunnyIcon from "../assets/images/icon-sunny.webp";
import DrizzleIcon from "../assets/images/icon-drizzle.webp";

export default function DailyForeCast() {
  return (
    <div className="flex flex-col mt-10 text-white/90 gap-4 font-Inter">
      <h3 className="text-2xl font-sans font-semibold">Daily forecast</h3>
      <div className="flex  gap-3">
        <div className="card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl">
          <h5>Tue</h5>
          <img src={RainIcon} alt="" className="w-16" />
          <div className="flex gap-5 w-full">
            <div className="flex ">
              <p>20</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
            <div className="flex  justify-end w-full">
              <p>14</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
          </div>
        </div>
        <div className="card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl">
          <h5>Wed</h5>
          <img src={DrizzleIcon} alt="" className="w-16" />
          <div className="flex gap-5 w-full">
            <div className="flex ">
              <p>21</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
            <div className="flex  justify-end w-full">
              <p>15</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
          </div>
        </div>
        <div className="card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl">
          <h5>Thu</h5>
          <img src={SunnyIcon} alt="" className="w-16" />
          <div className="flex gap-5 w-full">
            <div className="flex ">
              <p>24</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
            <div className="flex  justify-end w-full">
              <p>14</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
          </div>
        </div>
        <div className="card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl">
          <h5>Fri</h5>
          <img src={partlyCloudyIcon} alt="" className="w-16" />
          <div className="flex gap-5 w-full">
            <div className="flex ">
              <p>25</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
            <div className="flex  justify-end w-full">
              <p>13</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
          </div>
        </div>
        <div className="card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl">
          <h5>Sat</h5>
          <img src={StormIcon} alt="" className="w-16" />
          <div className="flex gap-5 w-full">
            <div className="flex ">
              <p>21</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
            <div className="flex  justify-end w-full">
              <p>15</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
          </div>
        </div>
        <div className="card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl">
          <h5>Sun</h5>
          <img src={SnowIcon} alt="" className="w-16" />
          <div className="flex gap-5 w-full">
            <div className="flex ">
              <p>25</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
            <div className="flex  justify-end w-full">
              <p>16</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
          </div>
        </div>
        <div className="card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl">
          <h5>Mon</h5>
          <img src={FogIcon} alt="" className="w-16" />
          <div className="flex gap-5 w-full">
            <div className="flex ">
              <p>24</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
            <div className="flex  justify-end w-full">
              <p>15</p>
              <span className="-mt-1 text-[12px]">o</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function SubCloud() {
  return (
    <div className="md:flex grid grid-cols-2 gap-2 md:justify-start justify-center w-full font-Inter">
      <div className="flex flex-col gap-4 md:w-full  bg-card text-white/90 rounded-xl shadow-xl p-5 ">
        <h5 className="text-base font-semibold text-borderColor">Feels like</h5>
        <div className="flex">
          <h1 className="text-4xl">18</h1>
          <span className="-mt-2 text-2 flex">o </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 md:w-full  bg-card text-white/90 rounded-xl shadow-xl  p-5 font-Inter">
        <h5 className="text-base font-semibold text-borderColor">Humidity</h5>
        <div className="flex">
          <h1 className="text-4xl">46%</h1>
        </div>
      </div>
      <div className="flex flex-col md:w-full  gap-4 bg-card text-white/90 rounded-xl shadow-xl  p-5  font-Inter">
        <h5 className="text-base font-semibold text-borderColor">Wind</h5>
        <div className="flex">
          <h1 className="text-4xl font-Inter">14</h1>
          <span className="text-3xl flex  ml-2 font-Inter">Km/h</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-card text-white/90 rounded-xl shadow-xl p-5 md:w-full  font-Inter">
        <h5 className="text-base font-semibold text-borderColor">Precipitation</h5>
        <div className="flex">
          <h1 className="text-4xl font-Inter">0</h1>
          <span className="text-2xl mt-2 ml-2 flex text-Inter">mm</span>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function SubCloud() {
  return (
    <div className="flex gap-4 justify-start  w-full font-Inter">
      <div className="flex flex-col gap-4 bg-card text-white rounded-md p-5 w-full">
        <h5 className="text-base font-semibold text-borderColor">Feels like</h5>
        <div className="flex">
          <h1 className="text-4xl">18</h1>
          <span className="-mt-2 text-2 flex">o </span>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-card text-white rounded-md  p-5 w-full font-Inter">
        <h5 className="text-base font-semibold text-borderColor">Humidity</h5>
        <div className="flex">
          <h1 className="text-4xl">46%</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-card text-white rounded-md  p-5 w-full font-Inter">
        <h5 className="text-base font-semibold text-borderColor">Wind</h5>
        <div className="flex">
          <h1 className="text-4xl font-Inter">14</h1>
          <span className="text-3xl flex  ml-2 font-Inter">Km/h</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-card text-white rounded-md p-5 w-full font-Inter">
        <h5 className="text-base font-semibold text-borderColor">Precipitation</h5>
        <div className="flex">
          <h1 className="text-4xl font-Inter">0</h1>
          <span className="text-2xl mt-2 ml-2 flex text-Inter">mm</span>
        </div>
      </div>
    </div>
  );
}

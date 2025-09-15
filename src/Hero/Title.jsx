import React, { useState } from "react";
import SearchIcon from "../assets/images/icon-search.svg";

export default function Title({onSearch}) {
  const [location, setLocation] =useState('')
  return (
    <div className="justify-center flex items-center flex-col gap-20 mt-20 ">
      <div className="flex ">
      <h1 className="text-white text-5xl flex text-center  font-bold ">
        How's the sky looking today?
      </h1>
      </div>
      <div className="md:flex gap-3 grid grid-cols-1 w-full justify-center items-center">
        <div className="flex items-center gap-0 ">
          <img src={SearchIcon} className="  w-4  ml-4 absolute pointer-events-none" alt="" />
          <input
            type="text"
            onChange={(e)=>setLocation(e.target.value)}
            placeholder="Search for a place..."
            className="md:w-[450px] w-full h-12 px-10 text-xl border-none rounded-md text-white outline-white outline-1 bg-secondary placeholder:text-grey-300"
          />
        </div>
        <button onClick={()=>onSearch(location)} className="btn font-normal  bg-button border-none shadow-none text-white md:w-24 w-full h-12 text-xl">
          Search
        </button>
      </div>
    </div>
  );
}

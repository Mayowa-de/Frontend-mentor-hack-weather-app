import React, { useState } from "react";
import SearchIcon from "../assets/images/icon-search.svg";

export default function title({onSearch}) {
  const [location, setLocation] =useState('')

  const handleSearch = () =>{
    onSearch(location)
  }
  return (
    <div className="justify-center flex items-center flex-col gap-20 mt-20 max-w-full">
      <h1 className="text-white text-5xl w-full font-bold flex">
        How's the sky looking today?
      </h1>
      <div className="md:flex gap-3 flex flex-col w-full">
        <div className="flex items-center gap-0 ">
          <img src={SearchIcon} className="  w-4  ml-4 absolute pointer-events-none" alt="" />
          <input
            type="text"
            onChange={(e)=>setLocation(e.target.value)}
            placeholder="Search for a place"
            className="md:w-[450px] w-full h-12 px-10 text-sm border-none rounded-md text-white outline-white outline-1 bg-secondary placeholder:text-grey-300"
          />
        </div>
        <button onClick={handleSearch} className="btn  bg-button border-none shadow-none text-white md:w-24 w-full h-12">
          Search
        </button>
      </div>
    </div>
  );
}

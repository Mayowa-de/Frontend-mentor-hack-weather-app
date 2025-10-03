import React, { useEffect, useRef, useState } from "react";
import SearchIcon from "../assets/images/icon-search.svg";
import loadIcon from "../assets/images/icon-loading.svg";

export default function Title({ onSearch }) {
  const [showSuggestion, setShowSuggestion] = useState(false);
  const containerRef = useRef(null);
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    //controls input typing
    setLocation(value);

    //shows dropdown
    setShowSuggestion(true);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setShowSuggestion(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <div
      ref={containerRef}
      className=" justify-center flex items-center flex-col gap-20 mt-20 relative"
    >
      <div className="flex ">
        <h1 className="text-white text-5xl flex text-center  font-bold ">
          How's the sky looking today?
        </h1>
      </div>
      <div className="md:flex gap-3 grid grid-cols-1 w-full justify-center items-center">
        <div className="flex items-center  ">
          <img
            src={SearchIcon}
            className="  w-4  ml-4 absolute pointer-events-none"
            alt="search icon"
            aria-label="search image"
          />
          <input
            type="text"
            value={location}
            onChange={handleChange}
            onFocus={() => setShowSuggestion(true)}
            placeholder="Search for a place..."
            className="md:w-[450px] w-full h-12 px-10 text-xl border-none rounded-md text-white outline-white outline-1 bg-secondary placeholder:text-grey-300"
            aria-label="Search location"
          />
        </div>
        <button
          onClick={() => onSearch(location)}
          className="btn font-normal  bg-button hover:bg-button/45 border-none shadow-none text-white md:w-24 w-full h-12 text-xl"
        >
          Search
        </button>
      </div>
      {showSuggestion && (
        <div className="z-50 p-2 flex top-[290px] md:top-[192px] md:-ml-28 rounded-xl shadow-xl md:w-[450px] w-full bg-secondary absolute px-4">
          <div className="flex flex-col   text-white">
            {location.trim() === "" ? (
              <div className="flex gap-2 z-20 p-2  items-center">
                <img src={loadIcon} alt="loading icon" aria-label="loading image" className="w-3 h-3" />
                <p className="">Search city name...</p>
              </div>
            ) : (
              [1, 2, 3].map((i) => (
                <div key={i} className="flex gap-2 items-center">
                  <img src={loadIcon} alt="loading icon" aria-label="loading image" className="w-3 h-3" />
                  <p className="flex gap-2">{location}</p>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}

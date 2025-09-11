import React from "react";
import Logo from "../assets/images/logo.svg";
import dropdown from "../assets/images/icon-dropdown.svg";
import UnitIcon from "../assets/images/icon-units.svg";

export default function Hero() {
  return (
    <div className="w-full flex justify-center items-center mt-5">
      <div className="w-full justify-between flex relative items-center mt-2">
        <div className="justify-start flex w-48">
          <img src={Logo} alt="" />
        </div>
        <div className="btn items-center p-5  border-none shadow-none  flex bg-secondary text-white px-2 h-7 rounded-md">
         <div className="flex justify-center items-center gap-2">
          <img src={UnitIcon} className="w-4" alt="" />
          <p className="text-15 font-light">Units</p>
          <img src={dropdown} className="text-3"></img>
          <ul>
            <li></li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

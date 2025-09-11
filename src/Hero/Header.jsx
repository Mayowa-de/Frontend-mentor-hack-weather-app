import React from "react";
import Logo from "../assets/images/logo.svg";
import dropdown from "../assets/images/icon-dropdown.svg";
import UnitIcon from "../assets/images/icon-units.svg";

export default function Hero() {
  return (
    <div className="w-full flex justify-center items-center mt-5">
      <div className="w-full justify-between flex relative items-center mt-2">
        <div className="justify-start flex w-32">
          <img src={Logo} alt="" />
        </div>
        <div className="btn justify-end items-center p-2 gap-2 border-none shadow-none  flex bg-secondary text-white px-2 h-7 rounded-md">
          <img src={UnitIcon} className="w-3" alt="" />
          <p className="text-sm font-light">Units</p>{" "}
          <img src={dropdown} className="text-3"></img>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import Logo from "../assets/images/logo.svg";
import dropdown from "../assets/images/icon-dropdown.svg";
import UnitIcon from "../assets/images/icon-units.svg";
import CheckIcon from '../assets/images/icon-checkmark.svg'

export default function Hero({unit, setUnit}) {
  const [open, setOpen] = useState(false);
  const [toDrop, setToDrop] = useState(false)
  const [selected, setSelected]=useState({
    temperature: 'Celsius (C)',
    wind: 'Km/h',
    precipitation: 'Millimeters (mm)'
  })
const toggleDown = ()=>{
    setOpen(!open)
  }
  const toggleDropDown = () =>{
    setToDrop(!toDrop)
  }

  const handleSelect = (category,value)=>{
    setSelected(prev =>({...prev, [category]:value}))
  }
  return (
    <div className="w-full flex   mt-5">
      <div className="w-full justify-between flex   mt-2">
        <div className="justify-start flex  ">
          <img src={Logo} alt="" className="w-48" />
        </div>
        <div className="flex flex-col w-full justify-end items-end ">
        <div className="btn items-center p-5  border-none shadow-none  flex bg-secondary text-white px-2 h-7 rounded-md ">
         <div className="flex justify-center  gap-2">
          <img src={UnitIcon} className="w-4" alt="" />
          <p className="text-15 font-light">Units</p>
          <img src={dropdown} onClick={toggleDown} className="text-3"></img>
          </div>
        </div>
        {open &&(
            <div className="bg-secondary w-56 pb-2 rounded-xl  absolute top-20 z-10 shadow-xl transition ease-out">
            <div className="flex flex-col gap-3 p-2 text-white/90">
            <div onClick={toggleDropDown} className="bg-card cursor-pointer w-full h-12 rounded-xl flex items-center">
            <h5 className="text-base p-2 ">Switch to imperial</h5>
            </div>
            {/* dropdown unit  */}
            {toDrop && (
              <>
            <h5 className="text-sm items-center flex pl-2">Temperature</h5>
            {['Celsius (C)', 'Fahrenheit (F)'].map(temp=>{
              const isSelected = selected.temperature === temp;
              return (
              <div key={temp} onClick={()=>handleSelect('temperature', temp)} className={` w-full pl-2  rounded-xl ${ isSelected ? 'h-12 bg-card' : 'bg-transparent'} cursor-pointer gap-0 flex items-center`}>
            <h5 className="text-sm flex">{temp} {selected.temperature === temp  && <img src={CheckIcon} className="w-4 h-4 absolute ml-44"/>}</h5>
            </div>
              )
            })}
            <hr className="text-5 w-full h-2 border-white/15" />
            <h5 className="text-sm pl-2">Wind speed</h5>
            {['Km/h','mph'].map(wind=>{
              const isSelected = selected.wind === wind;
              return (
              <div key={wind} onClick={()=>handleSelect('wind', wind)} className={` w-full pl-2  rounded-xl ${ isSelected ? 'h-12 bg-card' : 'bg-transparent'} cursor-pointer flex items-center`}>
            <h5 className="text-sm flex ">{wind} {selected.wind === wind && <img src={CheckIcon} className="w-4 h-4 absolute ml-44"/>}</h5>
            </div>
              )
           })}
            <hr className="text-5 w-full h-2  border-white/15" />
            <h5 className="text-sm pl-2">Precipitation</h5>
             {['Millimeters (mm)','Inches'].map(ppt=>{
              const isSelected = selected.precipitation === ppt;
              return (
              <div key={ppt} onClick={()=>handleSelect('precipitation', ppt)} className={` w-full pl-2  rounded-xl ${ isSelected ? 'h-12 bg-card' : 'bg-transparent'} cursor-pointer flex items-center`}>
            <h5 className="text-sm flex ">{ppt} {selected.precipitation === ppt && <img src={CheckIcon} className="w-4 h-4 absolute ml-44 flex"/>}</h5>
            </div>
             )
          })}
          </>
)}
            </div>
            </div>
        )}
          </div>
      </div>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";
import Logo from "../assets/images/logo.svg";
import dropdown from "../assets/images/icon-dropdown.svg";
import UnitIcon from "../assets/images/icon-units.svg";
import CheckIcon from '../assets/images/icon-checkmark.svg'

export default function Hero({unit, setUnit, selected, setSelected}) {
  const [open, setOpen] = useState(false);
  const [toDrop, setToDrop] = useState(false)
  const dropdownRef =useRef(null)
const toggleDown = ()=>{
    setOpen(!open)
  }
  const toggleDropDown = () =>{
    setToDrop(!toDrop)
  }

  const handleSelect = (category,value)=>{
    setSelected(prev =>({...prev, [category]:value}))
  }

  useEffect(()=>{
    function handleClickOutside(event){
       if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
        setOpen(false)
       }
    }
    function handleEscClick(event){
      if(event.key==='Escape'){
        setOpen(false)
      }
    }
    if(open){
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keypress',handleEscClick)
    }
    return ()=>{
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keypress', handleEscClick)
    }
  }, [open])
  return (
    <div className="w-full flex   mt-5">
      <div className="w-full justify-between flex   mt-2">
        <div className="justify-start flex  ">
          <img src={Logo} alt="logo image" className="w-48" />
        </div>
        <div className="flex flex-col w-full justify-end items-end z-10 ">
        <button className="btn items-center p-5  border-none shadow-none focus:outline-white focus:outline-2 flex bg-secondary text-white px-2 h-7 rounded-md ">
         <div className="flex justify-center  gap-2">
          <img src={UnitIcon} className="w-4" alt="setting icon" />
          <p value={unit} className="text-15 font-light">Units</p>
          <img src={dropdown} onClick={toggleDown} className="text-3"></img>
          </div>
        </button>
        {open &&(
            <div ref={dropdownRef} className="bg-secondary w-56 pb-2 rounded-xl  absolute top-20 z-10 shadow-xl transition ease-out">
            <div className="flex flex-col gap-3 p-2 text-white/90">
            <div onClick={toggleDropDown} className="bg-card cursor-pointer w-full h-12 rounded-xl flex items-center">
            <h5 className="text-base p-2 ">Switch to imperial</h5>
            </div>
            {/* dropdown unit  */}
            {toDrop && (
              <>
            <p className="text-sm items-center flex pl-2">Temperature</p>
            {['Celsius (C)', 'Fahrenheit (F)'].map(temp=>{
              const isSelected = selected.temperature === temp;
              return (
              <div key={temp} onClick={()=>handleSelect('temperature', temp)} className={` w-full pl-2  rounded-xl ${ isSelected ? 'h-12 bg-card' : 'bg-transparent'} cursor-pointer gap-0 flex items-center`}>
            <p className="text-sm flex">{temp} {selected.temperature === temp  && <img src={CheckIcon} className="w-4 h-4 absolute ml-44"/>}</p>
            </div>
              )
            })}
            <hr className="text-5 w-full h-2  border-white/15" />
            <p className="text-sm pl-2">Wind Speed</p>
            {['Km/h','mph'].map(wind=>{
              const isSelected = selected.wind === wind;
              return (
              <div key={wind} onClick={()=>handleSelect('wind', wind)} className={` w-full pl-2  rounded-xl ${ isSelected ? 'h-12 bg-card' : 'bg-transparent'} cursor-pointer flex items-center`}>
            <p className="text-sm flex ">{wind} {selected.wind === wind && <img src={CheckIcon} className="w-4 h-4 absolute ml-44"/>}</p>
            </div>
              )
           })}
            <hr className="text-5 w-full h-2  border-white/15" />
            <p className="text-sm pl-2">Precipitation</p>
             {['Millimeters (mm)','Inches'].map(ppt=>{
              const isSelected = selected.precipitation === ppt;
              return (
              <div key={ppt} onClick={()=>handleSelect('precipitation', ppt)} className={` w-full pl-2  rounded-xl ${ isSelected ? 'h-12 bg-card' : 'bg-transparent'} cursor-pointer flex items-center`}>
            <p className="text-sm flex ">{ppt} {selected.precipitation === ppt && <img src={CheckIcon} className="w-4 h-4 absolute ml-44 flex"/>}</p>
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

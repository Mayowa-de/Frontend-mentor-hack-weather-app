import React from 'react'
import dropdown from '../assets/images/icon-dropdown.svg'

export default function HourCast() {
  return (
    <div  className='flex mt-16'>
      <div className='flex gap-7  bg-card rounded-2xl p-5 w-80  text-white mt-5'>
        <div className='flex items-center top-0 gap-2'>
        <div className=' flex w-full'>
        <h2 className=' text-7 '>Hourly forecast</h2>
        </div>
        <div className='flex gap-2'>
        <button className='btn shadow-none flex gap-2 bg-button1 border-none rounded-md text-white'>Tuesday <img src={dropdown} alt="" /></button>
        </div>
        </div>
      </div>
    </div>
  )
}

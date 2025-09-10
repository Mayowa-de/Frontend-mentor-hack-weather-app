import React from 'react'
import dropdown from '../assets/images/icon-dropdown.svg'

export default function HourCast() {
  return (
    <div>
      <div className='flex gap-7 bg-card rounded-md p-5 w-56'>
        <h2 >Hourly forecast</h2>
        <button className='btn shadow-none flex gap-2'>Tuesday <img src={dropdown} alt="" /></button>
      </div>
    </div>
  )
}

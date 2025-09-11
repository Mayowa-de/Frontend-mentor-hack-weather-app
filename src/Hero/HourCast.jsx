import React from 'react'
import dropdown from '../assets/images/icon-dropdown.svg'
import OverCastIcon from '../assets/images/icon-overcast.webp'

export default function HourCast() {
  return (
    <div  className='flex mt-16'>
      <div className='flex gap-7   bg-card rounded-2xl pt-4 px-4 w-80  text-white mt-5'>
        <div className='flex flex-col  top-2 gap-4'>
            <div className='flex '>
        <div className=' flex w-full mt-2'>
        <h2 className=' text-7 '>Hourly forecast</h2>
        </div>
        <div className='flex gap-2 ml-6'>
        <button className='btn shadow-none flex gap-2 bg-button1 border-none rounded-md text-white '>Tuesday <img src={dropdown} alt="" /></button>
        </div>
        </div>
        <div className='bg-secondary rounded-md border-5 border-card p-2 w-full'>
            <div className='flex items-center gap-2'>
                <img src={OverCastIcon} alt="" className='w-5' /><h4>3 PM</h4>
                <p>20 <span className='-mt-3 text-3 items-end flex'>o</span></p>
            </div>
        </div>
        </div>
      </div>
    </div>
  )
}

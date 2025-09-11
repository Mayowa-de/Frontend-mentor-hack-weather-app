import React from 'react'
import RainIcon  from '../assets/images/icon-rain.webp'
export default function DailyForeCast() {
  return (
    <div className='flex mt-4 text-white'>
      <div className='card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2'>
        <h5>Tue</h5>
        <img src={RainIcon} alt="" className='w-16'/>
        <div className='flex gap-5 w-full'>
            <div className='flex '>
            <p>20</p><span className='-mt-1 text-[12px]'>o</span>
            </div>
            <div className='flex  justify-end w-full'>
            <p>14</p><span className='-mt-1 text-[12px]'>o</span>
            </div>
        </div>
      </div>
    </div>
  )
}

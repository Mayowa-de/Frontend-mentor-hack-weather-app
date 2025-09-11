import React from 'react'
import RainIcon  from '../assets/images/icon-rain.webp'
export default function DailyForeCast() {
  return (
    <div>
      <div className='flex flex-col gap-5 bg-card'>
        <h5>Tue</h5>
        <img src={RainIcon} alt="" />
        <div className='flex gap-5'>
            <p>20</p><span className='-mt-2 text-2'>o</span>
            <p>14</p><span className='-mt-2 text-2'>o</span>
        </div>
      </div>
    </div>
  )
}

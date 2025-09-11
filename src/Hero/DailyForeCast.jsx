import React from 'react'
import RainIcon  from '../assets/images/icon-rain.webp'
export default function DailyForeCast() {
  return (
    <div className='flex flex-col mt-7 text-white gap-4'>
        <h3 className='text-2xl font-sans font-semibold'>Daily forecast</h3>
         <div className='flex  gap-3'>
      <div className='card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl'>
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
      <div className='card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl'>
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
      <div className='card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl'>
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
      <div className='card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl'>
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
      <div className='card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl'>
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
      <div className='card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl'>
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
      <div className='card flex flex-col gap-5 bg-card w-28 items-center justify-center  rounded-xl p-2 shadow-xl'>
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
    </div>
  )
}

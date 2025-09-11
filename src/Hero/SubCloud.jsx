import React from 'react'

export default function SubCloud() {
  return (
    <div className='flex gap-4  font-[BricolageGrotesque-Bold] justify-start items-start w-full'>
      <div className='flex flex-col gap-7 bg-card text-white rounded-md p-5 w-48'>
        <h5 className='text-2xl text-white'>Feels like</h5>
        <div className='flex'>
        <h1 className='text-4xl'>18</h1><span className='-mt-3 text-2 flex'>o C</span>
        </div>
      </div>
      <div className='flex flex-col gap-7 bg-card text-white rounded-md  p-5 w-48'>
        <h5 className='text-2xl text-white'>Humidity</h5>
        <div className='flex'>
        <h1 className='text-4xl'>46%</h1>
        </div>
      </div>
      <div className='flex flex-col gap-7 bg-card text-white rounded-md  p-5 w-48'>
        <h5 className='text-2xl text-white'>Wind</h5>
        <div className='flex'>
        <h1 className='text-4xl'>14</h1><span className='text-3xl flex  ml-2'>Km/h</span>
        </div>
      </div>
      <div className='flex flex-col gap-7 bg-card text-white rounded-md p-5 w-48'>
        <h5 className='text-2xl text-white'>Precipitation</h5>
        <div className='flex'>
        <h1 className='text-4xl'>0</h1><span className='text-2xl mt-2 ml-2 flex'>mm</span>
        </div>
      </div>
    </div>
  )
}

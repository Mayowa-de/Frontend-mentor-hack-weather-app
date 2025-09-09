import React from 'react'
import Bgicon from '../assets/images/bg-today-large.svg'

export default function todayCloud() {
  return (
    <div className='justify-center  mt-7 '>
      <img src={Bgicon} alt="" className='h-96' />
      <div className='z-10 top-96 justify-between  flex px-5 absolute items-center'>
        <div className='flex flex-col gap-5 text-white'>
        <h3>Berlin, Germany</h3>
        <p>Tuesday, Aug 5, 2025</p>
        </div>
        <div className='flex justify-end'>
        <h1 className='text-2xl text-end text-white'>20<span>o</span></h1>
        </div>
      </div>
    </div>
  )
}

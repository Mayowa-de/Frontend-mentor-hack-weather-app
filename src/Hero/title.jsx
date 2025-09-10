import React from 'react'
import SearchIcon from '../assets/images/icon-search.svg'

export default function title() {
  return (
    <div className='justify-center flex items-center flex-col gap-5 mt-20 max-w-full'>
      <h1 className='text-white text-4xl w-full font-bold'>How's the sky looking today?</h1>
      <div className='flex gap-3 '>
        <div className='flex items-center gap-0 '>
      <img src={SearchIcon} className='  w-4  ml-4 absolute ' alt="" /><input type="text" placeholder='Search for a place' className='w-[350px] h-10 px-10 text-sm border-none rounded-md text-white outline-none bg-secondary placeholder:text-grey-300'/>
      </div>
      <button className='btn font-DMSans bg-button border-none shadow-none text-white'>Search</button>
      </div>
    </div>
  )
}

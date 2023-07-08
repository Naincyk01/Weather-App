import React from 'react'
import { HiOutlineSearch } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
const Inputs = () => {
  return (
    <div className='flex flex-row justify-center my-6'>
      <div className='flex flex-row w-2/3 items-center justify-center space-x-4'>
        <input 
        type='text'
         placeholder='Search for the city....'
          className='text-xl font-light p-1 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'/>

       <HiOutlineSearch/>
       <GrLocation/>
      </div>
    </div>
  )
}

export default Inputs
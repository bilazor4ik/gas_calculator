import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import React, { useContext } from 'react'
import { DarkModeContext } from '../context/DarkModeContext';

const DarkModeSelector = () => {
    const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className='bg-gray-500 text-gray-200 hover:cursor-pointer hover:bg-gray-600 hover:text-gray-300 
    h-10 w-10 absolute left-0 top-[5%] align-middle justify-center flex rounded-r-lg z-30'
    onClick={() => setDarkMode({ status: !darkMode.status })}
    >
      
      {darkMode.status ? (<SunIcon className='w-8 h-8  m-auto'/>) : (<MoonIcon className='w-8 h-8  m-auto'/>) }
    </div>
  )
}

export default DarkModeSelector
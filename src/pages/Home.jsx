import { Transition } from '@headlessui/react'
import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CarSelectorContext } from '../CarSelectorContext'
import DarkModeSelector from '../DarkModeSelector'
import FinalResult from './Home/FinalResult'
import Make from './Home/Make'
import Model from './Home/Model'
import Option from './Home/Option'
import Steps from './Home/Steps'
import Year from './Home/Year'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Home = () => {

 
  const [getStarted, setGetStarted] = useState(true)
  const {state} = useContext(CarSelectorContext)
  return (
    <>
      <DarkModeSelector/>
        <header className={classNames(
          getStarted ? 'absolute left-0 right-0 translate-y-10' : 'translate-y-60', "h-60 max-w-7xl transition-all duration-500 mx-auto m-auto")}>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-gray-100 sm:text-5xl md:text-6xl">
              <span className="block xl:inline">Gas usage</span>{' '}
              <span className="block text-orange-500 dark:text-orange-400 xl:inline">calculator</span>
            </h1>
            <p className="mx-auto mt-3 text-md text-gray-800 dark:text-gray-200 sm:text-lg md:mt-5 md:max-w-3xl ">
              Calculate how much fuel you will use on your trip based on your car and how long is your trip
            </p>

            <Transition
              show={!getStarted}
              enter="transition-opacity duration-75"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md ">
                  <button
                    className="flex w-3/4 md:w-full mx-auto items-center justify-center rounded-md border border-transparent bg-orange-500 dark:bg-orange-400 px-8 py-3 text-base font-medium text-white hover:bg-orange-700 md:py-4 md:px-10 md:text-lg"
                    onClick={() => { setGetStarted(true) }}
                  >
                    Get started
                  </button>
                </div>

              </div>
            </Transition>

          </div>
        </header>
      
      <Transition
        show={getStarted}
        enter="transition-opacity duration-1000"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        
      >
        {getStarted &&
          <main className='text-white h-screen justify-center grid place-content-center'>
         
         
      {state[3].status != 'complete' && <Steps/>}
          {state[0].status === 'current' && <Year/>}
          {state[1].status === 'current' && <Make/>}
          {state[2].status === 'current' && <Model/>}
          {state[3].status === 'current' && <Option/>}
          {state[3].status === 'complete' && state[3].selectedOption && <FinalResult/>}
          </main>

        }
      </Transition>
    </>

  )
}

export default Home
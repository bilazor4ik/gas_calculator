import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    
  const navigate = useNavigate()
  
    
  return (
    <div className="min-h-screen bg-gray-900  flex justify-center align-middle">
      <main className="m-auto  max-w-7xl">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-100 sm:text-5xl md:text-6xl">
          <span className="block xl:inline">Gas usage</span>{' '}
          <span className="block text-orange-300 xl:inline">calculator</span>
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base text-gray-200 sm:text-lg md:mt-5 md:max-w-3xl md:text-xl">
          Calculate how much fuel you will use on your trip based on your car and how long your trip
        </p>

        
          <div className="mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <button
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-orange-400 px-8 py-3 text-base font-medium text-white hover:bg-orange-700 md:py-4 md:px-10 md:text-lg"
                onClick={() => {navigate('selectYear')}}
              >
                Get started
              </button>
            </div>

          </div>
        

      </div>
    </main>
        </div>

  )
}

export default Home
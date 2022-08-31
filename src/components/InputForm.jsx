import React from 'react'
import { Fragment, useState, useEffect } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios'



const people = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
    { id: 5, name: 'Tanya Fox' },
    { id: 6, name: 'Hellen Schmidt' },
    { id: 7, name: 'Caroline Schultz' },
    { id: 8, name: 'Mason Heaney' },
    { id: 9, name: 'Claudie Smitham' },
    { id: 10, name: 'Emil Schaefer' },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
const InputForm = () => {
    const [query, setQuery] = useState('')
    const [selectedYear, setSelectedYear] = useState('')
  const [carYears, setCarYears] = useState([])

    useEffect(()=>{
        axios.get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/year')
        .then(function (response) {
            setCarYears(response.data.menuItem)
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error);
          })

        
    },[])

 
    return (
        <form className="space-y-8 divide-y divide-gray-200 bg-gray-50 px-5 py-8">
            <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
                <div>
                    <div>
                        <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                            This information will be displayed publicly so be careful what you share.
                        </p>
                    </div>
                </div>
            </div>
            <div>
      <label htmlFor="location" className="block text-sm font-medium text-gray-700">
        Location
      </label>
      <select
        id="location"
        name="location"
        className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        defaultValue={carYears[0]?.value}
        onSelect={(e)=>selectedYear(e.target.value)}
      >
        {carYears.map((car, index)=>{
            return <option key={index} value={car.value}>{car.value}</option>
        })}
        
      </select>
    </div>
        </form>
    )
}

export default InputForm
import axios from 'axios'
import React, { useEffect }  from 'react'
import { useContext } from 'react'
import { CarSelectorContext } from '../context/AppStepsContext'

const SelectOptions = () => {

    const { avaialableOptions, selectedOption, setSelectedOption, carID, setCarID} = useContext(CarSelectorContext)

   
    const hadnleOption = (e)=>{
       setSelectedOption(e.target.value)
       
    }


    return (
        <div>
            <div>
                <label htmlFor="car-year" className="block text-sm font-medium text-gray-700">
                    Car Options
                </label>
                <select
                    id="location"
                    name="location"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={selectedOption}
                    onChange={hadnleOption}
                >
                    <option>Please Choose Option</option>
                    {avaialableOptions.map((car, index) => {
                        return <option key={index} value={car.value}>{car.text}</option>
                    })}

                </select>
                
            </div>
        </div>
    )

    
}

export default SelectOptions
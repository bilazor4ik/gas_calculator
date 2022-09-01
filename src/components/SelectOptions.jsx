import axios from 'axios'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CarSelectorContext } from '../context/AppStepsContext'

const SelectOptions = () => {

    const { selectedYear, 
        selectedMake, 
        selectedModel, 
        setAvailableOptions, 
        avaialableOptions, 
        selectedOption, 
        setSelectedOption, 
        carID, 
        setCarID,
        setSelectionDone
         } = useContext(CarSelectorContext)



    //get all available Car options after year & make selection
    useEffect(() => {
        axios.get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/options', {
            params: {
                year: selectedYear,
                make: selectedMake,
                model: selectedModel
            }
        })
            .then(function (response) {
                
                setAvailableOptions(response.data.menuItem)

            })
            .catch(function (error) {
                console.log(error);
            })
    }, [selectedModel])


    const handleOptions =  (e) => {
        
        setSelectedOption(e.target.value)
        setSelectionDone(true)
       
        
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
                    onChange={handleOptions}
                >
                    <option>Please Choose Option</option>
                    { avaialableOptions.length > 0 ? 
                        (avaialableOptions.map((car, index) => {
                            return <option key={index} value={car.value}>{car.text}</option>
                        })) : (<option value={avaialableOptions.value}>{avaialableOptions.text}</option>)}

                </select>

            </div>
        </div>
    )


}

export default SelectOptions
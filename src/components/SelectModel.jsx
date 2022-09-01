import axios from 'axios'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CarSelectorContext } from '../context/AppStepsContext'

const SelectModel = () => {

    const {selectedYear,  avaialableModels, selectedModel, setSelectedModel, selectedMake, setAvailableModels } = useContext(CarSelectorContext)

    //get all available Car models after year & make selection
    useEffect(() => {
        axios.get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/model', {
            params: {
                year: selectedYear,
                make: selectedMake
            }
        })
            .then(function (response) {
                setAvailableModels(response.data.menuItem)
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [selectedMake])

    return (
        <div>
            <div>
                <label htmlFor="car-year" className="block text-sm font-medium text-gray-700">
                    Car Model
                </label>
                <select
                    id="location"
                    name="location"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={selectedModel}
                    onChange={(e) => setSelectedModel(e.target.value)}
                >
                    <option>Please Choose model</option>
                    {avaialableModels.map((car, index) => {
                        return <option key={index} value={car.value}>{car.text}</option>
                    })}

                </select>
            </div>
        </div>
    )

}

export default SelectModel
import axios from 'axios'
import React, { useEffect }  from 'react'
import { useContext } from 'react'
import { CarSelectorContext } from '../context/AppStepsContext'

const SelectMake = () => {

    const { avaialableMakes, selectedMake, setSelectedMake, setAvailableMakes, selectedYear} = useContext(CarSelectorContext)
 //get all available Car manufacturers after year selection
 useEffect(() => {
    axios.get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/make', {
        params: {
            year: selectedYear
        }
    })
        .then(function (response) {

            setAvailableMakes(response.data.menuItem)

        })
        .catch(function (error) {
            console.log(error);
        })
}, [selectedYear])

    
    return (
        <div>
            <div>
                <label htmlFor="car-year" className="block text-sm font-medium text-gray-700">
                    Car Make
                </label>
                <select
                    id="location"
                    name="location"
                    className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    value={selectedMake}
                    onChange={(e) => setSelectedMake(e.target.value)}
                >
                    <option>Please Choose manufacturer</option>
                    {avaialableMakes.map((car, index) => {
                        return <option key={index} value={car.value}>{car.text}</option>
                    })}

                </select>
            </div>
        </div>
    )

}

export default SelectMake
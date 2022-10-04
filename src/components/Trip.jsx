import React, { useState } from 'react'

const Trip = ({ mpg }) => {
    const [tripLength, setTripLenght] = useState('')
    const [neededGas, setNeededGas] = useState(0)
    const handleTripLength = (e) => {
        setTripLenght(e.target.value)
        const gallons = e.target.value / mpg
        setNeededGas(gallons.toFixed(2))

    }
    return (
        <>
            <label
                htmlFor="miles"
                className="block mt-8 text-sm font-medium text-gray-800 dark:text-gray-200"
            >
                How big is your trip
            </label>
            <div className="relative mt-1 rounded-md shadow-sm  mx-auto">

                <input
                    type="number"
                    name="miles"
                    id="miles"
                    className="block w-full bg-white dark:text-gray-200 dark:bg-gray-700 text-gray-900 rounded-md border-gray-300  pr-12 focus:border-orange-500 focus:ring-orange-500 sm:text-sm"
                    placeholder="0 miles"
                    aria-describedby="miles-count"
                    value={tripLength}
                    onChange={(e) => { handleTripLength(e) }}
                />
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <span className="text-gray-500 sm:text-sm" id="miles">
                        Miles
                    </span>
                </div>
            </div>
            <div className="mt-8 text-2xl text-gray-800 dark:text-gray-200">{neededGas ? <p>You will need approximately <span className="text-orange-400 text-lg "><b>{neededGas} gallons</b> </span></p> : ""}</div>
        </>

    )
}

export default Trip
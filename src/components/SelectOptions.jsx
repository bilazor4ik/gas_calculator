import axios from 'axios'
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { CarSelectorContext } from '../context/AppStepsContext'
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
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
        selectionDone,
        setSelectionDone,
        getCarEmission
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


    const handleChange =(args)=>{
        setSelectedOption(args.text)
        setSelectionDone(true)
        setCarID(args.value)
        getCarEmission()
    }
    return (
        <>

            <Listbox value={selectedOption} onChange={handleChange}>
                {({ open }) => (
                    <>
                        <Listbox.Label className="block text-sm font-medium text-gray-700"> Car Options</Listbox.Label>
                        <div className="relative">
                            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm">
                                <span className="block truncate">{selectedOption ? selectedOption : 'Select option'}</span>
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                </span>
                            </Listbox.Button>

                            <Transition
                                show={open}
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute z-10 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {avaialableOptions.length > 0 ? (
                                        avaialableOptions.map((car, index) => (
                                            <Listbox.Option
                                                key={index}
                                                className={({ active }) =>
                                                    classNames(
                                                        active ? 'text-white bg-orange-600' : 'text-gray-900',
                                                        'relative cursor-default select-none py-2 pl-8 pr-4'
                                                    )
                                                }
                                                value={{value: car.value, text: car.text}}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                            {car.text}
                                                        </span>

                                                        {selected ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'text-white' : 'text-orange-600',
                                                                    'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))) : (<Listbox.Option
                                            
                                            className={({ active }) =>
                                                classNames(
                                                    active ? 'text-white bg-orange-600' : 'text-gray-900',
                                                    'relative cursor-default select-none py-2 pl-8 pr-4'
                                                )
                                            }
                                            value={{value: avaialableOptions.value, text: avaialableOptions.text  }}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                        {avaialableOptions.text}
                                                    </span>

                                                    {selected ? (
                                                        <span
                                                            className={classNames(
                                                                active ? 'text-white' : 'text-orange-600',
                                                                'absolute inset-y-0 left-0 flex items-center pl-1.5'
                                                            )}
                                                        >
                                                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>)}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </>
                )}
            </Listbox>
        </>
    )


}

export default SelectOptions
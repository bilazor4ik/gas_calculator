import React, { useEffect, useContext } from 'react'
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import axios from 'axios'
import { CarSelectorContext } from '../context/CarSelectorContext'
import Loader from './Loader'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const Model = () => {
  const [availableModel, setAvailableModels] = useState([])
  const [selectedModel, setSelectedMake] = useState('Select Model')
  const [loading, setLoading] = useState(true)
  const { state, handleModelSelection } = useContext(CarSelectorContext)
  const getModels = async () => {

    axios.get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/model', {
      params: {
        year: state[0].selectedYear,
        make: state[1].selectedMake
      }
    })
      .then(function (response) {
        if (response.status == 200) {
          if (Array.isArray(response.data.menuItem)) {

            setAvailableModels(response.data.menuItem)
          } else {
            setAvailableModels([response.data.menuItem])
          }

        }
      })
      .catch(function (error) {
        console.log(error);
      })

  }

  useEffect(() => {
    try {
      getModels()
    } catch (error) {
      console.log(error)
    }
    const timer = setTimeout(() => {
      setLoading(false)

    }, 1000)


  }, [])


  const handleSelect = (e) => {
    setSelectedMake(e)
    handleModelSelection(e)
  }

  if (loading) {
    return <Loader />
  }

  if (!loading && availableModel.length > 0) {
    return (
      <>
        <Listbox value={selectedModel} onChange={handleSelect} className="w-96">
          {({ open }) => (
            <>
              <Listbox.Label className=" text-center block text-sm font-medium text-gray-700 dark:text-orange-400 ">Car model</Listbox.Label>
              <div className="relative mt-1 text-center">
                <Listbox.Button className="relative w-52 mx-auto cursor-pointer text-gray-900 rounded-md border border-gray-300 bg-white dark:text-gray-200 dark:bg-gray-700 dark:border-gray-900 py-2 pl-3 pr-10 text-left shadow-sm focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 sm:text-sm">
                  <span className="block truncate">{selectedModel ? selectedModel : null}</span>
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
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 left-0 right-0 w-52 m-auto overflow-auto rounded-md bg-white dark:text-gray-200 dark:bg-gray-700  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {availableModel.map((year) => (
                      <Listbox.Option
                        key={year.value}
                        className={({ active }) =>
                          classNames(
                            active ? 'text-orange-400 font-bold' : 'text-gray-800 dark:text-gray-300',
                            'relative cursor-pointer select-none py-2 pl-3 pr-9'
                          )
                        }
                        value={year.value}
                      >
                        {({ selectedModel, active }) => (
                          <>
                            <span className={classNames(selectedModel ? 'font-semibold' : 'font-normal', 'block truncate')}>
                              {year.text}
                            </span>

                            {selectedModel ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-indigo-600',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </>
          )}
        </Listbox>
      </>


    )
  }
}

export default Model

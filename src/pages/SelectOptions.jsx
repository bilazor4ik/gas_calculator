import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import axios from 'axios'
import DisplayLoading from '../components/DisplayLoading'
import { SelectionStepsContext } from '../context/SelectionStepsContext'
import { CarSelectionContext } from '../context/CarSelectionContext'
import { useNavigate } from 'react-router-dom'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const SelectOptions = () => {
    const [availableOptions, setAvailableOptions] = useState([])
    const { selectedYear, selectedMake, selectedModel, selectedOption, setSelectedOption, selectedCarId, setSelectedCarId } = useContext(CarSelectionContext)
    const [loading, setLoading] = useState(false)
    const { steps, setSteps } = useContext(SelectionStepsContext)
    const [valueAndText, setValueAndText] = useState([' ',' '])
    const navigate = useNavigate()
    const getOptions = async () => {

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

    }
    useEffect(() => {
        setLoading(true)
        setSteps(
            prevState => {
                const newState = prevState.map(obj => {

                    if (obj.id === "03") {
                        return { ...obj, status: 'current' };
                    }

                    return obj;
                });

                return newState;
            });
        try {
            getOptions()
           
        } catch (error) {
            console.log(error)
        }

        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)


    }, [])

    const handleOptionSelection = (e) => {
        e.preventDefault()
        setSelectedOption(e.target.value)
        setSteps(
            prevState => {
                const newState = prevState.map(obj => {

                    if (obj.id === 4) {
                        return { ...obj, status: 'complete', value:e.target.value};
                    }

                    return obj;
                });

                return newState;
            });
        navigate("/final")
    }
    if (loading) {
        return <DisplayLoading />
    } else {
        return (
            <>
                <label htmlFor="make" className='block text-4xl text-gray-200 pb-8'>Car Options</label>
                <select id='make' className="form-select px-4 py-3 rounded-full w-64"
                    
                    onChange={handleOptionSelection}>
                    <option>Select Your Options</option>
                    {availableOptions.length > 0 ? (
                    availableOptions.map((make, index) => { return <option key={index} value={make.value} >{make.text}</option>})) : ( 
                        <option value={availableOptions.value} >{availableOptions.text}</option>
                     )}
                </select>


            </>
        )
    }
}

export default SelectOptions
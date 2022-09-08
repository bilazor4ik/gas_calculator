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
const SelectMake = () => {
    const [availableMakes, setAvailableMakes] = useState([])
    const { selectedYear, selectedMake, setSelectedMake } = useContext(CarSelectionContext)
    const [loading, setLoading] = useState(false)
    const { steps, setSteps } = useContext(SelectionStepsContext)
    const navigate = useNavigate()
    const getMakes = async () => {
       
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
        
    }
    useEffect(() => {
        setLoading(true)
        setSteps(
            prevState => {
                const newState = prevState.map(obj => {
                   
                    if (obj.id === "02") {
                        return { ...obj, status: 'current' };
                    }
                    
                    return obj;
                });

                return newState;
            });
        try {

            getMakes()
        } catch (error) {
            console.log(error)
        }

        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)


    }, [])

    const handleMakeSelection = (e) => {
        e.preventDefault()
        setSelectedMake(e.target.value)
        setSteps(
            prevState => {
                const newState = prevState.map(obj => {
                   
                    if (obj.id === "02") {
                        return { ...obj, status: 'complete' };
                    }
                    
                    return obj;
                });

                return newState;
            });
            navigate('/selectModel')
    }
    if (loading) {
        return <DisplayLoading />
    } else {
        return (
            <>
                <label htmlFor="make" className='block text-4xl text-gray-200 pb-8'>Car Manufacturer</label>
                <select id='make' className="form-select px-4 py-3 rounded-full w-64"
                    value={selectedMake}
                    onChange={handleMakeSelection}>
                    <option>Select Manufacturer</option>
                    {availableMakes.map((make, index) => {
                        return <option key={index} value={make.value}>{make.text}</option>
                    })}
                </select>


            </>
        )
    }
}

export default SelectMake
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
const SelectModel = () => {
    const [availableModels, setAvailableModels] = useState([])
    const { selectedYear, selectedMake, selectedModel, setSelectedModel } = useContext(CarSelectionContext)
    const [loading, setLoading] = useState(false)
    const { steps, setSteps } = useContext(SelectionStepsContext)
    const navigate = useNavigate()
    const getModels = async () => {

        axios.get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/model', {
            params: {
                year: selectedYear,
                make: selectedMake
            }
        })
            .then(function (response) {
                setAvailableModels(response.data.menuItem)
                console.log(response.data.menuItem)
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
            getModels()
            console.log(availableModels)
        } catch (error) {
            console.log(error)
        }

        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)


    }, [])

    const handleModelSelection = (e) => {
        e.preventDefault()
        setSelectedModel(e.target.value)
        setSteps(
            prevState => {
                const newState = prevState.map(obj => {

                    if (obj.id === "03") {
                        return { ...obj, status: 'complete' };
                    }

                    return obj;
                });

                return newState;
            });
        navigate('/selectOptions')
    }
    if (loading) {
        return <DisplayLoading />
    } else {
        return (
            <>
                <label htmlFor="make" className='block text-4xl text-gray-200 pb-8'>Car Model</label>
                <select id='make' className="form-select px-4 py-3 rounded-full w-64"
                    value={selectedModel}
                    onChange={handleModelSelection}>
                    <option>Select Model</option>
                    {availableModels.map((make, index) => {
                        return <option key={index} value={make.value}>{make.text}</option>
                    })}
                </select>


            </>
        )
    }
}

export default SelectModel
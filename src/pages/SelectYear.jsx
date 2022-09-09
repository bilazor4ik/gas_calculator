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
const SelectYear = () => {
    const [availableYears, setAvailableYears] = useState([])
    const { selectedYear, setSelectedYear } = useContext(CarSelectionContext)
    const [loading, setLoading] = useState(false)
    const { steps, setSteps } = useContext(SelectionStepsContext)
    const navigate = useNavigate()
    const getYears = async () => {
        axios.get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/year')
            .then(function (response) {
                setAvailableYears(response.data.menuItem)

            })
            .catch(function (error) {
                console.log(error);
            })
    }
    useEffect(() => {
        setLoading(true)
        try {

            getYears()
        } catch (error) {
            console.log(error)
        }

        const timer = setTimeout(() => {
            setLoading(false)
        }, 1000)


    }, [])

    const handleYearSelection = (e) => {
        e.preventDefault()
        setSelectedYear(e.target.value)

        setSteps(
            prevState => {
                const newState = prevState.map(obj => {
                    
                    if (obj.id === 1) {
                        return { ...obj, status: 'complete', value:e.target.value };
                    }
                    
                    return obj;
                });

                return newState;
            });
            navigate('/selectMake')


    }
    if (loading) {
        return <DisplayLoading />
    } else {




        return (
            <>



                <label htmlFor="year" className='block text-4xl text-gray-200 pb-8'>Car Year</label>
                <select id='year' className="form-select px-4 py-3 rounded-full w-64"
                    value={selectedYear}
                    onChange={handleYearSelection}>
                    <option>Select Year</option>
                    {availableYears.map((year, index) => {
                        return <option key={index} value={year.value}>{year.text}</option>
                    })}
                </select>


            </>
        )
    }
}

export default SelectYear
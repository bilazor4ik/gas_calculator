import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { CarSelectionContext } from '../context/CarSelectionContext'

const Final = () => {
    const {  selectedOption } = useContext(CarSelectionContext)
    const [selectedCar, setSelectedCar] = useState({})
    const getCarData = async () =>{
        axios.get(`https://www.fueleconomy.gov/ws/rest/vehicle/${selectedOption}`)
            .then(function (response) {

                
                setSelectedCar(response.data)
                console.log(selectedCar)
            })
            .catch(function (error) {
                console.log(error);
            })

    }
    useEffect(()=>{
        getCarData()
    },[])
  return (
    <div>
        Your car {selectedCar.year} {selectedCar.make} {selectedCar.model}
    </div>
  )
}

export default Final
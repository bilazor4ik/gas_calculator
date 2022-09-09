import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { CarSelectionContext } from '../context/CarSelectionContext'
import { SelectionStepsContext } from '../context/SelectionStepsContext'

const Final = () => {
    const {  selectedOption } = useContext(CarSelectionContext)
    const [selectedCar, setSelectedCar] = useState({})
    const { steps, setSteps } = useContext(SelectionStepsContext)
    const getCarData = async () =>{
        axios.get(`https://www.fueleconomy.gov/ws/rest/vehicle/${selectedOption}`)
            .then(function (response) {

                
                setSelectedCar(response.data)
                console.log(response.data)


            })
            .catch(function (error) {
                console.log(error);
            })

    }
    useEffect(()=>{
        getCarData()
        console.log(selectedCar.trany)
            setSteps(
                prevState => {
                    const newState = prevState.map(obj => {
    
                        if (obj.id === 4) {
                            
                            return { ...obj, friendly: selectedCar.trany };
                        }
                       
                        return obj;
                    });
    
                    return newState;
                });
        
        
    },[])
  return (
    <div>
        Your car {selectedCar.year} {selectedCar.make} {selectedCar.model}
    </div>
  )
}

export default Final
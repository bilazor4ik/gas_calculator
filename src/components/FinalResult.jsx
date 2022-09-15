import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { CarSelectorContext } from '../context/CarSelectorContext';


const FinalResult = () => {
    const { state } = useContext(CarSelectorContext)
    const [selectedCar, setSelectedCar] = useState('')
    const getCarData = async () => {
        axios
          .get(`https://www.fueleconomy.gov/ws/rest/vehicle/${state[3].selectedOption}`)
          .then(function (response) {
            setSelectedCar(response.data);
            
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      useEffect(()=>{
        getCarData()
      },[])

      
      if(!selectedCar){
        return 'loading'
      }
      if(selectedCar){
        console.log(selectedCar)
          return (
              <div>FinalResult</div>
              )
        }
}

export default FinalResult
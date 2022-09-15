import axios from 'axios';
import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { CarSelectorContext } from '../context/CarSelectorContext';
import Trip from './Trip';


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

  useEffect(() => {
    getCarData()
  }, [])


  if (!selectedCar) {
    return 'loading'
  }
  if (selectedCar) {

    return (
      <div className='px-4'>
        <p className="text-2xl text-gray-800 dark:text-gray-300 pb-2">Your car: </p>
        <p className="text-4xl text-gray-800 dark:text-gray-200 eading-relaxed">
          <b>
            {selectedCar.year} {selectedCar.make}
            <br /> {selectedCar.model} <br />
            {selectedCar.trany} <br />

          </b>

        </p>
        {selectedCar.comb08 && <span className="text-md text-gray-800 dark:text-gray-300">You avarage MPG: <span className="text-orange-400 text-lg "><b>{selectedCar.comb08}</b></span></span>}

        <Trip mpg={selectedCar.comb08}/>
      </div>
    )
  }
}

export default FinalResult
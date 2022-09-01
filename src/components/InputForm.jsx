import React from 'react'
import SelectYear from './SelectYear'
import SelectMake from './SelectMake'
import { useContext } from 'react'
import { CarSelectorContext } from '../context/AppStepsContext'
import SelectModel from './SelectModel'
import SelectOptions from './SelectOptions'


const InputForm = () => {

  const { selectedYear,selectedMake, selectedModel, carID } = useContext(CarSelectorContext)

  return (
    <>

      <form className="space-y-8 divide-y divide-gray-200 bg-gray-50 px-5 py-8">


        <SelectYear />
        {selectedYear && <SelectMake />}
        {selectedMake && <SelectModel />}
        {selectedModel && <SelectOptions />}


      </form>
      {carID ? `Selected Car ID :${carID}` : null}
    </>

  )
}

export default InputForm
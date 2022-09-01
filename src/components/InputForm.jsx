import React from 'react'
import SelectYear from './SelectYear'
import SelectMake from './SelectMake'
import { useContext } from 'react'
import { CarSelectorContext } from '../context/AppStepsContext'
import SelectModel from './SelectModel'
import SelectOptions from './SelectOptions'


const InputForm = () => {

  const { avaialableMakes, avaialableModels, avaialableOptions, carID } = useContext(CarSelectorContext)

  return (
    <>

      <form className="space-y-8 divide-y divide-gray-200 bg-gray-50 px-5 py-8">


        <SelectYear />
        {avaialableMakes.length > 0 && <SelectMake />}
        {avaialableModels.length > 0 && <SelectModel />}
        {avaialableOptions.length > 0 && <SelectOptions />}


      </form>
      {carID ? `Selected Car ID :${carID}` : null}
    </>

  )
}

export default InputForm
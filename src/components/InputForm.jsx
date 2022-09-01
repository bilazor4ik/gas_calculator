import React from 'react'
import SelectYear from './SelectYear'
import SelectMake from './SelectMake'
import { useContext } from 'react'
import { CarSelectorContext } from '../context/AppStepsContext'
import SelectModel from './SelectModel'
import SelectOptions from './SelectOptions'


const InputForm = () => {

  const { selectedYear,selectedMake, selectedModel, selectionDone } = useContext(CarSelectorContext)

  return (
    <>

      <form className="space-y-4 divide-y divide-solid  divide-gray-200 bg-gray-50 px-5 py-8">


        <SelectYear />
        
        {selectedYear && <SelectMake />}
        
        {selectedMake && <SelectModel />}
        
        {selectedModel && <SelectOptions />}


      </form>
      
      <p className='text-white'>{selectionDone ? 'Done' : 'not Done'}</p>
    </>

  )
}

export default InputForm
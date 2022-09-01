import React from 'react'
import SelectYear from './SelectYear'
import SelectMake from './SelectMake'
import { useContext } from 'react'
import { CarSelectorContext } from '../context/AppStepsContext'
import SelectModel from './SelectModel'
import SelectOptions from './SelectOptions'
import { PencilSquareIcon } from '@heroicons/react/20/solid'


const InputForm = () => {

  const { selectedYear,selectedMake, selectedModel, selectionDone, selectedOption, setSelectionDone, mpg } = useContext(CarSelectorContext)

  return (
    <>
    {selectionDone ? (
      <div className='text-gray-100'>
        <PencilSquareIcon className="h-5 w-5 -ml-6 hover:cursor-pointer" aria-hidden="true" onClick={()=>setSelectionDone(false)}/>
    <p><span>Car:</span> <b>{selectedMake}</b> </p>
    <p><span>Model:</span> <b>{selectedModel}</b> </p>
    <p><span>Option:</span> <b>{selectedOption}</b></p>
    <p><span>Year:</span> <b>{selectedYear}</b>  </p>
    <p><span>Combined MPG:</span> <b>{mpg}</b>  </p>
    
  </div>
    ) : (
  
      <form className="space-y-4 divide-y divide-solid  divide-gray-200 bg-gray-50 px-5 py-8">


        <SelectYear />
        
        {selectedYear && <SelectMake />}
        
        {selectedMake && <SelectModel />}
        
        {selectedModel && <SelectOptions />}


      </form>
      )}
      
    </>

  )
}

export default InputForm
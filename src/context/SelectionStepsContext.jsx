import { createContext, useContext, useState } from "react";
import { CarSelectionContext } from "./CarSelectionContext";

export const SelectionStepsContext = createContext()
export const SelectionStepsContextProvider = ({children}) =>{
    const { selectedYear, selectedMake, selectedModel, selectedOption} = useContext(CarSelectionContext)
    const [steps, setSteps] = useState([
        { id: 1, name: 'Car year',  status: 'current', value: '' },
        { id: 2, name: 'Car Manufacturer',  status: 'upcoming', value: ''},
        { id: 3, name: 'Car Model',  status: 'upcoming', value: ''},
        { id: 4, name: 'Car Options',  status: 'upcoming', value: '', friendly:""},
      ])
    
    return (
        <SelectionStepsContext.Provider value={{
            steps, setSteps
        }}>
            {children}
        </SelectionStepsContext.Provider>
    )
}
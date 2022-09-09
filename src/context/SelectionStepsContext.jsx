import { createContext, useContext, useState } from "react";
import { CarSelectionContext } from "./CarSelectionContext";

export const SelectionStepsContext = createContext()
export const SelectionStepsContextProvider = ({children}) =>{
    const { selectedYear, selectedMake, selectedModel, selectedOption} = useContext(CarSelectionContext)
    const [steps, setSteps] = useState([
        { id: '01', name: 'Car year', href: '/selectYear', status: 'current' },
        { id: '02', name: 'Car Manufacturer', href: '/selectMake', status: 'upcoming'},
        { id: '03', name: 'Car Model', href: '/selectModel', status: 'upcoming'},
        { id: '04', name: 'Car Options', href: '/selectOptions', status: 'upcoming' },
      ])
    
    return (
        <SelectionStepsContext.Provider value={{
            steps, setSteps
        }}>
            {children}
        </SelectionStepsContext.Provider>
    )
}
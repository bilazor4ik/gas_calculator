import { createContext, useState } from "react";

export const SelectionStepsContext = createContext()
export const SelectionStepsContextProvider = ({children}) =>{
    const [steps, setSteps] = useState([
        { id: '01', name: 'Car year', href: '/selectYear', status: 'current' },
        { id: '02', name: 'Car Manufacturer', href: '/selectMake', status: 'upcoming' },
        { id: '03', name: 'Car Model', href: '#', status: 'upcoming' },
        { id: '04', name: 'Car Options', href: '#', status: 'upcoming' },
      ])
    
    return (
        <SelectionStepsContext.Provider value={{
            steps, setSteps
        }}>
            {children}
        </SelectionStepsContext.Provider>
    )
}
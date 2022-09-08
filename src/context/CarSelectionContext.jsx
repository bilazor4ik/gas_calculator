import { createContext, useState } from "react";

export const CarSelectionContext = createContext()

export const CarSelectionContextProvider = ({children})=>{
    const [selectedYear, setSelectedYear] = useState('')
    const  [selectedMake, setSelectedMake] = useState('')
    const [selectedModel, setSelectedModel] = useState("")
    const [selectedOption, setSelectedOption] = useState("")
    
    return (

        <CarSelectionContext.Provider value={{
            selectedYear, setSelectedYear, selectedMake, setSelectedMake, selectedModel, setSelectedModel, selectedOption, setSelectedOption
        }}>
            {children}
        </CarSelectionContext.Provider>
    )
}
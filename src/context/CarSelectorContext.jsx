import { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const CarSelectorContext = createContext()

export const CarSelectorContextProvider = ({children}) =>{

    const initialState = [{
        step: '01',
        name: 'Car Year',
        status: 'current',
        selectedYear: ''
    },
    {
        step: '02',
        name: 'Car Make',
        status: 'upcoming',
        selectedMake: ''
    },
    {
        step: '03',
        name: 'Car Model',
        status: 'upcoming',
        selectedModel: ''
    },
    {
        step: '04',
        name: 'Car Options',
        status: 'upcoming',
        selectedOption: ''
    }]
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const handleYearSelection = (selectedYear)=>{
        dispatch({type: 'SELECT_YEAR', payload: selectedYear})
    }

    const handleMakeSelection = (selectedMake)=>{
        dispatch({type: 'SELECT_MAKE', payload: selectedMake})
    }

    const handleModelSelection = (selectedModel)=>{
        dispatch({type: 'SELECT_MODEL', payload: selectedModel})
    }

    const handleOptionSelection = (selectedOption)=>{
        dispatch({type: 'SELECT_OPTION', payload: selectedOption})
    }

    return (
        <CarSelectorContext.Provider value={{state, handleYearSelection, handleMakeSelection, handleModelSelection, handleOptionSelection}}>
            {children}
        </CarSelectorContext.Provider>
    )
}
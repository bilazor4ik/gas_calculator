import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const CarSelectorContext = createContext()

export const CarSelectorContextProvider = ({ children }) => {
    // Available years after initial load
    const [avaialableYears, setAvailableYears] = useState([])
    const [selectedYear, setSelectedYear] = useState("")

    // Available Car manufacturers after year selevtion
    const [avaialableMakes, setAvailableMakes] = useState([])
    const [selectedMake, setSelectedMake] = useState("")

    // Available Car Models after Make selevtion
    const [avaialableModels, setAvailableModels] = useState([])
    const [selectedModel, setSelectedModel] = useState("")

    // Available Car Options after selection year, make and model
    const [avaialableOptions, setAvailableOptions] = useState([])
    const [selectedOption, setSelectedOption] = useState("")


    // set Car ID after all options selected
    const [carID, setCarID] = useState(selectedOption)


    const [selectionProcess, setSelectionProcess] = useState(false)
    //get all available years initially 
    useEffect(() => {
        axios.get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/year')
            .then(function (response) {
                setAvailableYears(response.data.menuItem)
            })
            .catch(function (error) {
                console.log(error);
            })


    }, [])

    

    

    return (
        <CarSelectorContext.Provider value={{
            avaialableYears,
            selectedYear,
            setSelectedYear,
            avaialableMakes,
            setAvailableMakes,
            selectedMake, 
            setSelectedMake,
             avaialableModels, 
             selectedModel, 
             setSelectedModel, 
             setAvailableModels, 
             avaialableOptions, 
             setAvailableOptions,
              selectedOption, 
              setSelectedOption,
              carID, 
              setCarID,
              selectionProcess,
              setSelectionProcess
        }}>

            {children}
        </CarSelectorContext.Provider>
    )

}
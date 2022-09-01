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

    const [mpg, setMpg] = useState('')
    


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

     //get all available years initially 
     const getCarEmission = () => {
        axios.get(`https://www.fueleconomy.gov/ws/rest/vehicle/${carID}`)
            .then(function (response) {
                setMpg(response.data.comb08)
                console.log(response.data.comb08)
            })
            .catch(function (error) {
                console.log(error);
            })


    }
    
    const [selectionDone, setSelectionDone] = useState(false)

    

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
              selectionDone,
              setSelectionDone,
              getCarEmission,
              mpg
        }}>

            {children}
        </CarSelectorContext.Provider>
    )

}
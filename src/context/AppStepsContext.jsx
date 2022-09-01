import axios from "axios"
import { createContext, useEffect, useState } from "react"

export const CarSelectorContext = createContext()

export  const CarSelectorContextProvider = ({ children }) => {
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


// Available Car Options after selection year, make and model
const [carID, setCarId] = useState()


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
 
   //get all available Car manufacturers after year selection
 useEffect(() => {
    axios.get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/make', {
        params: {
            year: selectedYear
        }
    })
        .then(function (response) {

            setAvailableMakes(response.data.menuItem)
          
        })
        .catch(function (error) {
            console.log(error);
        })
}, [selectedYear])
    
//get all available Car models after year & make selection
useEffect(() => {
    axios.get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/model', {
        params: {
            year: selectedYear,
            make: selectedMake
        }
    })
        .then(function (response) {
            setAvailableModels(response.data.menuItem)
        })
        .catch(function (error) {
            console.log(error);
        })
}, [selectedMake])


 //get all available Car models after year & make selection
 useEffect(() => {
    axios.get('https://www.fueleconomy.gov/ws/rest/vehicle/menu/options', {
        params: {
            year: selectedYear,
            make: selectedMake,
            model: selectedModel
        }
    })
        .then(function (response) {
            console.log(response.data)
            setAvailableOptions(response.data.menuItem)
            
        })
        .catch(function (error) {
            console.log(error);
        })
}, [selectedModel])

    return (
        <CarSelectorContext.Provider value={{ avaialableYears, selectedYear, setSelectedYear, avaialableMakes, setAvailableMakes, selectedMake, setSelectedMake, avaialableModels, selectedModel, setSelectedModel,setAvailableModels, avaialableOptions, setAvailableOptions, selectedOption, setSelectedOption,  }}>

            {children}
        </CarSelectorContext.Provider>
    )

}
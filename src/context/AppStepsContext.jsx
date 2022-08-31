const { useState } = require("react");
const { createContext } = require("react");

const AppStepsContext = createContext()

const AppStepsContextProvider = ({ children }) => {
    const [car, setCar] = useState()
    return (
        <AppStepsContext.Provider value={{car, setCar}}>

            {children}
        </AppStepsContext.Provider>
    )

}
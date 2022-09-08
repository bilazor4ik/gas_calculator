import { createContext, useState } from "react";

export const StartedContext = createContext()

export const StartedContextProvider = ({children})=>{
    const [started, setStarted] = useState(false)
    return (
        <StartedContext.Provider value={{started, setStarted}}>
            {children}
        </StartedContext.Provider>
    )
}
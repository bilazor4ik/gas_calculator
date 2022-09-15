import { createContext, useEffect, useRef, useState } from "react";

export const DarkModeContext = createContext()

export const DarkModeContextProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState({ status: false })
    const firstRender = useRef(true);
    useEffect(() => {

        if (firstRender.current) {
            if (JSON.parse(localStorage.getItem('darkMode'))) {
                setDarkMode({ status: localStorage.getItem('darkMode') })
                
            }
            firstRender.current = false
        } else {
            localStorage.setItem('darkMode', JSON.stringify(darkMode.status))
        }

        document.body.classList.toggle('dark', darkMode.status)
    }, [darkMode])

    return (
        <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    )
}
import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false
}

export function ContextProvider({children}){
    const [screenSize, setScreenSize] = useState(undefined)
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)

    function setMode(e){
        setCurrentMode(e.target.value)
        localStorage.setItem('themeMode', e.target.value)
    }

    function setColor(color){
        setCurrentColor(color)
        localStorage.setItem('colorMode', color)
    }

    function handleClick (clicked){
        setIsClicked({ ...initialState, [clicked]: true })
    }
      
    return (
        <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
            {children}
        </StateContext.Provider>
    )
}

export function useStateContext (){
    return useContext(StateContext)
}
import React, { useState } from 'react'

const ThemeContext = React.createContext({
  isDarkMode: true,
  darkModeToggle: ()=>{},
})

export const  ThemeContextProvider= ({ children }: any) =>{
  const [isDarkMode, setIsDarkMode] = useState(true);

  const darkModeToggle = () => {
    setIsDarkMode(!isDarkMode)
  }

  const contextValue = {
    isDarkMode: isDarkMode,
    darkModeToggle: darkModeToggle,
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext
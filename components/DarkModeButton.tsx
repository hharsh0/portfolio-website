import React, { useContext } from 'react'
import ThemeContext from '../store/themeContext';

function DarkModeButton() {
  const themeCtx = useContext(ThemeContext)
  console.log(themeCtx.isDarkMode)
  return (
    <label onChange={themeCtx.darkModeToggle} className="switch">
      <input type="checkbox" defaultChecked={true} />
      <span className="slider round" />
    </label>
  );
}

export default DarkModeButton
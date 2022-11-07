import React,{useContext} from 'react'
import styles from '../../../styles/NavBar.module.css'
import DarkModeButton from '../../DarkModeButton'
import ThemeContext from '../../../store/themeContext'
import Link from "next/link";


function Main() {
  const themeCtx = useContext(ThemeContext)
  return (
    <div
      className={`${themeCtx.isDarkMode ? "bg-gray-700" : "null"} ${
        styles.mainBackground
      }`}
    >
      <div className={`h-[100vh] flex flex-col justify-center w-3/4 mx-auto `}>
        <div
          className={`text-7xl  ${
            themeCtx.isDarkMode ? "text-white" : "text-[#2D2D2D]"
          } font-bold ${styles.navFont}`}
        >
          <div>
            Hello I'm <br /> <span className="text-[#E63946]">Harsh</span>
          </div>
        </div>
        <p
          className={`${styles.latoFont}  ${
            themeCtx.isDarkMode ? "text-gray-400" : "text-[#6A6A6A]"
          } w-1/2 py-8`}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          consequat, faucibus et, et. Non semper blandit vitae semper blandit.
          Tellus dignissim a dui turpis arcu, nulla ullamcorper tincidunt.
        </p>
        <button
          className={`text-sm self-start border py-2 px-5 ${styles.navFont}  ${
            themeCtx.isDarkMode
              ? "text-white border-white"
              : "text-[#2D2D2D] border-[#5A5A5A]"
          } rounded-full  `}
        >
          <Link href="/contact">GET IN TOUCH</Link>
        </button>
        <div className="mt-8">
          <DarkModeButton />
        </div>
      </div>
    </div>
  );
}

export default Main
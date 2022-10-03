import React,{useContext} from 'react'
import ThemeContext from '../../store/themeContext';
import styles from '../../styles/NavBar.module.css'
import Link from "next/link";
import {useState} from 'react'


function NavBar() {
    const themeCtx = useContext(ThemeContext)
    

  return (
    <div className={``}>
      <div className="absolute w-3/4 m-auto left-0 right-0">
        <div
          className={`flex justify-between content-center pt-8 pb-8  ${styles.navFont}`}
        >
          <div
            className={`font-bold text-3xl cursor-pointer ${
              themeCtx.isDarkMode ? "text-white" : ""
            }`}
          >
            <Link href="/">Harsh</Link>
            <span className="text-[#E63946]">.</span>
          </div>
          <div className={`flex content-center ${styles.navFont}`}>
            <div
              className={`text-[#E63946] px-4 py-1 cursor-pointer font-bold`}
            >
              <Link href="/">Home</Link>
            </div>
            <div
              className={`px-4 py-1 cursor-pointer font-bold ${
                themeCtx.isDarkMode ? "text-white" : ""
              }`}
            >
              <Link href="">About me</Link>
            </div>
            <div
              className={`px-4 py-1 cursor-pointer font-bold  ${
                themeCtx.isDarkMode ? "text-white" : ""
              }`}
            >
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>
        <hr className="w-full" />
      </div>
    </div>
  );
}

export default NavBar
import React from 'react'
import styles from '../../../styles/NavBar.module.css'

function NavBar() {
  return (
    <div className={``}>
      <div className="absolute w-3/4 m-auto left-0 right-0">
        <div
          className={`flex justify-between content-center pt-8 pb-8  ${styles.navFont}`}
        >
          <div className="font-bold text-3xl">
            Harsh<span className="text-[#E63946]">.</span>
          </div>
          <div className={`flex content-center ${styles.navFont}`}>
            <div className="text-[#E63946] px-3 py-1">Home</div>
            <div className="px-3 py-1">About me</div>
            <div className="px-3 py-1">Contact</div>
          </div>
        </div>
        <hr className="w-full" />
      </div>
    </div>
  );
}

export default NavBar
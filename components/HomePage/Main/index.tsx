import React from 'react'
import styles from '../../../styles/NavBar.module.css'

function Main() {
  return (
    <div className={`h-[100vh] flex flex-col justify-center w-3/4 mx-auto`}>
      <div className={`text-7xl text-[#2D2D2D] font-bold ${styles.navFont}`}>
        <div>
          Hello I'm <br /> <span className="text-[#E63946]">Harsh</span>
        </div>
      </div>
      <p className={`${styles.latoFont} text-[#6A6A6A] w-1/2 py-8`}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
        consequat, faucibus et, et. Non semper blandit vitae semper blandit.
        Tellus dignissim a dui turpis arcu, nulla ullamcorper tincidunt.
      </p>
      <button
        className={`text-sm self-start border py-2 px-5 ${styles.navFont} text-[#2D2D2D] rounded-full border-[#5A5A5A]`}
      >
        GET IN TOUCH
      </button>
    </div>
  );
}

export default Main
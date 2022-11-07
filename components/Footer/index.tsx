import Link from "next/link";
import styles from '../../styles/NavBar.module.css'

function Footer() {
  return (
    <div className={`bg-primary`}>
      <div className={`${styles.footerBackground} w-3/4 mx-auto`}>
        <section className="text-textPrimary body-font">
          <div className="container px-5 py-24 mx-auto text-center">
            <div className="flex flex-col text-center w-full mb-6">
              <h1
                className={`text-7xl font-medium mb-6 text-textPrimary ${styles.navFont}`}
              >
                Let's work together
              </h1>
              <p
                className={`lg:w-2/3 mx-auto leading-relaxed text-xl text-textPrimary ${styles.latoFont} font-medium`}
              >
                I'm available for freelance work. Have any projects in your
                mind? Just feel free to contact me
              </p>
            </div>
            <button
              className={`text-base border-2 font-medium mx-auto py-2 px-5 ${styles.navFont} text-textPrimary rounded-full border-textPrimary`}
            >
              <Link href="/contact">CONTACT ME</Link>
            </button>
          </div>
        </section>
        {/* <div className="w-3/4 mx-auto bg-[#848484] w-full h-[1px]" /> */}
        <footer className="text-textPrimary body-font py-2">
          <div className="container px-5 py-1 mx-auto flex items-center sm:flex-row flex-col">
            <p className="text-xl text-textPrimary sm:ml-4 sm:pl-4  sm:border-gray-200 sm:py-2 sm:mt-0 mt-4 font-medium">
              © 2020 Harshvardhan
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <a className="text-textPrimary">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-9 h-9"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a className="ml-3 text-textPrimary">
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-9 h-9"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a className="ml-3 text-textPrimary">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-9 h-9"
                  viewBox="0 0 24 24"
                >
                  <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                </svg>
              </a>
              <a className="ml-3 text-textPrimary">
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={0}
                  className="w-9 h-9"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  />
                  <circle cx={4} cy={4} r={2} stroke="none" />
                </svg>
              </a>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer